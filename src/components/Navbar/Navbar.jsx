import { useEffect, useRef, useState } from "react";
import {motion,AnimatePresence,useScroll,useMotionValueEvent,} from "framer-motion";
import { Menu,X, Sun, Moon } from "lucide-react";
import {Link,useLocation,useNavigate,} from "react-router-dom";
import Button from "../Button/Button";
import { useTheme } from "../../context/ThemeContext";
import photo from "../../assets/photo.png";

export default function Navbar() {
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  const previousScrollY = useRef(0);
  const scrollDirection = useRef("up");
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (currentY) => {
    const previousY = previousScrollY.current;
    const difference = currentY - previousY;
    if (Math.abs(difference) < 3) return;
    if (currentY <= 20) {
      setCompact(false);
      scrollDirection.current = "up";
    } else if (difference > 0) {
      scrollDirection.current = "down";
      setCompact(true);
    } else {
      scrollDirection.current = "up";
      setCompact(false);
    }
    previousScrollY.current = currentY;
  });
  const navItems = [
    { name: "Work", href: "/work" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  const goToSection = (href) => {
    setMenuOpen(false);
    if (href === "/work") {
      navigate("/work");
      return;
    }
    const targetId = href.replace("#", "");
    if (location.pathname !== "/") {
      navigate(`/#${targetId}`);
      return;
    }

    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) return;
    const targetId = decodeURIComponent(
      location.hash.slice(1)
    );

    const frame = requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);
  const isWorkPage = location.pathname === "/work";

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          width: compact
            ? "190px"
            : "min(1190px, calc(100vw - 48px))",
          paddingLeft: compact ? "16px" : "20px",
          paddingRight: compact ? "16px" : "20px",
          backgroundColor: isDark
            ? compact
              ? "rgba(0, 0, 0, 0.72)"
              : "rgba(0, 0, 0, 0.2)"
            : compact
              ? "rgba(255, 255, 255, 0.88)"
              : "rgba(255, 255, 255, 0.62)",
          borderColor: isDark
            ? "rgba(255, 255, 255, 0.14)"
            : "rgba(23, 23, 23, 0.12)",
        }}
        transition={{
          width: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          },
          paddingLeft: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          },
          paddingRight: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          },
          backgroundColor: { duration: 0.35 },
          borderColor: { duration: 0.35 },
        }}
        className={`
          fixed left-1/2 top-5 z-50
          flex -translate-x-1/2 items-center
          overflow-hidden rounded-full border
          py-2 backdrop-blur-xl
          shadow-[0_8px_40px_rgba(0,0,0,0.2)]
          transition-colors duration-300
          ${isDark ? "text-white" : "text-neutral-950"}
        `}
      >
        <Link
          to="/"
          onClick={(event) => {
            setMenuOpen(false);
            if (location.pathname === "/") {
              event.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }
          }}
          className="flex shrink-0 items-center gap-2 sm:gap-3"
        >
          <div
            className={`
              h-9 w-9 shrink-0 overflow-hidden
              rounded-full border
              ${
                isDark
                  ? "border-white/10"
                  : "border-neutral-900/10"
              }
            `}
          >
            <img
              src={photo}
              alt="Homayoun"
              className="h-full w-full object-cover"
            />
          </div>

          <motion.span
            animate={{
              opacity: 1,
              x: 0,
              scale: compact ? 0.95 : 1,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="whitespace-nowrap text-sm font-semibold"
          >
            Homayoun
          </motion.span>
        </Link>
        <AnimatePresence initial={false}>
          {!compact && (
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 18 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="ml-auto hidden items-center md:flex"
            >
              <div className="flex items-center gap-7">
                {navItems.map((item) =>
                  item.href === "/work" ? (
                    <Link
                      key={item.name}
                      to="/work"
                      className={`
                        whitespace-nowrap text-sm
                        transition-colors duration-300
                        ${
                          isWorkPage
                            ? "text-blue-500"
                            : isDark
                              ? "text-white/70 hover:text-white"
                              : "text-neutral-600 hover:text-neutral-950"
                        }
                      `}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(event) => {
                        event.preventDefault();
                        goToSection(item.href);
                      }}
                      className={`
                        whitespace-nowrap text-sm
                        transition-colors duration-300
                        ${
                          isDark
                            ? "text-white/70 hover:text-white"
                            : "text-neutral-600 hover:text-neutral-950"
                        }
                      `}
                    >
                      {item.name}
                    </a>
                  )
                )}
              </div>
              <div className="ml-4 shrink-0">
                <Button
                  text="Let's Talk"
                  variant="primary"
                  padding="pl-5 pr-2 py-2"
                  onClick={() => goToSection("#contact")}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
  
        <motion.button
          type="button"
          whileTap={{ scale: 0.9 }}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={
            menuOpen ? "Close navigation" : "Open navigation"
          }
          aria-expanded={menuOpen}
          className={`
            ml-auto flex h-10 w-10 shrink-0
            items-center justify-center rounded-full
            transition-colors md:hidden
            ${
              isDark
                ? "bg-white/10 hover:bg-white/20"
                : "bg-neutral-900/5 hover:bg-neutral-900/10"
            }
          `}
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X size={20} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <Menu size={20} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`
              fixed inset-0 z-40
              flex items-center justify-center
              px-6 backdrop-blur-2xl md:hidden
              ${
                isDark
                  ? "bg-neutral-950/95"
                  : "bg-neutral-50/95"
              }
            `}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.08 },
                },
              }}
              className="flex flex-col items-center gap-8"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4 },
                    },
                  }}
                >
                  {item.href === "/work" ? (
                    <Link
                      to="/work"
                      onClick={() => setMenuOpen(false)}
                      className={`
                        text-3xl font-medium
                        tracking-tight transition-colors
                        hover:text-blue-500 sm:text-4xl
                        ${
                          isWorkPage
                            ? "text-blue-500"
                            : isDark
                              ? "text-white"
                              : "text-neutral-950"
                        }
                      `}
                    >
                      <span className="mr-3 text-xs text-blue-500">
                        0{index + 1}
                      </span>
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(event) => {
                        event.preventDefault();
                        goToSection(item.href);
                      }}
                      className={`
                        text-3xl font-medium
                        tracking-tight transition-colors
                        hover:text-blue-500 sm:text-4xl
                        ${
                          isDark
                            ? "text-white"
                            : "text-neutral-950"
                        }
                      `}
                    >
                      <span className="mr-3 text-xs text-blue-500">
                        0{index + 1}
                      </span>
                      {item.name}
                    </a>
                  )}
                </motion.div>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4 },
                  },
                }}
                className="mt-2 flex items-center gap-4"
              >
                <ThemeToggle mobile />
                <span
                  className={`text-sm ${
                    isDark
                      ? "text-white/60"
                      : "text-neutral-600"
                  }`}
                >
                  {isDark ? "Dark mode" : "Light mode"}
                </span>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4 },
                  },
                }}
                className="mt-1"
              >
                <Button
                  text="Let's Talk"
                  variant="primary"
                  onClick={() => goToSection("#contact")}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}