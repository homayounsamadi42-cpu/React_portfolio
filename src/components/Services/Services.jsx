import React from "react";
import {
  motion,
} from "framer-motion";
import {
  Monitor,
  Smartphone,
  Zap,
  ArrowUpRight,
} from "lucide-react";
const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Modern responsive websites built with clean and maintainable frontend architecture.",
    icon: Monitor,
  },

  {
    number: "02",
    title: "Responsive Design",
    description:
      "Interfaces that adapt beautifully across desktop, tablet and mobile devices.",
    icon: Smartphone,
  },

  {
    number: "03",
    title: "Interactive Experiences",
    description:
      "Smooth animations and meaningful interactions that make interfaces feel alive.",
    icon: Zap,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-neutral-950
        px-6
        py-32
        text-white
        sm:px-8
        md:py-40
        lg:px-12
        lg:py-48
      "
    >
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mb-16
            max-w-3xl
          "
        >
          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-blue-400
            "
          >
            04 — Services
          </span>
          <h2
            className="
              mt-5

              text-4xl
              font-semibold
              leading-[0.95]
              tracking-[-0.055em]

              sm:text-5xl
              lg:text-6xl
            "
          >
            Turning ideas into
            <br />

            <span className="text-white/30">
              useful digital products.
            </span>
          </h2>

        </motion.div>


        {/* ====================================================
            SERVICES
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1

            gap-px

            overflow-hidden

            rounded-[2rem]

            border
            border-white/10

            bg-white/10

            md:grid-cols-3
          "
        >

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}

                initial={{
                  opacity: 0,
                  y: 60,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                  amount: 0.2,
                }}

                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}

                whileHover={{
                  backgroundColor:
                    "rgba(255,255,255,0.045)",
                }}

                className="
                  group

                  relative

                  min-h-[390px]

                  bg-neutral-950

                  p-8

                  sm:p-10

                  lg:p-12
                "
              >

                {/* Number */}

                <span
                  className="
                    absolute
                    right-8
                    top-8

                    text-[9px]
                    tracking-[0.3em]

                    text-white/20
                  "
                >
                  {service.number}
                </span>


                {/* Icon */}

                <motion.div
                  whileHover={{
                    rotate: -8,
                    scale: 1.08,
                  }}

                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 18,
                  }}

                  className="
                    flex
                    h-14
                    w-14

                    items-center
                    justify-center

                    rounded-2xl

                    border
                    border-white/10

                    bg-white/[0.035]

                    text-blue-400

                    transition-all
                    duration-500

                    group-hover:border-blue-500/40
                    group-hover:bg-blue-500/10
                  "
                >
                  <Icon
                    size={23}
                    strokeWidth={1.5}
                  />
                </motion.div>


                {/* Content */}

                <div className="mt-24">

                  <h3
                    className="
                      text-2xl
                      font-medium
                      tracking-[-0.04em]
                    "
                  >
                    {service.title}
                  </h3>


                  <p
                    className="
                      mt-5

                      max-w-sm

                      text-sm
                      leading-7

                      text-white/35
                    "
                  >
                    {service.description}
                  </p>

                </div>


                {/* Arrow */}

                <motion.div
                  whileHover={{
                    x: 5,
                    y: -5,
                  }}

                  className="
                    absolute
                    bottom-10
                    right-10

                    flex
                    h-10
                    w-10

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-white/10

                    text-white/40

                    transition-all
                    duration-300

                    group-hover:border-blue-500/40
                    group-hover:bg-blue-500
                    group-hover:text-white
                  "
                >
                  <ArrowUpRight size={16} />
                </motion.div>
                {/* Bottom blue line */}

                <motion.div
                  initial={{
                    scaleX: 0,
                  }}

                  whileHover={{
                    scaleX: 1,
                  }}

                  transition={{
                    duration: 0.5,
                  }}

                  className="
                    absolute
                    bottom-0
                    left-0

                    h-[2px]
                    w-full

                    origin-left

                    bg-blue-500
                  "
                />

              </motion.article>
            );
          })}

        </div>

      </div>

    </section>
  );
}