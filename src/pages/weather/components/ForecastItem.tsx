import { Card, CardContent, Box, Typography } from "@mui/material";
import { getSunrise, getDateFromDt } from "../../../utils/utils";
import { MainClassI, WeatherForecastI } from "../../../utils/entities";
import { IconRipple, IconDropletHalf2Filled } from "@tabler/icons-react";

interface ForecastItemProps {
  dt: number;
  weather: WeatherForecastI[];
  main: MainClassI;
}

const ForecastItem = ({ dt, weather, main }: ForecastItemProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        backgroundImage: "initial",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "min-content",
        padding: 2,
        height: "min-content",
        gap: 1,
      }}
    >
      <Box>
        <Typography variant="body1" color="text.secondary" mb={1}>
          {getSunrise(dt)}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {getDateFromDt(dt)}
        </Typography>
      </Box>
      <Box
        sx={{
          minWidth: "231px",
        }}
      >
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ display: "flex", gap: "0.25rem" }}
          mb={1}
        >
          <IconRipple />
          Conditions: {weather[0].description}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ display: "flex", gap: "0.25rem" }}
        >
          <IconDropletHalf2Filled />
          Humidity: {main.humidity}
        </Typography>
      </Box>
      <Typography variant="h4" color="text.secondary">
        {main.temp.toFixed(0)} °C
      </Typography>
      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
        alt={weather[0].icon}
        width="65px"
        height="65px"
      />
    </Box>
  );
};

export default ForecastItem;
