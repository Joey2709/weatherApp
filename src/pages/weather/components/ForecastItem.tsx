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
    <Card className="min-h-[110px] !bg-[#DFD7BF] /*!bg-[#1F2B3B]*/">
      <CardContent className="flex items-center justify-between h-full">
        <Box>
          <Typography variant="body1" color="#3F2305">
            {getSunrise(dt || 0)}
          </Typography>
          <Typography variant="body1" color="#3F2305">
            {getDateFromDt(dt || 0)}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" color="#3F2305">
            Conditions: {weather[0].description}
          </Typography>
          <Typography variant="body1" color="#3F2305">
            Humidity: {main.humidity}
          </Typography>
        </Box>
        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
          alt={weather[0].icon}
          width="65px"
          height="65px"
        />
        <Typography variant="h4" color="#3F2305">
          {main.temp.toFixed(0)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ForecastItem;
