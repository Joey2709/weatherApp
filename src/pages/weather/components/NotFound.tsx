import { Box, Typography, capitalize } from "@mui/material";
import NotFoundSVG from "../../../assets/NotFound.svg";

interface NotFoundProps {
  city: string;
}

const NotFound = ({ city }: NotFoundProps) => {
  return (
    <Box
      sx={{
        alignSelf: "center",
        height: "80vh",
        color: "text.secondary",
        textAlign: "center",
        margin: "auto",
      }}
    >
      <img
        src={NotFoundSVG}
        alt="Not Found"
        width={"100%"}
        height={"auto"}
        style={{ maxWidth: "480px" }}
      />
      <Typography
        variant="h2"
        color="text.secondary"
        fontSize={{
          xs: 30,
          sm: 40,
          md: 50,
          lg: 60,
        }}
      >
        {capitalize(city)} not found
      </Typography>
    </Box>
  );
};

export default NotFound;
