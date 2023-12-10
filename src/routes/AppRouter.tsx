import { Navigate, Route, Routes } from "react-router-dom";
import Weather from "../pages/weather/Weather";

const AppRouter = () => {
  return (
    <>
      <Routes>
        {<Route path="/*" element={<Navigate to="/weather" replace />} />}
        <Route path="/weather" element={<Weather />} />
        <Route path="/weather/:city_name" element={<Weather />} />
      </Routes>
    </>
  );
};

export default AppRouter;
