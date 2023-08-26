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
        flex: 1,
        //backgroundColor: "#1F2B3B", darkmode
        backgroundColor: "#DFD7BF",
        height: "min-content",
        minWidth: "161px",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="#808691" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          className="flex items-center gap-2  text-[#3F2305] /*text-white*/ font-bold"
        >
          <Icon sx={{ color: "#7599E0" }}>{icon}</Icon>
          {data} {unit}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardWeather;
