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
      <img src={NotFoundSVG} alt="Not Found" width={400} />
      <Typography variant="h2" color="text.secondary">
        {capitalize(city)} not found
      </Typography>
    </Box>
  );
};

export default NotFound;
