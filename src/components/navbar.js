import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import { RiMoonFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { BsArrowBarUp } from "react-icons/bs";
import {
  IoMdInformationCircleOutline,
  IoMdNotificationsOutline,
} from "react-icons/io";
import Dropdown from "./dropdown";
import ImageHorizon from "../assets/ImageHorizon.png";

function Navbar(props) {
  const listNotif = [1, 2];
  const { onOpenSidebar, routeText } = props;

  return (
    <nav className="sticky top-4 z-10 flex w-[932px] items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl">
      <div className="ml-[6px]">
        <div className="h-6 w-[224px] pt-1">
          <a
            className="text-sm font-normal text-[#1B254B] hover:underline"
            href=" "
          >
            Pages
            <span className="mx-1 text-sm text-[#1B254B] hover:text-[#1B254B]">
              {" "}
              /{" "}
            </span>
          </a>
          <Link
            className="text-sm font-normal capitalize text-[#1B254B] hover:underline"
            to="#"
          >
            {routeText}
          </Link>
        </div>

        <p className="shrink text-[33px] capitalize text-[#1B254B]">
          <Link to="#" className="font-bold capitalize hover:text-[#1B254B]">
            {routeText}
          </Link>
        </p>
      </div>

      <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-[#7090b014] md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
        <div className="flex h-full items-center rounded-full bg-[#F4F7FE] text-[#1B254B] xl:w-[225px]">
          <p className="pl-3 pr-2 text-xl">
            <MdSearch className="h-5 w-5 text-gray-700" />
          </p>
          <input
            type="text"
            placeholder="Search..."
            className="block h-full w-full rounded-full bg-[#F4F7FE] text-sm font-medium text-[#1B254B] outline-none placeholder:!text-gray-400 sm:w-fit"
          />
        </div>

        <span
          className="flex cursor-pointer text-xl text-gray-600 xl:hidden"
          onClick={onOpenSidebar}
        >
          <FiAlignJustify className="h-5 w-5" />
        </span>

        <Dropdown
          button={
            <p className="cursor-pointer">
              <IoMdNotificationsOutline className="h-5 w-5 text-gray-400" />
            </p>
          }
          animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
          children={
            <div className="flex w-[360px] flex-col gap-5 rounded-[20px] bg-white px-5 py-7 shadow-xl shadow-[#7090B014] sm:w-[460px]">
              <div className="flex items-center justify-between">
                <p className="text-base font-bold text-[#1B254B]">
                  Notification
                </p>
                <p className="text-sm font-bold text-[#1B254B]">
                  Mark all read
                </p>
              </div>

              {listNotif.map((_, index) => (
                <button key={index} className="flex w-full items-center">
                  <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-[#868CFF] to-[#422AFB] py-[22px] text-2xl text-white">
                    <BsArrowBarUp />
                  </div>
                  <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                    <p className="mb-1 text-left text-base font-bold text-gray-900">
                      New Update: Horizon UI Dashboard PRO
                    </p>
                    <p className="font-base text-left text-xs text-gray-900">
                      A new update for your downloaded item is available!
                    </p>
                  </div>
                </button>
              ))}
            </div>
          }
          classNames={"py-2 top-6 -left-[230px] md:-left-[440px] w-max"}
        />

        <Dropdown
          button={
            <p className="cursor-pointer">
              <IoMdInformationCircleOutline className="h-5 w-5 text-gray-400" />
            </p>
          }
          children={
            <div className="flex w-[350px] flex-col gap-2 rounded-[20px] bg-white p-4 shadow-xl shadow-[#7090B014]">
              <div
                style={{
                  backgroundImage: `url(${ImageHorizon})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="mb-2 aspect-video w-full rounded-lg"
              />
              <a
                target="blank"
                href=" "
                className="px-full linear flex cursor-pointer items-center justify-center rounded-xl bg-[#422AFB] py-[11px] font-bold text-white transition duration-200 hover:bg-[#3311db] hover:text-white active:bg-[#2111A5]"
              >
                Buy Horizon UI PRO
              </a>
              <a
                target="blank"
                href=" "
                className="px-full linear flex cursor-pointer items-center justify-center rounded-xl border border-gray-600 py-[11px] font-bold text-[#1B254B] transition duration-200 hover:bg-gray-200 hover:text-[#1B254B]"
              >
                See Documentation
              </a>
              <a
                target="blank"
                href=" "
                className="hover:bg-gray-200 px-full linear flex cursor-pointer items-center justify-center rounded-xl py-[11px] font-bold text-[#1B254B] transition duration-200 hover:text-[#1B254B]"
              >
                Try Horizon Free
              </a>
            </div>
          }
          classNames={"py-2 top-6 -left-[250px] md:-left-[330px] w-max"}
          animation="origin-[75%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
        />

        <div className="cursor-pointer text-gray-400">
          <RiMoonFill className="h-4 w-4" />
        </div>

        <Dropdown
          button={
            <p className="bg-[#263674] flex h-10 items-center justify-center text-white w-10 rounded-full">
              HD
            </p>
          }
          children={
            <div className="flex w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-[#7090B014]">
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-[#1B254B]">
                    👋 Hey, Dolos
                  </p>{" "}
                </div>
              </div>
              <div className="h-px w-full bg-gray-200 " />

              <div className="flex flex-col p-4">
                <a href=" " className="text-sm text-gray-800">
                  Profile Settings
                </a>
                <a href=" " className="mt-3 text-sm text-gray-800">
                  Newsletter Settings
                </a>
                <a
                  href=" "
                  className="mt-3 text-sm font-medium text-red-500 hover:text-red-500 transition duration-150 ease-out hover:ease-in"
                >
                  Log Out
                </a>
              </div>
            </div>
          }
          classNames={"py-2 top-8 -left-[180px] w-max"}
        />
      </div>
    </nav>
  );
}

export default Navbar;
