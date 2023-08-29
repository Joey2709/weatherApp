import { Box, Card, CardContent, Icon, Typography } from "@mui/material";

interface CardWeatherProps {
  data?: number | string;
  title: string;
  icon: JSX.Element;
  unit: JSX.Element | string;
}

const CardWeather = ({ data, title, icon, unit }: CardWeatherProps) => {
  return (
    <Card
      sx={{
        flex: 1,
        backgroundColor: "primary.main",
        height: "min-content",
        minWidth: "161px",
        backgroundImage: "initial",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          className="flex items-center gap-2 font-bold"
          color="text.secondary"
        >
          <Icon sx={{ color: "#7599E0" }}>{icon}</Icon>
          {data} {unit}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardWeather;
