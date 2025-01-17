import React from "react";
import { HiX } from "react-icons/hi";
import listRoutes from "../../routes/listRoutes";
import ListMenu from "./listMenu";
import FooterSidebar from "./footerSidebar";

function Sidebar({ isOpen, onClose }) {
  return (
    <div
      className={`sm:none duration-175 overflow-y-auto .custom-scrollbar-none linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all w-[300px] md:!z-50 lg:!z-50 xl:!z-0 ${
        isOpen ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`mx-[56px] mt-[48px] flex items-center`}>
        <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-[#1B254B]">
          Horizon <span className="font-medium">FREE</span>
        </div>
      </div>
      <div className="mt-[52px] mb-7 border-b mx-5 bg-gray-300" />

      <ul className="mb-auto pt-1 px-4">
        <ListMenu routes={listRoutes} />
      </ul>

      <div className="flex justify-center">
        <FooterSidebar />
      </div>
    </div>
  );
}

export default Sidebar;
