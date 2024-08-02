import React from "react";
import { FiAlignJustify, FiSearch } from "react-icons/fi";
import { RiMoonFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Navbar(props) {
  const { onOpenSidebar, routeText } = props;

  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl">
      <div className="ml-[6px]">
        <div className="h-6 w-[224px] pt-1">
          <a
            className="text-sm font-normal text-navy-700 hover:underline"
            href=" "
          >
            Pages
            <span className="mx-1 text-sm text-navy-700 hover:text-navy-700">
              {" "}
              /{" "}
            </span>
          </a>
          <Link
            className="text-sm font-normal capitalize text-navy-700 hover:underline"
            to="#"
          >
            {routeText}
          </Link>
        </div>

        <p className="shrink text-[33px] capitalize text-navy-700">
          <Link to="#" className="font-bold capitalize hover:text-navy-700">
            {routeText}
          </Link>
        </p>
      </div>

      <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
        <div className="flex h-full items-center rounded-full bg-lightPrimary text-navy-700 xl:w-[225px]">
          <p className="pl-3 pr-2 text-xl">
            <FiSearch className="h-4 w-4 text-gray-400" />
          </p>
          <input
            type="text"
            placeholder="Search..."
            class="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 sm:w-fit"
          />
        </div>

        <span
          className="flex cursor-pointer text-xl text-gray-600 xl:hidden"
          onClick={onOpenSidebar}
        >
          <FiAlignJustify className="h-5 w-5" />
        </span>

        <div className="cursor-pointer text-gray-600">
          <RiMoonFill className="h-4 w-4 text-gray-600" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
