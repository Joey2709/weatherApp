import { Switch, SwitchProps, styled } from "@mui/material";

const SwitchDarkMode = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 52,
  height: 28,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "150ms",
    "&.Mui-checked": {
      transform: "translateX(23px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#35455E" : "#808691",
        opacity: 1,
      },
    },
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#808691" : "#1F2B3B",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 200,
    }),
  },
}));

export default SwitchDarkMode;
