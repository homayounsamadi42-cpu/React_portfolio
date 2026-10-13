import Button from "../Button/Button";
import { MoveDown } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import hero from "../../assets/photo.png";

export default function Hero() {
  const { isDark } = useTheme();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <section
      id="home"
      className={`
        relative flex min-h-screen items-center
        overflow-hidden transition-colors duration-500
        ${
          isDark
            ? "bg-neutral-950 text-white"
            : "bg-neutral-50 text-neutral-950"
        }
      `}
    >
      <div
        className={`
          absolute -right-40 -top-40
          h-[600px] w-[600px]
          rounded-full blur-[140px]
          transition-opacity duration-500
          ${
            isDark
              ? "bg-blue-600/20"
              : "bg-blue-500/15"
          }
        `}
      />
      <div
        className={`
          absolute -bottom-60 -left-40
          h-[500px] w-[500px]
          rounded-full blur-[140px]
          transition-opacity duration-500
          ${
            isDark
              ? "bg-indigo-600/10"
              : "bg-indigo-500/10"
          }
        `}
      />
      <div
        className={`
          absolute inset-0
          bg-[size:80px_80px]
          bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
          transition-opacity duration-500
          ${
            isDark
              ? "text-white opacity-[0.035]"
              : "text-neutral-950 opacity-[0.045]"
          }
        `}
      />
      <div
        className="
          relative z-10 mx-auto w-full max-w-7xl
          px-6 pb-20 pt-32 lg:px-10
        "
      >
        <div
          className={`
            mb-8 flex items-center gap-3
            text-sm uppercase tracking-[0.25em]
            transition-colors duration-500
            ${
              isDark
                ? "text-white/50"
                : "text-neutral-500"
            }
          `}
        >
          <span
            className="
              h-2 w-2 animate-pulse
              rounded-full bg-blue-500
            "
          />
          <span>Available for work</span>
        </div>
        <div
          className="
            grid items-center gap-12
            lg:grid-cols-[1.4fr_0.6fr]
          "
        >
          <div>
            <h1 className="text-gray-100">JONIOR</h1>
            <h1
              className="
                text-[clamp(4em,11vw,10rem)]
                font-semibold leading-[0.82]
                tracking-[-0.06em]
              "
            >
              WEB
              <br />
              <span
                className={
                  isDark
                    ? "text-white/25"
                    : "text-neutral-950/20"
                }
              >
                DESIGNER
              </span>
            </h1>
            <div className="mt-10 max-w-xl">
              <p
                className={`
                  max-w-lg text-lg leading-relaxed
                  transition-colors duration-500 md:text-xl
                  ${
                    isDark
                      ? "text-white/60"
                      : "text-neutral-600"
                  }
                `}
              >
                I design and build modern responsive
                websites that combine thoughtful
                design with clean, functional code.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  text="View My Work"
                  variant="primary"
                  onClick={() => scrollToSection("projects")}
                />

                <Button
                  text="Let's Talk"
                  variant="secondary"
                  onClick={() => scrollToSection("contact")}
                />
              </div>
            </div>
          </div>

          {/* Right content */}
          <div
            className="
              relative flex justify-center
              lg:justify-end
            "
          >
            {/* Outer circle */}
            <div
              className={`
                relative h-[280px] w-[280px]
                rounded-full border p-3
                transition-colors duration-500
                md:h-[350px] md:w-[350px]
                ${
                  isDark
                    ? "border-white/10"
                    : "border-neutral-900/10"
                }
              `}
            >
              {/* Image glow */}
              <div
                className={`
                  absolute inset-5 rounded-full
                  blur-3xl transition-colors duration-500
                  ${
                    isDark
                      ? "bg-blue-500/20"
                      : "bg-blue-500/15"
                  }
                `}
              />

              {/* Profile image */}
              <div
                className={`
                  relative h-full w-full
                  overflow-hidden rounded-full border
                  transition-colors duration-500
                  ${
                    isDark
                      ? "border-white/10"
                      : "border-neutral-900/10"
                  }
                `}
              >
                <img
                  src={hero}
                  alt="Homayoun"
                  className="
                    h-full w-full object-cover
                    grayscale transition-all
                    duration-700 hover:scale-105
                    hover:grayscale-0
                  "
                />
              </div>
            </div>

            {/* Developer label */}
            <div
              className={`
                absolute bottom-2 left-1/2
                -translate-x-1/2 rounded-full
                border px-4 py-2 backdrop-blur-md
                transition-colors duration-500
                lg:left-auto lg:right-[-20px]
                lg:translate-x-0
                ${
                  isDark
                    ? "border-white/10 bg-white/5 text-white/60"
                    : "border-neutral-900/10 bg-white/70 text-neutral-600"
                }
                text-xs uppercase tracking-widest
              `}
            >
              Full-Stack Developer
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`
            mt-24 grid max-w-2xl grid-cols-3
            border-t pt-8 transition-colors duration-500
            ${
              isDark
                ? "border-white/10"
                : "border-neutral-900/10"
            }
          `}
        >
          <div>
            <p className="text-3xl font-semibold">
              +10
            </p>

            <p
              className={`
                mt-2 text-sm
                ${
                  isDark
                    ? "text-white/40"
                    : "text-neutral-500"
                }
              `}
            >
              Clients Worldwide
            </p>
          </div>

          <div>
            <p className="text-3xl font-semibold">
              +3
            </p>

            <p
              className={`
                mt-2 text-sm
                ${
                  isDark
                    ? "text-white/40"
                    : "text-neutral-500"
                }
              `}
            >
              Years Experience
            </p>
          </div>

          <div>
            <p className="text-3xl font-semibold">
              +10
            </p>

            <p
              className={`
                mt-2 text-sm
                ${
                  isDark
                    ? "text-white/40"
                    : "text-neutral-500"
                }
              `}
            >
              Projects Completed
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`
            absolute bottom-8 right-8
            hidden items-center gap-3
            text-xs uppercase tracking-widest
            transition-colors duration-500
            md:flex
            ${
              isDark
                ? "text-white/30"
                : "text-neutral-500/70"
            }
          `}
        >
          Scroll to explore

          <MoveDown size={16} />
        </div>
      </div>
    </section>
  );
}