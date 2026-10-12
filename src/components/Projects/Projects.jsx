
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { useTheme } from "../../context/ThemeContext";
import ProjectCard from "./ProjectCard";

import project1 from "../../assets/pr1.png";
import project2 from "../../assets/pr2.png";
import project3 from "../../assets/pr3.png";
import project4 from "../../assets/pr4.png";

const projects = [
  {
    number: "01",
    title: "Kora Consulting",
    category: "Web Design",
    image: project1,
    description:
      "A refined consulting experience built around clarity, trust and strong visual hierarchy.",
    tags: ["React", "UI/UX", "Responsive"],
  },
  {
    number: "02",
    title: "KYMA AI",
    category: "AI Agency",
    image: project2,
    description:
      "A futuristic digital experience designed for an AI-focused creative agency.",
    tags: ["React", "Animation", "Tailwind"],
  },
  {
    number: "03",
    title: "MUGEN Creative",
    category: "Creative Studio",
    image: project3,
    description:
      "An expressive studio website combining bold typography with immersive visual direction.",
    tags: ["Creative", "Motion", "Frontend"],
  },
  {
    number: "04",
    title: "AXNN Retail",
    category: "E-Commerce",
    image: project4,
    description:
      "A modern commerce interface focused on product presentation and conversion.",
    tags: ["E-Commerce", "UX", "Development"],
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const { isDark } = useTheme();

  // Track scroll progress for the entire Projects section.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Smooth scroll-driven animation.
  const progress = useSpring(scrollYProgress, {
    stiffness: 65,
    damping: 24,
    mass: 0.35,
  });

  // Heading animation.
  const headingY = useTransform(
    progress,
    [0, 0.35, 0.75, 1],
    [0, -20, -80, -120]
  );

  const headingOpacity = useTransform(
    progress,
    [0, 0.2, 0.45, 0.72],
    [1, 1, 0.6, 0]
  );

  const headingScale = useTransform(
    progress,
    [0, 0.4, 0.8],
    [1, 0.97, 0.92]
  );

  // Project canvas animation.
  const canvasScale = useTransform(
    progress,
    [0, 0.4, 0.8, 1],
    [0.96, 0.97, 0.99, 1]
  );

  const canvasY = useTransform(
    progress,
    [0, 0.5, 1],
    [18, 8, 0]
  );

  // Background glow animation.
  const glowOpacity = useTransform(
    progress,
    [0, 0.35, 0.7, 1],
    [0.3, 0.5, 0.8, 1]
  );

  // Scroll progress indicator.
  const progressWidth = useTransform(
    progress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <section
      id="work"
      ref={sectionRef}
      className={`
        relative min-h-[330vh]
        overflow-clip
        transition-colors duration-500
        ${
          isDark
            ? "bg-neutral-950 text-white"
            : "bg-neutral-50 text-neutral-950"
        }
      `}
    >
      {/* BACKGROUND EFFECTS */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blue glow */}
        <motion.div
          style={{ opacity: glowOpacity }}
          className={`
            absolute -right-[15%] top-[8%]
            h-[650px] w-[650px]
            rounded-full blur-[180px]
            ${
              isDark
                ? "bg-blue-600/[0.08]"
                : "bg-blue-500/[0.09]"
            }
          `}
        />

        {/* Indigo glow */}
        <motion.div
          style={{ opacity: glowOpacity }}
          className={`
            absolute -left-[15%] bottom-[8%]
            h-[600px] w-[600px]
            rounded-full blur-[180px]
            ${
              isDark
                ? "bg-indigo-600/[0.06]"
                : "bg-indigo-500/[0.07]"
            }
          `}
        />

        {/* Background grid */}
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
      </div>

      {/* STICKY ANIMATION STAGE */}

      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          className="
            relative mx-auto h-full w-full
            max-w-[1600px] px-5
            sm:px-8 lg:px-12
          "
        >
          {/* SECTION HEADING */}

          <motion.div
            style={{
              y: headingY,
              opacity: headingOpacity,
              scale: headingScale,
            }}
            className="
              pointer-events-none absolute
              left-5 top-[12%] z-40
              w-[calc(100%-40px)]
              sm:left-8 sm:top-[30%] sm:w-[340px]
              lg:left-12 lg:w-[390px]
            "
          >
            {/* Label */}
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-blue-500" />

              <span
                className={`
                  text-[10px] uppercase tracking-[0.32em]
                  transition-colors duration-500
                  ${
                    isDark
                      ? "text-white/45"
                      : "text-neutral-500"
                  }
                `}
              >
                Full-Stack Development
              </span>
            </div>

            {/* Main title */}
            <h2
              className="
                text-[clamp(3.8rem,7vw,8rem)]
                font-semibold leading-[0.82]
                tracking-[-0.075em]
              "
            >
              Design.
              <br />
              Build.
              <br />

              <span
                className={
                  isDark
                    ? "text-white/25"
                    : "text-neutral-950/20"
                }
              >
                Deploy.
              </span>
            </h2>

            {/* Description */}
            <p
              className={`
                mt-7 max-w-sm text-sm leading-relaxed
                transition-colors duration-500 sm:text-base
                ${
                  isDark
                    ? "text-white/50"
                    : "text-neutral-600"
                }
              `}
            >
              From intuitive user interfaces to powerful backend
              systems, I build modern, responsive web applications
              that bring ideas to life through clean code,
              thoughtful design, and functional experiences.
            </p>

            {/* Technologies */}
            <div className="mt-7 flex flex-wrap gap-2">
              {["React", "Tailwind CSS", "Node.js", "SQL"].map(
                (tech) => (
                  <span
                    key={tech}
                    className={`
                      rounded-full border px-3 py-1.5
                      text-[9px] tracking-wide
                      transition-colors duration-500
                      ${
                        isDark
                          ? "border-white/10 bg-white/[0.03] text-white/50"
                          : "border-neutral-900/10 bg-white/70 text-neutral-600"
                      }
                    `}
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* Project metadata */}
            <div
              className={`
                mt-7 flex flex-wrap items-center gap-4
                text-[9px] uppercase tracking-[0.25em]
                transition-colors duration-500
                ${
                  isDark
                    ? "text-white/30"
                    : "text-neutral-500"
                }
              `}
            >
              <span>04 Projects</span>

              <span
                className={`h-px w-6 ${
                  isDark ? "bg-white/15" : "bg-neutral-900/15"
                }`}
              />

              <span>Full-Stack Portfolio</span>
            </div>
          </motion.div>

          {/* PROJECT CANVAS */}

          <motion.div
            style={{
              scale: canvasScale,
              y: canvasY,
            }}
            className="
              absolute inset-x-0 top-1/2 z-20
              h-[78vh] -translate-y-1/2
              px-5 sm:px-8 lg:px-12
              [perspective:1800px]
            "
          >
            <div className="relative h-full w-full">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.number}
                  project={project}
                  index={index}
                  progress={progress}
                />
              ))}
            </div>
          </motion.div>

          {/* SCROLL INDICATOR */}

          <div
            className="
              absolute bottom-6 left-5 right-5 z-50
              flex items-center justify-between
              sm:left-8 sm:right-8
              lg:left-12 lg:right-12
            "
          >
            <div
              className={`
                flex items-center gap-3
                text-[9px] uppercase tracking-[0.3em]
                transition-colors duration-500
                ${
                  isDark
                    ? "text-white/35"
                    : "text-neutral-500"
                }
              `}
            >
              <span>Scroll to explore</span>

              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-blue-500"
              >
                ↓
              </motion.span>
            </div>

            <div
              className={`
                hidden h-px w-32 overflow-hidden
                transition-colors duration-500 sm:block
                ${isDark ? "bg-white/10" : "bg-neutral-900/10"}
              `}
            >
              <motion.div
                style={{ width: progressWidth }}
                className="h-full bg-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}