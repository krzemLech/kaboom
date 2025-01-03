import { useState } from "react";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button
      className="hover:scale-110 transition-transform duration-200"
      onClick={() => setIsOpen(!isOpen)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        className={`size-6 stroke-prime hover:stroke-second transition-transform duration-200 ${
          isOpen ? "-rotate-90" : ""
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
    </button>
  );
};
