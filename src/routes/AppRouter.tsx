import { Navigate, Route, Routes } from "react-router-dom";
import Weather from "../pages/weather/Weather";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/weatherApp" replace />} />
      <Route path="/weatherApp" element={<Weather />} />
      <Route path="/weatherApp/:city_name" element={<Weather />} />
    </Routes>
  );
};

export default AppRouter;
