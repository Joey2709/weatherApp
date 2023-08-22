import { Navigate, Route, Routes } from "react-router-dom";
import Weather from "../pages/weather/Weather";
import Settings from "../pages/settings/Settings";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Navigate to="/weather" replace />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/weather/:city_name" element={<Weather />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
};

export default AppRouter;
