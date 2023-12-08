import { Card, CardContent, Typography, Box, Divider } from "@mui/material";
import { SvgIcon } from "@mui/material";

import {
  IconWind,
  IconBrandSpeedtest,
  IconTemperature,
  IconTemperaturePlus,
  IconDropletHalf2Filled,
  IconTemperatureMinus,
  IconSunrise,
  IconSunset,
  IconMapPinFilled,
  IconCalendarPin,
} from "@tabler/icons-react";

import { format } from "date-fns";

import { Map, Marker } from "pigeon-maps";

import CardWeather from "./CardWeatherItem";
import ForecastItem from "./ForecastItem";
import { CurrentWeatherI } from "./../../../utils/entities";
import { capitalize, getHourAgo, getSunrise } from "../../../utils/utils";

interface CurrentWeatherProps {
  data: CurrentWeatherI;
}

const CurrentWeather = ({ data }: CurrentWeatherProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        gap: 2,
        height: "80%",
      }}
      component="main"
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "50%",
            md: "20%",
          },
          minHeight: "min-content",
          flex: "1 auto",
          minWidth: {
            md: "447px",
          },
        }}
        component="section"
      >
        <Card
          sx={{
            width: "100%",
            backgroundColor: "primary.main",
            backgroundImage: "initial",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
            }}
          >
            <Typography variant="h3" color="text.secondary" fontSize={30}>
              {capitalize(data.city_name)}
            </Typography>
            <Typography
              fontSize={20}
              color="text.secondary"
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <IconMapPinFilled />
              {data.country.name.common}
            </Typography>
            <Typography
              fontSize={20}
              color="text.secondary"
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <IconCalendarPin />
              {format(new Date(), "PP")}
            </Typography>
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
              alt={data.weather[0].icon}
              width="80px"
              height="80px"
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              <Typography variant="h3" color="text.secondary" fontSize={40}>
                {data.main.temp.toFixed(0)}°C
              </Typography>
              <Typography
                variant="h3"
                fontSize={30}
                color="text.secondary"
                sx={{ display: "flex", alignItems: "center", height: "72px" }}
              >
                {capitalize(data.weather[0].description)}
              </Typography>
            </Box>
            <Divider sx={{ marginY: 2 }} />
            <Typography variant="h5" color="text.secondary" fontSize={30}>
              Sunrise & Sunset
            </Typography>
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
                backgroundColor: "background.paper",
                borderRadius: "8px",
                flexWrap: "wrap",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <SvgIcon
                  sx={{ color: "#bfbfbf", width: "40px", height: "40px" }}
                >
                  <IconSunrise />
                </SvgIcon>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
                >
                  <Typography variant="h6" color="#bfbfbf" fontSize={20}>
                    Sunrise
                  </Typography>
                  <Typography variant="h4" color="text.secondary" fontSize={25}>
                    {getSunrise(data.sys.sunrise)}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="h6" color="#e0e0e0" fontSize={20}>
                {getHourAgo(data.sys.sunrise)}
              </Typography>
            </CardContent>
            <CardContent
              sx={{
                display: "center",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
                backgroundColor: "background.paper",
                borderRadius: "8px",
                flexWrap: "wrap",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <SvgIcon
                  sx={{ color: "#bfbfbf", width: "40px", height: "40px" }}
                >
                  <IconSunset />
                </SvgIcon>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
                >
                  <Typography variant="h6" color="#bfbfbf" fontSize={20}>
                    Sunset
                  </Typography>
                  <Typography variant="h4" color="text.secondary" fontSize={25}>
                    {getSunrise(data.sys.sunset)}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="h6" color="#e0e0e0" fontSize={20}>
                {getHourAgo(data.sys.sunset)}
              </Typography>
            </CardContent>
          </CardContent>
        </Card>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          height: "min-content",
          width: {
            xs: "100%",
            lg: "50%",
            xl: "30%",
          },
        }}
        component="section"
      >
        <CardWeather
          data={data.wind.speed}
          title={"Wind Speed"}
          icon={<IconWind />}
          unit={" m/s"}
        />
        <CardWeather
          data={data.main.pressure}
          title={"Pressure"}
          icon={<IconBrandSpeedtest />}
          unit={" hPa"}
        />
        <CardWeather
          data={data.main.feels_like}
          title={"Feels Like"}
          icon={<IconTemperature />}
          unit={" °C"}
        />
        <CardWeather
          data={data.main.temp_max}
          title={"Humidity"}
          icon={<IconDropletHalf2Filled />}
          unit={" %"}
        />
        <CardWeather
          data={data.main.temp_min}
          title={"Temp Min"}
          icon={<IconTemperatureMinus />}
          unit={" °C"}
        />
        <CardWeather
          data={data.main.temp_max}
          title={"Temp Max"}
          icon={<IconTemperaturePlus />}
          unit={" °C"}
        />
        <Box sx={{ width: "100%", height: 300 }}>
          <Map
            height={300}
            defaultZoom={10}
            center={[data.coord.lat, data.coord.lon]}
          >
            <Marker
              width={40}
              anchor={[data.coord.lat, data.coord.lon]}
              color={"#ff0000"}
            />
          </Map>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: "column",
          flex: "1 auto",
          width: {
            lg: "30%",
            sm: "100%",
          },
          minWidth: {
            lg: "546px",
          },
        }}
        component="section"
      >
        <Typography variant="h5" color="text.secondary">
          Hourly Forecast
        </Typography>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            overflowY: "auto",
            maxHeight: "65vh",
          }}
        >
          {data?.forecast.list.map((e) => (
            <ForecastItem
              key={e.dt}
              dt={e.dt}
              main={e.main}
              weather={e.weather}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CurrentWeather;
