
import { motion, useReducedMotion } from "framer-motion";
import {
  HiArrowDown,
  HiArrowUpRight,
  HiArrowRight,
  HiOutlineCodeBracket,
  HiOutlineSparkles,
} from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import Navbar from "../components/Navbar/Navbar";

const projects = [
  {
    number: "01",
    title: "Kora Consulting",
    subtitle: "Digital presence for a modern consultancy.",
    category: "Frontend Development",
    year: "2026",
    image: "/images/pr1.webp",
    description:
      "A professional consulting website concept designed to communicate trust, clarity, and expertise. The interface combines structured layouts, carefully balanced typography, and a responsive design system to create a polished experience across devices.",
    challenge:
      "Present complex professional services in a way that feels approachable, organized, and easy to navigate.",
    approach:
      "Built a component-based interface with reusable sections, consistent spacing, responsive layouts, and clear visual hierarchy.",
    features: [
      "Responsive layouts across screen sizes",
      "Reusable React components",
      "Consistent typography and spacing",
      "Interactive buttons and hover states",
    ],
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    live: "#",
    github: "#",
    accent: "from-blue-500/20 via-blue-500/5 to-transparent",
  },
  {
    number: "02",
    title: "KYMA AI",
    subtitle: "A modern interface for an AI-powered experience.",
    category: "Web Development",
    year: "2026",
    image: "/images/pr2.webp",
    description:
      "An AI-inspired digital product concept focused on a clean interface, strong visual storytelling, and an intuitive user journey. The design uses modern typography and a focused component structure to make a technology-driven product feel accessible.",
    challenge:
      "Create a distinctive digital experience without overwhelming users with unnecessary visual complexity.",
    approach:
      "Focused on reusable interface patterns, clear content hierarchy, and a flexible foundation for future API-driven features.",
    features: [
      "Modern product-focused interface",
      "Reusable UI patterns",
      "Responsive page sections",
      "Foundation for API integration",
    ],
    technologies: ["React", "Tailwind CSS", "REST APIs"],
    live: "#",
    github: "#",
    accent: "from-violet-500/20 via-indigo-500/5 to-transparent",
  },
  {
    number: "03",
    title: "MUGEN Creative",
    subtitle: "Bold visuals for a creative digital brand.",
    category: "UI/UX & Frontend",
    year: "2026",
    image: "/images/pr3.webp",
    description:
      "A creative agency website concept built around expressive typography, immersive imagery, and carefully timed interactions. Its visual direction prioritizes personality while maintaining usability and a consistent design language.",
    challenge:
      "Balance an expressive visual identity with clear navigation and a usable responsive interface.",
    approach:
      "Combined bold type scales, intentional whitespace, reusable React sections, and motion effects that support the content rather than distract from it.",
    features: [
      "Expressive typography and layouts",
      "Animated hover interactions",
      "Responsive content sections",
      "Reusable React components",
    ],
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    live: "#",
    github: "#",
    accent: "from-fuchsia-500/20 via-purple-500/5 to-transparent",
  },
  {
    number: "04",
    title: "Student Management",
    subtitle: "Turning academic records into an organized system.",
    category: "Full-Stack Development",
    year: "2026",
    image: "/images/pr4.webp",
    description:
      "A student management system concept focused on organizing student profiles and academic records. Its data model can cover student information, departments, subjects, credits, scores, GPA, and pass or fail status.",
    challenge:
      "Structure academic information so records can be stored, retrieved, and maintained consistently.",
    approach:
      "Planned around structured database tables, clear relationships, and a user interface that can support student record management and result tracking.",
    features: [
      "Student profile management",
      "Academic records and results",
      "Relational database structure",
      "Foundation for CRUD operations",
    ],
    technologies: ["Python", "MySQL", "SQL"],
    live: "#",
    github: "#",
    accent: "from-emerald-500/20 via-teal-500/5 to-transparent",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function ProjectDetails({ project, index, reduceMotion }) {
  const reverse = index % 2 !== 0;

  return (
    <motion.article
      id={`project-${project.number}`}
      variants={reveal}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      className="scroll-mt-28"
    >
      <div
        className={`grid items-center gap-9 lg:grid-cols-2 lg:gap-16 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Project visual */}
        <motion.a
          href={project.live}
          aria-label={`Open ${project.title} preview`}
          whileHover={reduceMotion ? undefined : { y: -5 }}
          className={`group relative isolate block overflow-hidden rounded-3xl border border-white/[0.08] bg-neutral-900 ${
            index % 2 === 0
              ? "lg:rounded-[2rem_2rem_2rem_0.5rem]"
              : "lg:rounded-[2rem_2rem_0.5rem_2rem]"
          }`}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.accent}`}
          />

          <div className="relative aspect-[1.12/1] overflow-hidden sm:aspect-[1.3/1] lg:aspect-[1.05/1]">
            <motion.img
              src={project.image}
              alt={`${project.title} website preview`}
              loading="lazy"
              whileHover={reduceMotion ? undefined : { scale: 1.045 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="h-full w-full object-cover object-top"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />

            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-neutral-950/60 px-3 py-2 text-xs text-white/80 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Featured project
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                  {project.category}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {project.title}
                </h3>
              </div>

              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-neutral-950 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                <HiArrowUpRight size={21} />
              </span>
            </div>
          </div>
        </motion.a>

        {/* Project case study */}
        <div className="min-w-0">
          <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-[0.16em] text-neutral-500">
            <span className="text-blue-400">{project.number}</span>
            <span className="h-px w-8 bg-neutral-700" />
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl xl:text-6xl">
            {project.title}
            <span className="mt-3 block text-xl font-normal leading-snug tracking-tight text-neutral-400 sm:text-2xl">
              {project.subtitle}
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-neutral-400">
            {project.description}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                <HiOutlineSparkles className="text-blue-400" size={18} />
                The challenge
              </h4>
              <p className="text-sm leading-7 text-neutral-500">
                {project.challenge}
              </p>
            </div>

            <div>
              <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                <HiOutlineCodeBracket className="text-blue-400" size={18} />
                My approach
              </h4>
              <p className="text-sm leading-7 text-neutral-500">
                {project.approach}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="mb-4 text-sm font-semibold text-white">
              Key features
            </h4>

            <ul className="grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm leading-6 text-neutral-400"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 border-t border-white/[0.08] pt-6">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
              Technologies
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-neutral-300 transition-colors hover:border-blue-500/40 hover:text-blue-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-5">
            <a
              href={project.live}
              className="group inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-blue-400"
            >
              View live project
              <HiArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href={project.github}
              aria-label={`View ${project.title} source code`}
              className="inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
            >
              <FaGithub size={17} />
              Source code
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Work() {
  const reduceMotion = useReducedMotion();

  return (
    <div>
        <Navbar/>   
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-24 h-[28rem] w-[28rem] rounded-full bg-blue-600/[0.12] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-[1050px] h-[30rem] w-[30rem] rounded-full bg-indigo-600/[0.08] blur-[150px]"
      />

      {/* Introduction */}
      <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-36 sm:px-6 sm:pt-44 lg:px-8 lg:pb-28">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.07] px-4 py-2 text-sm text-blue-300">
            <HiOutlineSparkles size={16} />
            Selected work
          </div>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-8xl">
            I build digital
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
              experiences.
            </span>
          </h1>

          <div className="mt-9 grid gap-8 md:grid-cols-[1fr_280px] md:items-end lg:gap-16">
            <p className="max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg">
              Welcome to my work. Here, I share the ideas, design decisions,
              and development approaches behind my projects. From polished
              frontend interfaces to database-driven applications, every
              project helps me grow as a full-stack web developer.
            </p>

            <div className="flex items-center gap-5 border-t border-white/10 pt-6 md:justify-end md:border-l md:border-t-0 md:pl-8">
              <div>
                <p className="text-4xl font-semibold tracking-tight">
                  04<span className="text-blue-500">+</span>
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-neutral-500">
                  Project stories
                </p>
              </div>

              <div className="h-12 w-px bg-white/10" />

              <div>
                <p className="text-4xl font-semibold tracking-tight">
                  <HiOutlineCodeBracket className="text-blue-400" />
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-neutral-500">
                  Code & creativity
                </p>
              </div>
            </div>
          </div>

          <a
            href="#featured-work"
            className="mt-10 inline-flex items-center gap-3 text-sm text-neutral-300 transition-colors hover:text-blue-400"
          >
            Explore the projects
            <HiArrowDown size={17} />
          </a>
        </motion.div>
      </section>

      {/* Project case studies */}
      <section
        id="featured-work"
        className="relative mx-auto max-w-7xl scroll-mt-24 px-4 pb-28 sm:px-6 lg:px-8 lg:pb-36"
      >
        <div className="mb-12 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-end sm:justify-between lg:mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-400">
              The portfolio
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              A closer look at my work
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-neutral-500">
            Selected projects, the problems they explore, and the technologies
            behind each experience.
          </p>
        </div>

        <div className="space-y-24 sm:space-y-32 lg:space-y-40">
          {projects.map((project, index) => (
            <ProjectDetails
              key={project.number}
              project={project}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-blue-600/20 blur-[110px]"
          />

          <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                What's next?
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Have an idea?
                <br />
                <span className="text-neutral-400">
                  Let's make it real.
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-base leading-8 text-neutral-400">
                I'm always interested in exploring meaningful ideas,
                building useful products, and learning through collaboration.
              </p>
            </div>

            <a
              href="/#contact"
              className="group inline-flex shrink-0 items-center justify-between gap-7 self-start rounded-full bg-white py-2 pl-6 pr-2 text-sm font-medium text-neutral-950 transition-colors duration-300 hover:bg-blue-600 hover:text-white md:self-auto"
            >
              Let's talk
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-white transition-colors duration-300 group-hover:bg-white group-hover:text-neutral-950">
                <HiArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </span>
            </a>
          </div>
        </motion.div>
      </section>
    </main>
    </div>
  );
}