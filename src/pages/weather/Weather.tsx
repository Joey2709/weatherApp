import { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { Box, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import SearchIcon from "@mui/icons-material/Search";

import CurrentWeather from "./components/CurrentWeather";
import useFetch from "../../hooks/useFetch";

const Weather = () => {
  const navigate = useNavigate();
  const { city_name } = useParams();

  const [cityName, setCityName] = useState(city_name?.toLowerCase() ?? "");

  const { data, error, isLoading, getFetch } = useFetch();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    navigate("/weather/" + cityName.toLowerCase(), { replace: true });
    getFetch(cityName);
  };

  useEffect(() => {
    if (cityName !== "") {
      getFetch(cityName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box className="flex flex-col w-full" sx={{ color: "text.secondary" }}>
      <form className="flex flex-col h-[15vh] gap-4 w-2/6 self-center">
        <TextField
          label="Search by city name, zip code or city ID..."
          variant="filled"
          fullWidth
          autoComplete="off"
          onChange={(e) => {
            setCityName(e.target.value);
          }}
          value={cityName}
          sx={{
            ".MuiInputBase-input": {
              color: "text.secondary",
            },
            "& label.Mui-focused": {
              color: "text.secondary",
              fontWeight: "bold",
            },
          }}
        />
        <LoadingButton
          variant="contained"
          endIcon={<SearchIcon />}
          onClick={handleClick}
          loading={isLoading}
          type="submit"
        >
          Find
        </LoadingButton>
      </form>

      {city_name && data && <CurrentWeather data={data} />}
      {error && <h1>{error}</h1>}
    </Box>
  );
};

export default Weather;
