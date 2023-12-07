import { Box, PaletteMode } from "@mui/material";

import { IconBrightnessDown, IconMoonStars } from "@tabler/icons-react";

import SwitchDarkMode from "./SwitchDarkMode";

interface MenuWeatherProps {
  colorMode: {
    toggleColorMode: () => void;
  };
  mode: PaletteMode;
}

const MenuWeather = ({ colorMode, mode }: MenuWeatherProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "end",
        padding: 2,
      }}
    >
      <SwitchDarkMode
        onChange={colorMode.toggleColorMode}
        icon={<IconBrightnessDown />}
        checkedIcon={<IconMoonStars />}
        checked={mode === "dark"}
      />
    </Box>
  );
};

export default MenuWeather;
