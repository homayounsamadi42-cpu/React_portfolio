import React from "react";
import { ArrowUpRight } from "lucide-react";

function Button({
  text,
  onClick,
  variant = "primary",
  padding = "pl-6 pr-2 py-2",
  rounded = "rounded-full",
  className = "",
  type = "button",
}) {
  const variants = {
    primary: {
      button: "bg-[#1769FF] text-white",
      hoverBg: "bg-white",
      hoverText: "group-hover:text-[#1769FF]",
      arrow: "bg-white text-[#1769FF]",
    },

    secondary: {
      button: "bg-white text-[#1769FF]",
      hoverBg: "bg-[#1769FF]",
      hoverText: "group-hover:text-white",
      arrow: "bg-[#1769FF] text-white",
    },

    dark: {
      button: "bg-[#111827] text-white",
      hoverBg: "bg-white",
      hoverText: "group-hover:text-[#111827]",
      arrow: "bg-white text-[#111827]",
    },
  };

  const current = variants[variant];

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        group
        relative
        inline-flex
        items-center
        ${padding}
        ${rounded}
        ${current.button}
        overflow-hidden
        font-medium
        text-sm
        cursor-pointer
        ${className}
      `}
    >
      {/* Expanding background */}
      <span
        className={`
          absolute
          right-2
          top-1/2
          -translate-y-1/2
          h-8
          w-8
          rounded-full
          ${current.hoverBg}

          transition-all
          duration-500
          ease-in-out

          group-hover:right-0
          group-hover:top-0
          group-hover:h-full
          group-hover:w-full
          group-hover:translate-y-0
          group-hover:rounded-none
        `}
      />

      {/* Text */}
      <span
        className={`
          relative
          z-10
          whitespace-nowrap
          transition-colors
          duration-300
          ${current.hoverText}
        `}
      >
        {text}
      </span>

      {/* Arrow */}
      <span
        className={`
          relative
          z-20
          ml-4
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-full
          ${current.arrow}
        `}
      >
        <ArrowUpRight size={15} strokeWidth={2} />
      </span>
    </button>
  );
}

export default Button;