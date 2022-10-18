import { IconButton, Stack, SwipeableDrawer } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import MainPage from "../../pages/MainPage/index";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import styles from "./styles/NavBar.module.css";
const NavBar = () => {
  const [toogleDrawer, setToogleDrawer] = useState(false);
  function handleClick() {
    setToogleDrawer(true);
  }
  function handleCloseClick() {
    setToogleDrawer(false);
  }

  return (
    <Stack
      alignItems={"center"}
      justifyContent={"space-evenly"}
      width={"100%"}
      bgcolor={"#00001E"}
      height={"15vh"}
      flexDirection={"row-reverse"}
    >
      <Box paddingRight={"5%"} height={"20%"}>
        <img height={"100%"} alt="Blockinar Logo" src="/blockinar.png" />
      </Box>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        width={{ sm: "20%", md: "50%" }}
      >
        <IconButton onClick={handleClick}>
          <MenuIcon color={"success"} />
        </IconButton>
        <SwipeableDrawer
          anchor="left"
          onOpen={handleClick}
          onClose={handleCloseClick}
          open={toogleDrawer}
        >
          <Stack
            flexDirection={"column"}
            justifyContent={"space-around"}
            height={"30vh"}
            alignItems={"center"}
            width={"30vw"}
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.activeClass : styles.inactiveClass
              }
              to={"/"}
              end
            >
              Rooms
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.activeClass : styles.inactiveClass
              }
              to={"/bookings"}
            >
              Bookings
            </NavLink>
          </Stack>
        </SwipeableDrawer>
      </Stack>
    </Stack>
  );
};

export default NavBar;
