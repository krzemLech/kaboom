import { useState } from "react";
import { MenuBtn } from "./MenuBtn";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "About", href: "#about" },
    { title: "Technologies", href: "#stack" },
    { title: "Architecture Tool", href: "#architecture" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <>
      <MenuBtn toggleMenu={() => setIsOpen(!isOpen)} isOpen={isOpen} />

      <nav
        className={`fixed top-0 right-0 h-full w-80 bg-black/90 backdrop-blur-xl
                    transform transition-transform duration-300 ease-in-out z-40
                    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul
          className="flex flex-col p-8 mt-20 text-right"
          onClick={() => setIsOpen(false)}
        >
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-gray-700 hover:text-transparent hover:bg-clip-text
                          hover:bg-gradient-to-r from-[#FF4D4D] via-[#FF9900] to-[#FFCC00]
                          text-xl font-medium tracking-wide pb-8 px-4 block transition-all duration-300
                          hover:scale-105 rounded"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300
                    ${
                      isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
      />
    </>
  );
};
