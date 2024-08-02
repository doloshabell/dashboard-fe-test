import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import listRoutes from "../routes/listRoutes";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

function DashboardLayout() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const [currentRoute, setCurrentRoute] = useState(window.location.href);

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth < 1200 ? setIsOpen(false) : setIsOpen(true);
    });
  }, []);

  useEffect(() => {
    getActiveRoute(listRoutes);
  }, [location.pathname]);

  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(
          routes[i].layout + "/" + routes[i].path
        ) !== -1
      ) {
        setCurrentRoute(routes[i].name);
      }
    }
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

  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
      ) {
        return routes[i].secondary;
      }
    }
    return activeNavbar;
  };

  return (
    <div className="flex h-screen w-full">
      <div className="xl:flex fixed hidden bg-white h-screen overflow-y-auto custom-scrollbar-none">
        <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>

      <div className="h-full custom-scrollbar-thin flex-1 overflow-y-auto bg-[#F4F7FE]">
        <main className="h-full flex-none mx-[12px] transition-all xl:ml-[300px]">
          <div className="h-full">
            <Navbar
              onOpenSidebar={() => setIsOpen(true)}
              logoText={"Horizon UI Tailwind React"}
              routeText={currentRoute}
              secondary={getActiveNavbar(listRoutes)}
            />
            <div className="mx-auto mb-auto h-full min-h-[84vh] p-2">
              <Routes>
                {getRoutes(listRoutes)}
                <Route
                  path="/"
                  element={<Navigate to="/dashboard/home" replace />}
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
