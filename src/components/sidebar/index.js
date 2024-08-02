import React from "react";
import { HiX } from "react-icons/hi";
import listRoutes from "../../routes/listRoutes";
import ListMenu from "./listMenu";
import FooterSidebar from "./footerSidebar";

function Sidebar({ isOpen, onClose }) {
  return (
    <div
      className={`h-screen pb-5 flex duration-[175ms] min-h-full flex-col shadow-2xl shadow-white/5 transition-all w-[300px] ${
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
          Horizon <span class="font-medium">FREE</span>
        </div>
      </div>
      <div class="mt-[52px] mb-7 border-b mx-5 bg-gray-300" />
      {/* Nav item */}

      <ul className="mb-auto pt-1 px-4">
        <ListMenu routes={listRoutes} />
      </ul>

      {/* Free Horizon Card */}
      <div className="flex justify-center">
        {/* <SidebarCard /> */}
        <FooterSidebar />
      </div>
    </div>
  );
}

export default Sidebar;
