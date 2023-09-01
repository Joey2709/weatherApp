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
    <Card sx={{ backgroundColor: "primary.main", backgroundImage: "initial" }}>
      <CardContent
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Box>
          <Typography variant="body1" color="text.secondary">
            {getSunrise(dt)}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {getDateFromDt(dt)}
          </Typography>
        </Box>
        <Box sx={{ minWidth: "231px" }}>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ display: "flex", gap: "0.25rem" }}
          >
            <IconRipple />
            Conditions:{weather[0].description}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ display: "flex", gap: "0.25rem" }}
          >
            <IconDropletHalf2Filled />
            Humidity:{main.humidity}
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
      </CardContent>
    </Card>
  );
};

export default ForecastItem;
