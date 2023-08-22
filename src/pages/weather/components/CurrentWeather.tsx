import { Card, CardContent, Typography, Box } from "@mui/material";
import Icon from "@mui/material/Icon";

import {
  IconWind,
  IconBrandSpeedtest,
  IconTemperature,
  IconTemperaturePlus,
  IconDropletHalf2Filled,
  IconPercentage,
  IconTemperatureCelsius,
  IconTemperatureMinus,
  IconSunrise,
  IconSunset,
} from "@tabler/icons-react";

import { CurrentWeatherI } from "./../../../utils/entities";
import { capitalize, getHourAgo, getSunrise } from "../../../utils/utils";
import CardWeather from "./CardWeather";

interface CurrentWeatherProps {
  data: CurrentWeatherI | null;
}

const CurrentWeather = ({ data }: CurrentWeatherProps) => {
  return (
    <Box className="flex gap-6 mt-4 h-full w-full">
      <Box className="h-full max-w-[425px] w-2/6">
        <Card
          sx={{
            width: "100%",
            background:
              "linear-gradient(132deg, rgba(66,83,110,1) 0%, rgba(20,45,80,1) 40%, rgba(16,43,84,1) 65%)",
            height: "100%",
          }}
        >
          <CardContent>
            <Typography variant="h3" color="white">
              {capitalize(data?.city_name || "")}
            </Typography>
            <Typography variant="h6" color="white">
              {data?.country.name.common}
            </Typography>
            <img
              src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}.png`}
              alt="04d"
              width="80px"
              height="80px"
            />
            <Box className="flex justify-between">
              <Typography variant="h2" color="white">
                {data?.main.temp.toFixed(0)}°C
              </Typography>
              <Typography
                fontSize={30}
                color="white"
                className="flex items-center h-[72px]"
              >
                {capitalize(data?.weather[0].description || "")}
              </Typography>
            </Box>
            <hr className="border-[1.5px] border-gray-400 my-4" />
            <Typography variant="h5" color="white">
              Sunrise & Sunset
            </Typography>
            <CardContent
              sx={{
                background:
                  "linear-gradient(270deg, rgba(42,73,125,1) 0%, rgba(42,67,106,1) 65%)",
                borderRadius: "8px",
              }}
              className="flex items-center justify-between mt-4"
            >
              <Box className="flex items-center gap-4">
                <Icon sx={{ color: "#bfbfbf", width: "auto", height: "auto" }}>
                  <IconSunrise className="w-[55px] h-[55px]" />
                </Icon>
                <Box className="flex flex-col gap-2">
                  <Typography variant="h6" color="#bfbfbf">
                    Sunrise
                  </Typography>
                  <Typography variant="h4" color="white">
                    {getSunrise(data?.sys.sunrise || 0)}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="h6" color="#e0e0e0">
                {getHourAgo(data?.sys.sunrise || 0)} hours ago
              </Typography>
            </CardContent>
            <CardContent
              sx={{
                background:
                  "linear-gradient(270deg, rgba(42,73,125,1) 0%, rgba(42,67,106,1) 65%)",
                borderRadius: "8px",
              }}
              className="flex items-center justify-between mt-4"
            >
              <Box className="flex items-center gap-4">
                <Icon sx={{ color: "#bfbfbf", width: "auto", height: "auto" }}>
                  <IconSunset className="w-[55px] h-[55px]" />
                </Icon>
                <Box className="flex flex-col gap-2">
                  <Typography variant="h6" color="#bfbfbf">
                    Sunset
                  </Typography>
                  <Typography variant="h4" color="white">
                    {getSunrise(data?.sys.sunset || 0)}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="h6" color="#e0e0e0">
                {getHourAgo(data?.sys.sunset || 0)} hours ago
              </Typography>
            </CardContent>
          </CardContent>
        </Card>
      </Box>
      <Box className="flex flex-wrap gap-6 h-min max-w-[448px]">
        <CardWeather
          data={data?.wind.speed}
          title={"Wind Speed"}
          icon={<IconWind />}
          unit={" m/s"}
        />
        <CardWeather
          data={data?.main.pressure}
          title={"Pressure"}
          icon={<IconBrandSpeedtest />}
          unit={" hPa"}
        />
        <CardWeather
          data={data?.main.feels_like}
          title={"Feels Like"}
          icon={<IconTemperature />}
          unit={<IconTemperatureCelsius />}
        />
        <CardWeather
          data={data?.main.temp_max}
          title={"Humidity"}
          icon={<IconDropletHalf2Filled />}
          unit={<IconPercentage />}
        />
        <CardWeather
          data={data?.main.temp_min}
          title={"Temp Min"}
          icon={<IconTemperatureMinus />}
          unit={<IconTemperatureCelsius />}
        />
        <CardWeather
          data={data?.main.temp_max}
          title={"Temp Max"}
          icon={<IconTemperaturePlus />}
          unit={<IconTemperatureCelsius />}
        />
      </Box>
    </Box>
  );
};

export default CurrentWeather;
