import React from "react";
import { HiHome } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

function ListMenu(props) {
  let location = useLocation();
  const { routes } = props;

  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  return routes.map((route, index) => {
    return (
      <Link key={index} to={route.layout + "/" + route.path}>
        <div className={"relative mb-3 flex hover:cursor-pointer"}>
          <li
            className="my-1 flex cursor-pointer items-center px-8"
            key={index}
          >
            <span
              className={`${
                activeRoute(route.path) === true
                  ? "font-bold text-[#422AFB]"
                  : "font-medium text-gray-400"
              }`}
            >
              {route.icon ? route.icon : <HiHome />}{" "}
            </span>
            <p
              className={`leading-1 ml-4 flex ${
                activeRoute(route.path) === true
                  ? "font-bold text-[#1B254B]"
                  : "font-medium text-gray-400"
              }`}
            >
              {route.name}
            </p>
          </li>
          {activeRoute(route.path) ? (
            <div class="absolute right-0 top-px h-9 w-1 rounded-lg bg-[#422AFB]" />
          ) : null}
        </div>
      </Link>
    );
  });
}

export default ListMenu;
