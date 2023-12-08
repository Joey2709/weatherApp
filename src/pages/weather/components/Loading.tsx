import { Skeleton, Box } from "@mui/material";

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        minHeight: "70vh",
        flexWrap: "wrap",
      }}
    >
      <Skeleton
        sx={{
          bgcolor: "grey.900",
          width: {
            xs: "100%",
            sm: "50%",
            md: "20%",
          },
          minWidth: {
            md: "447px",
          },
          height: "70vh",
          flex: "1 auto",
        }}
        variant="rectangular"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          height: "70vh",
          width: {
            xs: "100%",
            lg: "50%",
            xl: "30%",
          },
        }}
      >
        <Skeleton
          sx={{ bgcolor: "grey.900", height: "40vh" }}
          variant="rectangular"
        />
        <Skeleton
          sx={{ bgcolor: "grey.900", height: "30vh" }}
          variant="rectangular"
        />
      </Box>
      <Skeleton
        sx={{
          bgcolor: "grey.900",
          flex: "1 auto",
          width: {
            lg: "30%",
            sm: "100%",
          },
          minWidth: {
            lg: "546px",
          },
          height: "70vh",
        }}
        variant="rectangular"
      />
    </Box>
  );
};

export default Loading;
