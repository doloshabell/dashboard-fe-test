import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import listRoutes from "../routes/listRoutes";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function DashboardLayout() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <div className="flex h-full w-full">
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <div className="h-full w-full custom-scrollbar-thin flex-1 overflow-y-auto bg-[#F4F7FE]">
        <main className="h-full flex-none mr-11 transition-all md:pr-2 xl:ml-[310px]">
          <div className="h-full">
            <Navbar
              onOpenSidebar={() => setIsOpen(!isOpen)}
              routeText={currentRoute}
            />
            <div className="mx-auto mb-auto h-full min-h-[80vh] p-2 md:pr-2">
              <Routes>
                {getRoutes(listRoutes)}
                <Route
                  path="/"
                  element={<Navigate to="/dashboard/home" replace />}
                />
              </Routes>
              <div className="mt-6 py-3">
                <Footer />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
