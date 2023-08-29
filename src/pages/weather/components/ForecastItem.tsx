import { Card, CardContent, Box, Typography } from "@mui/material";
import { getSunrise, getDateFromDt } from "../../../utils/utils";
import { MainClassI, WeatherForecastI } from "../../../utils/entities";

interface ForecastItemProps {
  dt: number;
  weather: WeatherForecastI[];
  main: MainClassI;
}

const ForecastItem = ({ dt, weather, main }: ForecastItemProps) => {
  return (
    <Card
      className="min-h-[110px]"
      sx={{ backgroundColor: "primary.main", backgroundImage: "initial" }}
    >
      <CardContent className="flex flex-wrap items-center justify-between h-full">
        <Box>
          <Typography variant="body1" color="text.secondary">
            {getSunrise(dt)}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {getDateFromDt(dt)}
          </Typography>
        </Box>
        <Box className="min-w-max">
          <Typography variant="body1" color="text.secondary">
            Conditions: {weather[0].description}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Humidity: {main.humidity}
          </Typography>
        </Box>
        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
          alt={weather[0].icon}
          width="65px"
          height="65px"
        />
        <Typography variant="h4" color="text.secondary">
          {main.temp.toFixed(0)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ForecastItem;
