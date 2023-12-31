import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Box, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import SearchIcon from "@mui/icons-material/Search";

import CurrentWeather from "./components/CurrentWeather";
import useFetch from "../../hooks/useFetch";
import Loading from "./components/Loading";
import NotFound from "./components/NotFound";
import useQuery from "../../hooks/useQuery";

const Weather = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const [cityName, setCityName] = useState(query.get("search") ?? "");

  const { data, error, isLoading, getFetch } = useFetch();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    navigate("/weatherApp?search=" + cityName.toLowerCase());
    getFetch(cityName);
  };

  useEffect(() => {
    console.log(cityName);
    if (cityName) {
      getFetch(cityName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      sx={{
        color: "text.secondary",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "background.main",
        padding: 2,
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
          width: {
            md: "25%",
            sm: "50%",
            xs: "100%",
          },
          height: "15%",
          gap: 2,
        }}
        component="form"
      >
        <TextField
          label="Search by city name, zip code or city ID"
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
          sx={{
            width: "100%",
          }}
        >
          Find
        </LoadingButton>
      </Box>

      {cityName && data && <CurrentWeather data={data} />}
      {isLoading && <Loading />}
      {error && <NotFound city={query.get("search") ?? ""} />}
    </Box>
  );
};

export default Weather;
