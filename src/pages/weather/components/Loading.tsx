import { Skeleton, Box } from "@mui/material";

const Loading = () => {
  return (
    <Box sx={{ display: "flex", gap: 2, height: "80vh" }}>
      <Skeleton
        sx={{ bgcolor: "grey.900", width: "30%", height: "80vh" }}
        variant="rectangular"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          height: "80vh",
          width: "30%",
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
        sx={{ bgcolor: "grey.900", width: "40%", height: "80vh" }}
        variant="rectangular"
      />
    </Box>
  );
};

export default Loading;
