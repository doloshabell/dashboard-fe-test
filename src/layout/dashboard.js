import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import listRoutes from "../routes/listRoutes";

function DashboardLayout(props) {
  const { ...rest } = props;
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const [currentRoute, setCurrentRoute] = useState("");

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth < 1200 ? setIsOpen(false) : setIsOpen(true);
    });
  }, []);

  useEffect(() => {
    getActiveRoute(listRoutes);
  }, [location.pathname]);

  const getActiveRoute = (routes) => {
    let activeRoute = "";
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(
          routes[i].layout + "/" + routes[i].path
        ) !== -1
      ) {
        setCurrentRoute(routes[i].name);
      }
    }
    return activeRoute;
  };

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/dashboard") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <div className="flex h-full w-full">
      <div className="h-full w-full bg-[#F4F7Fe]">
        <main
          className="mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]"
        >
          <div className="h-full">
            <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
              <Routes>
                {getRoutes(listRoutes)}

                <Route
                  path="/"
                  element={<Navigate to="/dashboard" replace />}
                />
              </Routes>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
