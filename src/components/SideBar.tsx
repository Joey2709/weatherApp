import { Box, Button, Typography } from "@mui/material";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AppsIcon from "@mui/icons-material/Apps";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  const handleClick = (str: string) => {
    navigate(`/${str}`);
  };

  return (
    <Box className="flex flex-col w-[8%] bg-[#0B2447] p-4 rounded-lg gap-2 h-min">
      <Button className="flex flex-col gap-3" disabled>
        <AppsIcon sx={{ color: "#A5D7E8" }} />
        <Typography sx={{ color: "white", opacity: 0.9 }}>
          Weather App
        </Typography>
      </Button>
      <Button
        className="flex flex-col gap-3"
        onClick={() => {
          handleClick("weather");
        }}
      >
        <ThermostatIcon sx={{ color: "#A5D7E8" }} />
        <Typography sx={{ color: "white", opacity: 0.9 }}>Weather</Typography>
      </Button>
      <Button
        className="flex flex-col gap-3"
        onClick={() => {
          handleClick("settings");
        }}
      >
        <SettingsSuggestIcon sx={{ color: "#A5D7E8" }} />
        <Typography sx={{ color: "white", opacity: 0.9 }}>Settings</Typography>
      </Button>
    </Box>
  );
};

export default SideBar;
