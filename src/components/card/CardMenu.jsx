import React from "react";
import Dropdown from "../dropdown";
import { AiOutlineUser } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { AiOutlineShop } from "react-icons/ai";
import { TiLightbulb } from "react-icons/ti";

function CardMenu() {
  const [open, setOpen] = React.useState(false);
  return (
    <Dropdown
      button={
        <button
          onClick={() => setOpen(!open)}
          open={open}
          className="flex items-center text-xl hover:cursor-pointer bg-[#F4F7FE] p-2 text-[#422AFB] hover:bg-gray-100 justify-center rounded-lg font-bold transition duration-200"
        >
          <BsThreeDots className="h-6 w-6" />
        </button>
      }
      animation={"origin-top-right transition-all duration-300 ease-in-out"}
      classNames="top-11 right-0 w-max"
      children={
        <div className="z-50 w-max rounded-xl bg-white py-3 px-4 text-sm shadow-xl shadow-[#7090b014]">
          <p className="hover:text-black flex cursor-pointer items-center gap-2 text-gray-400 hover:font-medium">
            <span>
              <AiOutlineUser />
            </span>
            Panel 1
          </p>
          <p className="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-400 hover:font-medium">
            <span>
              <AiOutlineShop />
            </span>
            Panel 2
          </p>
          <p className="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-400 hover:font-medium">
            <span>
              <TiLightbulb />
            </span>
            Panel 3
          </p>
          <p className="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-400 hover:font-medium">
            <span>
              <FiSettings />
            </span>
            Panel 4
          </p>
        </div>
      }
    />
  );
}

export default CardMenu;
