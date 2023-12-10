import { Navigate, Route, Routes } from "react-router-dom";
import Weather from "../pages/weather/Weather";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/weather-app-react" replace />} />
      <Route path="/weather-app-react" element={<Weather />} />
      <Route path="/weather-app-react/:city_name" element={<Weather />} />
    </Routes>
  );
};

export default AppRouter;
