import { Box, Container } from "@mui/material";
import SideBar from "./components/SideBar";
import { CircularProgressbar } from "react-circular-progressbar";
import AppRouter from "./routes/AppRouter";
//import "react-circular-progressbar/dist/styles.css";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const value = 20;

  return (
    <>
      {/* <CircularProgressbar
        value={value}
        text={`${value} %`}
        circleRatio={0.7}
        styles={{
          trail: {
            strokeLinecap: "butt",
            transform: "rotate(-126deg)",
            transformOrigin: "center center",
          },
          path: {
            strokeLinecap: "butt",
            transform: "rotate(-126deg)",
            transformOrigin: "center center",
            stroke: "#00FF7F",
            transition: "stroke-dashoffset 0.5s ease 0s",
          },
          text: {
            fill: "#ddd",
          },
        }}
        strokeWidth={5}
      /> */}
      <Box className="p-5 flex w-screen h-screen gap-7">
        <SideBar />
        <AppRouter />
      </Box>
    </>
  );
}

export default App;
