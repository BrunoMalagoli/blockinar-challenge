import { Box, Button, Modal, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import AddBookingForm from "./components/AddBookingForm";
import EditIcon from "@mui/icons-material/Edit";
import EditBookingsModal from "./components/EditBookingsModal";
const BookingActions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const handleEditOpen = () => setIsOpenEdit(true);
  const handleEditClose = () => setIsOpenEdit(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <>
      <Stack
        flexDirection={"row"}
        justifyContent={"center"}
        paddingRight={"2%"}
      >
        <Stack
          width={{ xs: "80%", sm: "60%", md: "50%" }}
          flexDirection={"row"}
          justifyContent={"space-between"}
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
          <Box marginY={"2%"}>
            <Button
              onClick={handleEditOpen}
              endIcon={<EditIcon />}
              variant="contained"
              color="success"
            >
              Edit booking
            </Button>
          </Box>
        </Stack>
      </Stack>
      {/* Edit Booking Modal */}
      <Modal open={isOpenEdit} onClose={handleEditClose}>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          height={"100%"}
        >
          <Box
            width={{ xs: "100%", sm: "75%", md: "70%" }}
            bgcolor={"white"}
            borderRadius={"5px"}
            height={"90%"}
          >
            <Stack height={"100%"}>
              <Stack
                height={"100%"}
                justifyContent={"space-evenly"}
                width={"100%"}
              >
                <EditBookingsModal />
                <Stack
                  width={"100%"}
                  flexDirection={"row"}
                  justifyContent={"center"}
                  paddingBottom={"8px"}
                  alignItems={"flex-end"}
                >
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={handleEditClose}
                  >
                    Cancel
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Modal>
      {/* Add Booking Modal */}
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

export default BookingActions;
