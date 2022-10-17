import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const NavBar = () => {
  return (
    <Stack
      alignItems={"flex-end"}
      justifyContent={"center"}
      width={"100%"}
      bgcolor={"#00001E"}
      height={"15vh"}
    >
      <Box paddingRight={"5%"} height={"30%"}>
        <img height={"100%"} alt="Blockinar Logo" src="/blockinar.png" />
      </Box>
    </Stack>
  );
};

export default NavBar;
