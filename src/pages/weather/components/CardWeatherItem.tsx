import { Card, CardContent, Icon, Typography } from "@mui/material";

interface CardWeatherItemProps {
  data: number | string;
  title: string;
  icon: JSX.Element;
  unit: JSX.Element | string;
}

const CardWeatherItem = ({ data, title, icon, unit }: CardWeatherItemProps) => {
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
          color="text.secondary"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontWeight: "bold",
          }}
        >
          <Icon sx={{ color: "#7599E0" }}>{icon}</Icon>
          {data} {unit}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardWeatherItem;
