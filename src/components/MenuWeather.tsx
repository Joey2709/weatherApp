import { resolvePath, useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Menu,
  MenuItem,
  PaletteMode,
  ToggleButton,
  Typography,
} from "@mui/material";
import ThermostatIcon from "@mui/icons-material/Thermostat";

import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { useLocation } from "react-router-dom";
import {
  IconBrightnessDown,
  IconMoonStars,
  IconLayoutNavbarExpand,
} from "@tabler/icons-react";

import SwitchDarkMode from "./SwitchDarkMode";
import { useState, useEffect } from "react";

const colorIcon = "#7599E0";

interface MenuWeatherProps {
  colorMode: {
    toggleColorMode: () => void;
  };
  mode: PaletteMode;
}

const MenuWeather = ({ colorMode, mode }: MenuWeatherProps) => {
  //const navigate = useNavigate();
  // const pathname = resolvePath(useLocation().pathname, "/weather");

  // const handleClick = (str: string) => {
  //   navigate(`/${str}`);
  // };

  // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  // const open = Boolean(anchorEl);
  // const handleClicka = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    // <Box>
    //   <ToggleButton
    //     value="left"
    //     selected={open}
    //     onClick={handleClicka}
    //     sx={{
    //       backgroundColor: "primary.main",
    //       position: "relative",
    //       left: 16,
    //       top: 16,
    //       "&.Mui-selected": {
    //         backgroundColor: "primary.main",
    //         color: "text.secondary",
    //       },
    //       ".Mui-selected:hover": {
    //         backgroundColor: "background.main",
    //         color: "text.secondary",
    //       },
    //       "&.MuiToggleButton-root:hover": {
    //         backgroundColor: "background.paper",
    //       },
    //       color: "text.secondary",
    //     }}
    //   >
    //     <IconLayoutNavbarExpand />
    //   </ToggleButton>
    //   <Menu
    //     anchorEl={anchorEl}
    //     open={open}
    //     onClose={handleClose}
    //     sx={{
    //       width: "20ch",
    //       ".MuiList-root": {
    //         backgroundColor: "primary.main",
    //         display: "flex",
    //         flexDirection: "column",
    //         justifyItems: "center",
    //         alignItems: "center",
    //         gap: 1.5,
    //       },
    //     }}
    //     MenuListProps={{
    //       "aria-labelledby": "lock-button",
    //       role: "listbox",
    //     }}
    //   >
    //     <MenuItem
    //       sx={{
    //         "&.Mui-selected": {
    //           backgroundColor: "background.main",
    //         },
    //         "&.Mui-selected:hover": {
    //           backgroundColor: "background.main",
    //         },
    //       }}
    //       //selected={pathname === "/weather"}
    //     >
    //       <Button
    //         sx={{ display: "flex", flexDirection: "column", gap: 1 }}
    //         onClick={() => {
    //           handleClick("weather");
    //         }}
    //       >
    //         <ThermostatIcon sx={{ color: colorIcon }} />
    //         <Typography variant="inherit" color="text.secondary">
    //           Weather
    //         </Typography>
    //       </Button>
    //     </MenuItem>

    //     <MenuItem
    //       sx={{
    //         "&.Mui-selected": {
    //           backgroundColor: "background.main",
    //         },
    //         "&.Mui-selected:hover": {
    //           backgroundColor: "background.main",
    //         },
    //       }}
    //       //selected={pathname === "/settings"}
    //       divider
    //     >
    //       <Button
    //         sx={{ display: "flex", flexDirection: "column", gap: 1 }}
    //         onClick={() => {
    //           handleClick("settings");
    //         }}
    //       >
    //         <SettingsSuggestIcon sx={{ color: colorIcon }} />
    //         <Typography variant="inherit" color="text.secondary">
    //           Settings
    //         </Typography>
    //       </Button>
    //     </MenuItem>

    //     <SwitchDarkMode
    //       onChange={colorMode.toggleColorMode}
    //       icon={<IconBrightnessDown />}
    //       checkedIcon={<IconMoonStars />}
    //       checked={mode === "dark"}
    //     />
    //     <Typography variant="body1" color="text.secondary">
    //       {mode === "dark" ? "Dark Mode" : "Light Mode"}
    //     </Typography>
    //   </Menu>
    // </Box>
    <SwitchDarkMode
      onChange={colorMode.toggleColorMode}
      icon={<IconBrightnessDown />}
      checkedIcon={<IconMoonStars />}
      checked={mode === "dark"}
    />
  );
};

export default MenuWeather;
