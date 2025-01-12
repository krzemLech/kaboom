interface MenuBtnProps {
  toggleMenu: () => void;
  isOpen: boolean;
}

export const MenuBtn = ({ toggleMenu, isOpen }: MenuBtnProps) => {
  return (
    <button
      onClick={toggleMenu}
      className="w-10 h-10 flex flex-col justify-center items-end gap-1.5 
                hover:scale-110 transition-transform duration-200 z-50 relative"
    >
      <div
        className={`w-8 h-1 bg-gradient-to-r from-[#FF4D4D] via-[#FF9900] to-[#FFCC00] rounded-full transition-all duration-300 ${
          isOpen ? "rotate-45 translate-y-2.5" : ""
        }`}
      />
      <div
        className={`w-6 h-1 bg-gradient-to-r from-[#FF4D4D] via-[#FF9900] to-[#FFCC00] rounded-full transition-opacity duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      />
      <div
        className={`w-8 h-1 bg-gradient-to-r from-[#FF4D4D] via-[#FF9900] to-[#FFCC00] rounded-full transition-all duration-300 ${
          isOpen ? "-rotate-45 -translate-y-2.5" : ""
        }`}
      />
    </button>
  );
};
