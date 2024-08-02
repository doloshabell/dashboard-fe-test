import { Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "../layout/dashboard";

function RoutesIndex() {
  return (
    <Routes>
      <Route path="dashboard/*" index element={<DashboardLayout />} />
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default RoutesIndex;
