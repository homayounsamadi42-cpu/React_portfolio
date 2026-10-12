
import {
  motion,
  useMotionTemplate,
  useTransform,
} from "framer-motion";

import { ArrowUpRight } from "lucide-react";

const stackPositions = [
  { left: "54%", top: "7%", rotate: -7, scale: 1 },
  { left: "55%", top: "9%", rotate: 5, scale: 0.985 },
  { left: "56%", top: "11%", rotate: -3, scale: 0.97 },
  { left: "57%", top: "13%", rotate: 6, scale: 0.955 },
];

const desktopPositions = [
  { left: "0%", top: "0%" },
  { left: "50%", top: "0%" },
  { left: "0%", top: "50%" },
  { left: "50%", top: "50%" },
];

const mobilePositions = [
  { left: "0%", top: "0%" },
  { left: "0%", top: "25%" },
  { left: "0%", top: "50%" },
  { left: "0%", top: "75%" },
];

export default function ProjectCard({
  project,
  index,
  progress,
}) {
  const stack = stackPositions[index];
  const desktop = desktopPositions[index];
  const mobile = mobilePositions[index];

  // Each card starts its animation slightly later.
  const delay = index * 0.035;

  const start = 0.03 + delay;
  const middle = 0.38 + delay;
  const end = 0.76 + delay;

  // DESKTOP POSITION
  const desktopLeft = useTransform(
    progress,
    [start, middle, end],
    [stack.left, "28%", desktop.left]
  );

  const desktopTop = useTransform(
    progress,
    [start, middle, end],
    [stack.top, "25%", desktop.top]
  );

  // MOBILE POSITION
  const mobileLeft = useTransform(
    progress,
    [start, middle, end],
    ["0%", "0%", mobile.left]
  );

  const mobileTop = useTransform(
    progress,
    [start, middle, end],
    [stack.top, "30%", mobile.top]
  );

  // CARD ROTATION
  const rotate = useTransform(
    progress,
    [start, middle, end],
    [stack.rotate, stack.rotate * 0.35, 0]
  );

  const rotateY = useTransform(
    progress,
    [start, 0.3 + delay, 0.6, end],
    [
      index % 2 === 0 ? -12 : 12,
      index % 2 === 0 ? -5 : 5,
      1.5,
      0,
    ]
  );

  const rotateX = useTransform(
    progress,
    [start, 0.35 + delay, end],
    [6, -2, 0]
  );

  // SCALE AND VISIBILITY
  const scale = useTransform(
    progress,
    [start, middle, end],
    [stack.scale, 0.985, 1]
  );

  const opacity = useTransform(
    progress,
    [0, start, middle, end],
    [0.65, 0.85, 0.98, 1]
  );

  const blur = useTransform(
    progress,
    [start, middle, end],
    [3, 0.7, 0]
  );

  const filter = useMotionTemplate`blur(${blur}px)`;

  // IMAGE MOVEMENT
  const imageScale = useTransform(
    progress,
    [start, 0.4, 0.75, 1],
    [1.16, 1.09, 1.03, 1]
  );

  const imageX = useTransform(
    progress,
    [start, 0.45, 1],
    [index % 2 === 0 ? 30 : -30, index % 2 === 0 ? 8 : -8, 0]
  );

  // CONTENT REVEAL
  const contentY = useTransform(
    progress,
    [start, middle, end],
    [25, 8, 0]
  );

  return (
    <motion.article
      style={{
        left: desktopLeft,
        top: desktopTop,

        "--mobile-left": mobileLeft,
        "--mobile-top": mobileTop,

        rotate,
        rotateX,
        rotateY,
        scale,
        opacity,
        filter,

        zIndex: 20 - index,
      }}
      whileHover={{
        zIndex: 50,
      }}
      className="
        group
        absolute
        overflow-hidden
        border
        border-white/10
        bg-neutral-900
        shadow-[0_35px_100px_rgba(0,0,0,0.55)]
        [transform-style:preserve-3d]
        will-change-transform

        h-[calc(50%-10px)]
        w-[calc(50%-10px)]
        rounded-[1.5rem]

        max-md:left-[var(--mobile-left)]
        max-md:top-[var(--mobile-top)]
        max-md:h-[calc(25%-8px)]
        max-md:w-full
        max-md:rounded-[1.25rem]

        lg:rounded-[2rem]
      "
    >
      {/* PROJECT IMAGE */}

      <motion.img
        src={project.image}
        alt={project.title}
        style={{
          scale: imageScale,
          x: imageX,
        }}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          grayscale-[30%]
          transition-[filter]
          duration-700
          group-hover:grayscale-0
        "
      />

      {/* DARK GRADIENT */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/40
          to-transparent
        "
      />

      {/* ANIMATED BLUE GLOW */}

      <motion.div
        animate={{
          opacity: [0.2, 0.45, 0.2],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.6,
        }}
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-72
          w-72
          rounded-full
          bg-blue-500/10
          blur-[100px]
        "
      />

      {/* TOP INFORMATION */}

      <div
        className="
          absolute
          left-5
          right-5
          top-5
          z-20
          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            text-[10px]
            font-medium
            tracking-[0.3em]
            text-white/60
          "
        >
          {project.number}
        </span>

        <span
          className="
            rounded-full
            border
            border-white/10
            bg-black/25
            px-3
            py-1.5
            text-[8px]
            uppercase
            tracking-[0.2em]
            text-white/70
            backdrop-blur-xl
          "
        >
          {project.category}
        </span>
      </div>

      {/* PROJECT LINK ICON */}

      <motion.div
        whileHover={{
          scale: 1.12,
          rotate: 8,
        }}
        whileTap={{
          scale: 0.92,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 18,
        }}
        className="
          absolute
          right-5
          top-14
          z-20
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-white
          text-black
          shadow-[0_10px_30px_rgba(0,0,0,0.3)]
          transition-colors
          duration-300
          group-hover:bg-blue-500
          group-hover:text-white
        "
      >
        <ArrowUpRight size={17} strokeWidth={2.2} />
      </motion.div>

      {/* PROJECT CONTENT */}

      <motion.div
        style={{ y: contentY }}
        className="
          absolute
          bottom-5
          left-5
          right-5
          z-20
        "
      >
        {/* TECHNOLOGY TAGS */}

        <div className="mb-2 flex flex-wrap gap-2">
          {project.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                border
                border-white/10
                bg-white/5
                px-2.5
                py-1
                text-[7px]
                uppercase
                tracking-[0.15em]
                text-white/65
                backdrop-blur-md
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* TITLE */}

        <h3
          className="
            text-xl
            font-semibold
            leading-none
            tracking-[-0.045em]
            sm:text-2xl
          "
        >
          {project.title}
        </h3>

        {/* DESCRIPTION */}

        <p
          className="
            mt-2
            max-w-[420px]
            text-[10px]
            leading-relaxed
            text-white/55
            sm:text-[11px]
          "
        >
          {project.description}
        </p>
      </motion.div>

      {/* SUBTLE INNER BORDER */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[1.5rem]
          border
          border-white/[0.06]
          lg:rounded-[2rem]
        "
      />

      {/* ANIMATED BLUE BOTTOM LINE */}

      <motion.div
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="
          absolute
          bottom-0
          left-0
          z-30
          h-[2px]
          w-full
          origin-left
          bg-gradient-to-r
          from-transparent
          via-blue-500
          to-transparent
          opacity-90
        "
      />
    </motion.article>
  );
}