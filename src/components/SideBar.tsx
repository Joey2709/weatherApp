import { Box, Button, Typography } from "@mui/material";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AppsIcon from "@mui/icons-material/Apps";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { useNavigate } from "react-router-dom";

const colorIcon = "#7599E0";

const SideBar = () => {
  const navigate = useNavigate();

  const handleClick = (str: string) => {
    navigate(`/${str}`);
  };

  return (
    <Box
      className="flex flex-col w-[8%] p-4 rounded-lg gap-2 h-min"
      sx={{ backgroundColor: "primary.main" }}
    >
      <Button className="flex flex-col gap-3" disabled>
        <AppsIcon sx={{ color: colorIcon }} />
        <Typography variant="inherit" color="text.secondary">
          Weather App
        </Typography>
      </Button>
      <Button
        className="flex flex-col gap-3"
        onClick={() => {
          handleClick("weather");
        }}
      >
        <ThermostatIcon sx={{ color: colorIcon }} />
        <Typography variant="inherit" color="text.secondary">
          Weather
        </Typography>
      </Button>
      <Button
        className="flex flex-col gap-3"
        onClick={() => {
          handleClick("settings");
        }}
      >
        <SettingsSuggestIcon sx={{ color: colorIcon }} />
        <Typography variant="inherit" color="text.secondary">
          Settings
        </Typography>
      </Button>
    </Box>
  );
};

export default SideBar;
