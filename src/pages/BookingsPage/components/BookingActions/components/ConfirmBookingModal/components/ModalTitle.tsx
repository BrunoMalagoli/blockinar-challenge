import { Box, Stack } from "@mui/material";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

const ModalTitle = ({ children }: { children: ReactJSXElement }) => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      height={"50%"}
      width={"100%"}
    >
      <Box
        bgcolor={"#00001E"}
        textAlign={"center"}
        width={{ xs: "60%", md: "30%" }}
        borderRadius={"5px"}
      >
        {children}
      </Box>
    </Stack>
  );
};

export default ModalTitle;
