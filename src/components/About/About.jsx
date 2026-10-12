import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

import {
  ArrowUpRight,
  Code2,
  Database,
  Layers3,
  Sparkles,
  Server,
  Workflow,
} from "lucide-react";

// ============================================================
// DATA
// ============================================================

const skills = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Python",
  "SQL",
  "Framer Motion",
];

const capabilities = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive interfaces with thoughtful layouts, reusable components, and smooth interactions.",
    icon: Code2,
    tags: ["React", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Developing application logic, handling data, and connecting interfaces to reliable backend systems.",
    icon: Server,
    tags: ["Python", "APIs"],
  },
  {
    number: "03",
    title: "Database & Integration",
    description:
      "Structuring data and connecting the different parts of an application into one working solution.",
    icon: Database,
    tags: ["SQL", "Integration"],
  },
];

// ============================================================
// ANIMATION VARIANTS
// ============================================================

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -45,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 45,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ============================================================
// ABOUT COMPONENT
// ============================================================

export default function About() {
  const sectionRef = useRef(null);

  // ----------------------------------------------------------
  // SCROLL PROGRESS
  // ----------------------------------------------------------

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // ----------------------------------------------------------
  // SCROLL-BASED VISUAL ANIMATIONS
  // ----------------------------------------------------------

  const visualY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [75, 0, -65]
  );

  const visualRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-4, 0, 4]
  );

  const visualScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.92, 1, 0.96]
  );

  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    [0.15, 0.7, 0.55, 0.15]
  );

  const lineScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.75, 1],
    [0, 1, 1, 0.65]
  );

  const smoothY = useSpring(visualY, {
    stiffness: 80,
    damping: 22,
  });

  const smoothRotate = useSpring(visualRotate, {
    stiffness: 80,
    damping: 22,
  });

  // ----------------------------------------------------------
  // RETURN
  // ----------------------------------------------------------

  return (
    <section
      ref={sectionRef}
      id="about"
      className="
        relative isolate overflow-hidden
        bg-neutral-950
        px-6 py-28 text-white
        sm:px-8 sm:py-32
        lg:px-12 lg:py-40
      "
    >
      {/* ======================================================
          BACKGROUND EFFECTS
      ======================================================= */}

      <motion.div
        style={{
          y: smoothY,
          opacity: glowOpacity,
        }}
        className="
          pointer-events-none absolute
          -left-40 top-1/4
          h-[420px] w-[420px]
          rounded-full bg-blue-600/[0.12]
          blur-[150px]
        "
      />

      <motion.div
        style={{
          y: useTransform(visualY, (value) => -value * 0.7),
          opacity: glowOpacity,
        }}
        className="
          pointer-events-none absolute
          -right-40 top-1/3
          h-[500px] w-[500px]
          rounded-full bg-indigo-600/[0.12]
          blur-[160px]
        "
      />

      {/* Subtle grid */}

      <div
        className="
          pointer-events-none absolute inset-0
          opacity-[0.035]
          [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* ======================================================
          MAIN CONTAINER
      ======================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ====================================================
            SECTION LABEL
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex items-center gap-4"
        >
          <span
            className="
              text-[10px] font-medium uppercase
              tracking-[0.35em] text-blue-400
            "
          >
            About Me
          </span>

          <motion.div
            style={{ scaleX: lineScale }}
            className="
              h-px w-20 origin-left
              bg-gradient-to-r from-blue-500 to-transparent
            "
          />

          <span className="text-[10px] tracking-[0.2em] text-white/25">
            THE DEVELOPER BEHIND THE CODE
          </span>
        </motion.div>

        {/* ====================================================
            MAIN GRID
        ===================================================== */}

        <div
          className="
            grid grid-cols-1 items-center
            gap-16
            lg:grid-cols-[1fr_0.9fr]
            lg:gap-20
          "
        >
          {/* ==================================================
              LEFT CONTENT
          =================================================== */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative z-20"
          >
            {/* Small introduction */}

            <motion.p
              variants={fadeLeft}
              className="
                mb-6 text-sm font-medium
                tracking-wide text-white/40
              "
            >
              From the first idea
              <br />
              to a fully working application.
            </motion.p>

            {/* Main heading */}

            <motion.h2
              variants={fadeUp}
              className="
                max-w-3xl
                text-5xl font-semibold
                leading-[0.98] tracking-[-0.065em]
                sm:text-6xl
                md:text-7xl
                lg:text-[5.4rem]
              "
            >
              I build the web
              <br />

              <span className="text-white/30">
                from interface
              </span>

              <br />

              to{" "}
              <span className="text-blue-500">
                infrastructure.
              </span>
            </motion.h2>

            {/* Description */}

            <motion.p
              variants={fadeUp}
              className="
                mt-8 max-w-xl
                text-sm leading-7 text-white/45
                sm:text-base sm:leading-8
              "
            >
              I'm a web developer focused on building modern,
              responsive, and functional digital experiences.
              I enjoy combining thoughtful frontend design with
              programming logic and database-driven features to
              turn ideas into useful web applications.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="
                mt-4 max-w-xl
                text-sm leading-7 text-white/35
                sm:text-base sm:leading-8
              "
            >
              My approach is simple: write clean code, keep the
              user experience clear, and make every part of the
              application work together.
            </motion.p>

            {/* =================================================
                SKILLS
            ================================================== */}

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap gap-2"
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.04,
                    borderColor: "rgba(59,130,246,0.5)",
                  }}
                  className="
                    cursor-default rounded-full
                    border border-white/10
                    bg-white/[0.035]
                    px-4 py-2
                    text-[10px] uppercase tracking-[0.15em]
                    text-white/50 backdrop-blur-md
                    transition-colors duration-300
                    hover:bg-blue-500/10 hover:text-white
                  "
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* =================================================
                CTA
            ================================================== */}

            <motion.div variants={fadeUp} className="mt-11">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.035 }}
                whileTap={{ scale: 0.97 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="
                  group inline-flex items-center gap-3
                  rounded-full bg-white
                  px-5 py-3
                  text-xs font-medium text-black
                "
              >
                Let's build something

                <motion.span
                  whileHover={{ rotate: 45 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  className="
                    flex h-7 w-7 items-center justify-center
                    rounded-full bg-black text-white
                    transition-colors duration-300
                    group-hover:bg-blue-600
                  "
                >
                  <ArrowUpRight size={14} />
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ==================================================
              RIGHT VISUAL
          =================================================== */}

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="
              relative flex min-h-[450px]
              items-center justify-center
              sm:min-h-[520px]
            "
          >
            {/* Ambient glow */}

            <motion.div
              style={{
                opacity: glowOpacity,
                scale: visualScale,
              }}
              className="
                pointer-events-none absolute
                h-[300px] w-[300px]
                rounded-full bg-blue-500/20
                blur-[100px]
                sm:h-[400px] sm:w-[400px]
              "
            />

            {/* Main visual composition */}

            <motion.div
              style={{
                y: smoothY,
                rotate: smoothRotate,
                scale: visualScale,
              }}
              className="
                relative h-[390px] w-full max-w-[460px]
                [perspective:1200px]
                sm:h-[460px]
              "
            >
              {/* Outer orbit */}

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 45,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute left-1/2 top-1/2
                  h-[300px] w-[300px]
                  -translate-x-1/2 -translate-y-1/2
                  rounded-full border border-blue-400/15
                  sm:h-[390px] sm:w-[390px]
                "
              >
                <span
                  className="
                    absolute left-[12%] top-[16%]
                    h-2 w-2 rounded-full
                    bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.9)]
                  "
                />
              </motion.div>

              {/* Second orbit */}

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute left-1/2 top-1/2
                  h-[250px] w-[250px]
                  -translate-x-1/2 -translate-y-1/2
                  rounded-full border border-white/[0.06]
                  sm:h-[330px] sm:w-[330px]
                "
              >
                <span
                  className="
                    absolute bottom-[12%] right-[10%]
                    h-1.5 w-1.5 rounded-full
                    bg-indigo-400
                  "
                />
              </motion.div>

              {/* Back card */}

              <motion.div
                initial={{ opacity: 0, x: 50, rotate: 9 }}
                whileInView={{ opacity: 1, x: 0, rotate: 6 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  rotate: 9,
                  x: 8,
                  y: -6,
                }}
                className="
                  absolute right-2 top-8
                  h-[290px] w-[72%]
                  rounded-[2rem]
                  border border-white/10
                  bg-neutral-900/90
                  shadow-[0_40px_100px_rgba(0,0,0,0.45)]
                  sm:right-0 sm:top-10 sm:h-[340px]
                "
              >
                <div
                  className="
                    absolute inset-0 rounded-[2rem]
                    bg-gradient-to-br
                    from-indigo-500/15 via-transparent to-transparent
                  "
                />

                <div className="absolute left-6 right-6 top-6 flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-white/35">
                    Application Architecture
                  </span>

                  <Workflow size={15} className="text-indigo-400" />
                </div>

                {/* Architecture lines */}

                <div className="absolute inset-x-7 top-20 space-y-3">
                  {[
                    { width: "w-[85%]", color: "bg-blue-400/20" },
                    { width: "w-[65%]", color: "bg-white/[0.06]" },
                    { width: "w-[75%]", color: "bg-indigo-400/15" },
                    { width: "w-[48%]", color: "bg-white/[0.06]" },
                  ].map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.7,
                        delay: 0.45 + index * 0.1,
                      }}
                      className={`h-2 ${line.width} ${line.color} origin-left rounded-full`}
                    />
                  ))}
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                    Development mindset
                  </p>

                  <p className="mt-2 text-lg font-medium tracking-[-0.04em] text-white/80">
                    Every layer matters.
                  </p>
                </div>
              </motion.div>

              {/* Front card */}

              <motion.div
                initial={{ opacity: 0, y: 65, rotate: -8 }}
                whileInView={{ opacity: 1, y: 0, rotate: -4 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  rotate: -1,
                  y: -8,
                }}
                className="
                  absolute bottom-1 left-1
                  h-[310px] w-[77%]
                  overflow-hidden rounded-[2rem]
                  border border-white/10
                  bg-neutral-900
                  shadow-[0_50px_120px_rgba(0,0,0,0.55)]
                  [transform-style:preserve-3d]
                  sm:bottom-0 sm:left-0 sm:h-[365px]
                "
              >
                {/* Card gradient */}

                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-br
                    from-blue-600/20 via-transparent to-black
                  "
                />

                {/* Card grid */}

                <div
                  className="
                    absolute inset-0 opacity-[0.08]
                    [background-image:linear-gradient(rgba(255,255,255,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.3)_1px,transparent_1px)]
                    [background-size:35px_35px]
                  "
                />

                {/* Card top label */}

                <div className="absolute left-6 right-6 top-6 flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-white/40">
                    Full-Stack Developer
                  </span>

                  <Sparkles size={16} className="text-blue-400" />
                </div>

                {/* Center icon */}

                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 15,
                    delay: 0.65,
                  }}
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  className="
                    absolute left-1/2 top-[46%]
                    flex h-24 w-24
                    -translate-x-1/2 -translate-y-1/2
                    items-center justify-center
                    rounded-[1.75rem]
                    border border-white/10
                    bg-white/[0.06]
                    text-blue-400
                    shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                    backdrop-blur-xl
                  "
                >
                  <Code2 size={36} strokeWidth={1.35} />
                </motion.div>

                {/* Floating code marks */}

                <motion.span
                  animate={{ y: [0, -5, 0], opacity: [0.4, 0.8, 0.4] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-8 top-[38%] font-mono text-sm text-blue-300/50"
                >
                  {"</>"}
                </motion.span>

                <motion.span
                  animate={{ y: [0, 6, 0], opacity: [0.3, 0.7, 0.3] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute right-8 top-[52%] font-mono text-sm text-indigo-300/50"
                >
                  {"{ }"}
                </motion.span>

                {/* Card bottom text */}

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                    Turning ideas into
                  </p>

                  <h3 className="mt-2 text-xl font-medium tracking-[-0.04em] sm:text-2xl">
                    Working products.
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Frontend", "Backend", "Database"].map((item) => (
                      <span
                        key={item}
                        className="
                          rounded-full border border-white/10
                          bg-black/20 px-2.5 py-1
                          text-[8px] uppercase tracking-[0.12em]
                          text-white/45
                        "
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating database badge */}

              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.7 },
                  scale: {
                    type: "spring",
                    stiffness: 180,
                    damping: 15,
                    delay: 0.7,
                  },
                  y: {
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="
                  absolute right-0 top-[48%] z-20
                  flex h-14 w-14 items-center justify-center
                  rounded-2xl border border-white/10
                  bg-blue-500 text-white
                  shadow-[0_20px_50px_rgba(59,130,246,0.25)]
                  sm:right-1 sm:h-16 sm:w-16
                "
              >
                <Database size={24} strokeWidth={1.5} />
              </motion.div>

              {/* Floating layers badge */}

              <motion.div
                initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                animate={{ y: [0, 8, 0] }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.9 },
                  scale: {
                    type: "spring",
                    stiffness: 180,
                    damping: 15,
                    delay: 0.9,
                  },
                  y: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="
                  absolute left-0 top-[18%] z-20
                  flex h-12 w-12 items-center justify-center
                  rounded-2xl border border-white/10
                  bg-neutral-900 text-blue-400
                  shadow-[0_15px_40px_rgba(0,0,0,0.4)]
                  sm:-left-3 sm:h-14 sm:w-14
                "
              >
                <Layers3 size={22} strokeWidth={1.5} />
              </motion.div>

              {/* Decorative dot */}

              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute bottom-7 right-12
                  h-2 w-2 rounded-full
                  bg-blue-400
                  shadow-[0_0_25px_rgba(96,165,250,0.8)]
                "
              />
            </motion.div>
          </motion.div>
        </div>

        {/* ====================================================
            CAPABILITIES — REPLACES OLD STATS SECTION
        ===================================================== */}

        <div className="mt-28">
          {/* Capabilities heading */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mb-8 flex flex-col gap-3
              sm:flex-row sm:items-end sm:justify-between
            "
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-blue-400">
                What I Focus On
              </p>

              <h3 className="mt-3 text-2xl font-medium tracking-[-0.05em] sm:text-3xl">
                Beyond the interface.
              </h3>
            </div>

            <p className="max-w-md text-sm leading-6 text-white/35">
              I look at the complete application, from the way it
              looks and feels to the logic and data behind it.
            </p>
          </motion.div>

          {/* Capability cards */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-4 md:grid-cols-3"
          >
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  variants={fadeUp}
                  whileHover={{
                    y: -7,
                    borderColor: "rgba(59,130,246,0.35)",
                    backgroundColor: "rgba(255,255,255,0.045)",
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    group relative overflow-hidden
                    rounded-2xl border border-white/[0.08]
                    bg-white/[0.02]
                    p-6 sm:p-7
                  "
                >
                  {/* Hover glow */}

                  <div
                    className="
                      pointer-events-none absolute
                      -right-16 -top-16
                      h-40 w-40 rounded-full
                      bg-blue-500/[0.08]
                      opacity-0 blur-[60px]
                      transition-opacity duration-500
                      group-hover:opacity-100
                    "
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div
                        className="
                          flex h-12 w-12 items-center justify-center
                          rounded-xl border border-white/10
                          bg-white/[0.035]
                          text-blue-400
                          transition-colors duration-300
                          group-hover:border-blue-500/30
                          group-hover:bg-blue-500/10
                        "
                      >
                        <Icon size={21} strokeWidth={1.5} />
                      </div>

                      <span className="font-mono text-xs text-white/20">
                        /{item.number}
                      </span>
                    </div>

                    <h4 className="mt-7 text-lg font-medium tracking-[-0.035em]">
                      {item.title}
                    </h4>

                    <p className="mt-3 min-h-[72px] text-sm leading-6 text-white/40">
                      {item.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="
                            rounded-full border border-white/[0.08]
                            px-3 py-1.5
                            text-[9px] uppercase tracking-[0.12em]
                            text-white/35
                          "
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Animated bottom line */}

                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                        absolute bottom-0 left-0
                        h-px w-full origin-left
                        bg-gradient-to-r
                        from-blue-500/70 via-blue-400/20 to-transparent
                        opacity-0 transition-opacity duration-300
                        group-hover:opacity-100
                      "
                    />
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}