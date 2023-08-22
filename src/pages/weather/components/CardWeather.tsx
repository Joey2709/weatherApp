import { Card, CardContent, Icon, Typography } from "@mui/material";

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
        width: "45%",
        backgroundColor: "#FCFBFC",
        height: "min-content",
        minWidth: "161px",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          className="flex items-center gap-2 text-[#0B2447] font-bold"
        >
          <Icon sx={{ color: "#7599E0" }}>{icon}</Icon>
          {data} {unit}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardWeather;
