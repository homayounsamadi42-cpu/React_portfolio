import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";

const contactInfo = [
  {
    label: "EMAIL",
    value: "your.homayounsamdi42@gamil.com",
    href: "mailto:homayounsamadi42@gmail.com",
    icon: Mail,
  },
  {
    label: "LOCATION",
    value: "Afghanistan",
    href: "https://maps.google.com/?q=Afghanistan",
    icon: MapPin,
  },
  {
  label: "GITHUB",
  value: "Explore my projects",
  href: "https://github.com/homayounsamdi42-cpu",
  icon: ArrowUpRight,
},
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
  type: "",
  message: "",
});
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  
const handleSubmit = async (event) => {
  event.preventDefault();

  if (isSending) return;

  setIsSending(true);
  setSubmitStatus({ type: "", message: "" });

  try {
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
      to_email: "homayounsamadi42@gmail.com",
    };

    await emailjs.send(
      "service_x3kdvm3",
      "template_qm03rq8",
      templateParams,
      {
        publicKey: "Xn7FeR5nEAs4LVxRK",
      }
    );

    setSubmitStatus({
      type: "success",
      message: "Message sent successfully! Thank you for contacting me.",
    });

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error("EmailJS error:", error);

    setSubmitStatus({
      type: "error",
      message:
        "Your message could not be sent. Please try again or email me directly.",
    });
  } finally {
    setIsSending(false);
  }
};


  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/30 transition focus:border-blue-500/60 focus:bg-blue-500/[0.04]";

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-neutral-950 px-6 py-28 text-white sm:px-8 lg:px-12 lg:py-36"
    >
      {/* Background lighting */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-indigo-600/10 blur-[130px]" />

      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-14 flex items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-[0.35em] text-blue-400">
            Get In Touch
          </span>
          <div className="h-px w-20 bg-gradient-to-r from-blue-500 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          {/* LEFT SIDE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ staggerChildren: 0.12 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
          >
            <motion.p
              variants={fadeUp}
              className="mb-5 text-sm text-white/40"
            >
              Have an idea in mind?
              <br />
              Let's make it real.
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl"
            >
              Let's build
              <br />
              <span className="text-white/30">something</span>{" "}
              <span className="text-blue-500">great.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-lg text-sm leading-7 text-white/45 sm:text-base sm:leading-8"
            >
              I'm open to discussing web development projects,
              creative collaborations, and new opportunities.
              If you have an interesting idea, I'd love to hear
              about it.
            </motion.p>

            {/* Contact information */}
            <div className="mt-10 space-y-3">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.label}
                    variants={fadeUp}
                    href={item.href}
                    target={
                      item.label === "LOCATION" ||
                      item.label === "GITHUB"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.label === "LOCATION" ||
                      item.label === "GITHUB"
                        ? "noreferrer"
                        : undefined
                    }
                    whileHover={{ x: 5 }}
                    className="group flex items-center gap-4 rounded-xl border border-transparent py-3 transition hover:border-white/[0.06] hover:bg-white/[0.025]"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-blue-400 transition group-hover:border-blue-500/40 group-hover:bg-blue-500/10">
                      <Icon size={20} strokeWidth={1.5} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-[9px] tracking-[0.25em] text-white/35">
                        {item.label}
                      </span>
                      <span className="mt-1 block truncate text-sm text-white/80">
                        {item.value}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={17}
                      className="mr-2 text-white/30 transition group-hover:text-blue-400"
                    />
                  </motion.a>
                );
              })}
            </div>

            {/* Availability */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex items-center gap-4 border-t border-white/10 pt-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/[0.07] text-blue-400">
                <Send size={18} />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">
                  Open to opportunities
                </p>
                <p className="mt-1 text-xs text-white/35">
                  Let's discuss your next project.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE — FORM */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full border border-blue-500/15" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/70 p-5 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-9">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />

              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/[0.08] text-blue-400">
                  <Sparkles size={18} />
                </div>

                <div>
                  <h3 className="text-base font-medium">
                    Send a message
                  </h3>
                  <p className="mt-1 text-xs text-white/35">
                    Tell me about your idea.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-xs text-white/45"
                    >
                      Your name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-xs text-white/45"
                    >
                      Your email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-xs text-white/45"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="Project inquiry"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-xs text-white/45"
                  >
                    Project details
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    required
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-y`}
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={isSending ? undefined : { scale: 1.015 }}
                  whileTap={isSending ? undefined : { scale: 0.98 }}
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-4 text-sm font-medium text-white shadow-lg shadow-blue-900/20 transition hover:shadow-blue-600/20 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSending ? "Sending..." : "Send Message"}

                  <Send
                    size={16}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-1"
                  />
                </motion.button>
                
                {submitStatus.message && (
                  <p
                    role="status"
                    aria-live="polite"
                    className={`text-center text-sm leading-6 ${
                      submitStatus.type === "success"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {submitStatus.message}
                  </p>
                )}
                <p className="text-center text-[10px] leading-5 text-white/25">
                Your message will be sent securely through our email service.
              </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}