import { CircularProgress, Stack } from "@mui/material";

const LoaderSpinner = () => {
  return (
    <Stack
      height={"100vh"}
      width={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <CircularProgress />
    </Stack>
  );
};

export default LoaderSpinner;
