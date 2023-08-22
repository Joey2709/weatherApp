import { Box, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import LoadingButton from "@mui/lab/LoadingButton";

import useFetch from "../../hooks/useFetch";
import { useState, useEffect } from "react";
import CurrentWeather from "./components/CurrentWeather";
import { useNavigate, useParams } from "react-router-dom";

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
    <Box className="flex flex-col w-full">
      <TextField
        label="Search by city name, zip code or city ID..."
        variant="filled"
        fullWidth
        autoComplete="off"
        sx={{
          input: { color: "white" },
          label: { color: "white", opacity: "0.9" },
          width: "350px",
          "& label.Mui-focused": {
            color: "#A5D7E8",
          },
        }}
        onChange={(e) => {
          setCityName(e.target.value);
        }}
        value={cityName}
      />
      <LoadingButton
        variant="contained"
        endIcon={<SendIcon />}
        onClick={handleClick}
        loading={isLoading}
        type="submit"
      >
        Find
      </LoadingButton>
      {/*city_name &&*/ <CurrentWeather data={data} />}
      {/* {error && <h1>{error}</h1>} */}
    </Box>
  );
};

export default Weather;
