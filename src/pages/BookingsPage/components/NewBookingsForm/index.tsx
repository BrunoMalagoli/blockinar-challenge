import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import AddBookingForm from "./components/AddBookingForm";
const NewBookingsForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <>
      <Stack
        flexDirection={"row"}
        justifyContent={"center"}
        paddingRight={"2%"}
      >
        <Box marginY={"2%"}>
          <Button
            onClick={handleOpen}
            endIcon={<AddIcon />}
            variant="contained"
          >
            New Booking
          </Button>
        </Box>
      </Stack>
      <Modal open={isOpen} onClose={handleClose}>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          height={"100%"}
        >
          <Box
            height={"80%"}
            width={{ xs: "80%", sm: "75%", md: "70%" }}
            bgcolor={"white"}
            borderRadius={"5px"}
          >
            <Stack
              height={"100%"}
              justifyContent={"space-evenly"}
              width={"100%"}
            >
              <AddBookingForm />
              <Stack
                width={"100%"}
                flexDirection={"row"}
                justifyContent={"center"}
                paddingBottom={"8px"}
                alignItems={"flex-end"}
              >
                <Button variant="outlined" color="error" onClick={handleClose}>
                  Cancel
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Modal>
    </>
  );
};

export default NewBookingsForm;
