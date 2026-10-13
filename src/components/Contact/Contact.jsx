
import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
  FiGithub,
  FiCode,
  FiMessageCircle,
} from "react-icons/fi";

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: "homayounsamadi42@gmail.com",
    href: "mailto:homayounsamadi42@gmail.com",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Afghanistan",
    href: null,
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "View my projects",
    href: "https://github.com/homayounsamadi42-cpu",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("sending");
    setStatusMessage("");

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: "homayounsamadi42@gmail.com",
        },
        {
          publicKey: "YOUR_PUBLIC_KEY",
        }
      );

      setStatus("success");
      setStatusMessage(
        "Your message has been sent successfully. Thank you for reaching out!"
      );

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus("error");
      setStatusMessage(
        "Your message could not be sent. Please try again or contact me by email."
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-neutral-950 px-4 py-24 text-white sm:px-6 lg:px-8 lg:py-32"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 max-w-3xl"
        >
          <motion.div
            variants={itemVariants}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400"
          >
            <FiMessageCircle size={16} />
            <span>Let's Connect</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl"
          >
            Have an idea?
            <span className="block text-blue-500">
              Let's talk about it.
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg"
          >
            I'm a motivated junior web developer who enjoys learning,
            building projects, and improving my skills. I'm open to
            internships, collaborative projects, mentorship, and
            opportunities to grow as a developer. If you have an idea
            or would like to connect, I'd love to hear from you.
          </motion.p>
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Contact information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col"
          >
            <motion.div variants={itemVariants} className="mb-7">
              <h3 className="text-2xl font-semibold">
                Get in touch
              </h3>
              <p className="mt-3 leading-7 text-neutral-400">
                Have a question, an opportunity, or a project idea?
                Feel free to reach out. I'm always happy to connect
                and learn from others.
              </p>
            </motion.div>

            <div className="space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                const content = (
                  <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-blue-500/40 hover:bg-white/[0.06]">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
                      <Icon size={21} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-neutral-500">
                        {item.label}
                      </p>
                      <p className="mt-1 break-words text-sm font-medium text-neutral-200 sm:text-base">
                        {item.value}
                      </p>
                    </div>

                    {item.href && (
                      <FiArrowUpRight
                        size={19}
                        className="shrink-0 text-neutral-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
                      />
                    )}
                  </div>
                );

                return (
                  <motion.div key={item.label} variants={itemVariants}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={
                          item.label === "GitHub" ? "_blank" : undefined
                        }
                        rel={
                          item.label === "GitHub"
                            ? "noreferrer"
                            : undefined
                        }
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Learning message */}
            <motion.div
              variants={itemVariants}
              className="mt-8 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-indigo-500/5 p-6"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                  <FiCode size={20} />
                </div>

                <h4 className="font-semibold">
                  Always learning
                </h4>
              </div>

              <p className="text-sm leading-7 text-neutral-400">
                Every project is a chance to learn something new,
                solve problems, and become a better developer.
                I'm excited to keep improving and work with people
                who share that mindset.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-8 lg:p-10"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold">
                Send me a message
              </h3>
              <p className="mt-2 text-sm leading-6 text-neutral-400">
                Fill in the form below, and I'll get back to you
                as soon as I can.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-neutral-300"
                  >
                    Your name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    autoComplete="name"
                    required
                    maxLength={100}
                    className="w-full rounded-xl border border-white/10 bg-neutral-900 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-neutral-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-neutral-300"
                  >
                    Email address
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    autoComplete="email"
                    required
                    maxLength={254}
                    className="w-full rounded-xl border border-white/10 bg-neutral-900 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-neutral-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-medium text-neutral-300"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  required
                  maxLength={150}
                  className="w-full rounded-xl border border-white/10 bg-neutral-900 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-neutral-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-neutral-300"
                >
                  Your message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me a little about your idea..."
                  rows={5}
                  required
                  maxLength={5000}
                  className="w-full resize-y rounded-xl border border-white/10 bg-neutral-900 px-4 py-3.5 text-sm leading-7 text-white outline-none transition-all placeholder:text-neutral-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>

              {/* Submission feedback */}
              {statusMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="status"
                  aria-live="polite"
                  className={`flex items-start gap-3 rounded-xl border p-4 text-sm leading-6 ${
                    status === "success"
                      ? "border-green-500/20 bg-green-500/10 text-green-300"
                      : status === "error"
                      ? "border-red-500/20 bg-red-500/10 text-red-300"
                      : "border-white/10 bg-white/5 text-neutral-300"
                  }`}
                >
                  {status === "success" ? (
                    <FiCheckCircle className="mt-0.5 shrink-0" size={18} />
                  ) : (
                    <FiAlertCircle className="mt-0.5 shrink-0" size={18} />
                  )}

                  <p>{statusMessage}</p>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={
                  status !== "sending" ? { scale: 1.01 } : {}
                }
                whileTap={
                  status !== "sending" ? { scale: 0.98 } : {}
                }
                className="group flex w-full items-center justify-center gap-3 rounded-full bg-blue-600 px-6 py-4 font-medium text-white transition-colors duration-300 hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span>
                  {status === "sending"
                    ? "Sending message..."
                    : "Send message"}
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-neutral-950 transition-colors duration-300 group-hover:bg-neutral-950 group-hover:text-white">
                  <FiSend size={16} />
                </span>
              </motion.button>

              <p className="text-center text-xs leading-5 text-neutral-500">
                Your information will be used to respond to your message.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 border-t border-white/10 pt-8 text-center"
        >
          <p className="text-sm text-neutral-500">
            Thank you for visiting my portfolio.
            <span className="mx-2 text-blue-500">✦</span>
            I'm looking forward to learning, building, and connecting.
          </p>
        </motion.div>
      </div>
    </section>
  );
}