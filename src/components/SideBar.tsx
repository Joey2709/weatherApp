import { useNavigate } from "react-router-dom";

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
import AppsIcon from "@mui/icons-material/Apps";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

import {
  IconBrightnessDown,
  IconMoonStars,
  IconLayoutNavbarExpand,
} from "@tabler/icons-react";

import SwitchDarkMode from "./SwitchDarkMode";
import { useState } from "react";

const colorIcon = "#7599E0";

interface SideBarProps {
  colorMode: {
    toggleColorMode: () => void;
  };
  mode: PaletteMode;
}

const SideBar = ({ colorMode, mode }: SideBarProps) => {
  const navigate = useNavigate();
  const handleClick = (str: string) => {
    navigate(`/${str}`);
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClicka = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="absolute">
      <ToggleButton
        value="left"
        selected={open}
        onClick={handleClicka}
        className="relative min-h"
        sx={{
          backgroundColor: "primary.main",
        }}
      >
        <IconLayoutNavbarExpand />
      </ToggleButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          width: "20ch",
          ".MuiList-root": {
            backgroundColor: "primary.main",
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
            alignItems: "center",
            gap: 1.5,
          },
        }}
      >
        <MenuItem>
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
        </MenuItem>

        <MenuItem>
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
        </MenuItem>

        <SwitchDarkMode
          onChange={colorMode.toggleColorMode}
          icon={<IconBrightnessDown />}
          checkedIcon={<IconMoonStars />}
          checked={mode === "dark"}
        />
      </Menu>
    </Box>
  );
};

export default SideBar;
