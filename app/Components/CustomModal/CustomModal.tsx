import { Box, Modal, SxProps, Slide } from "@mui/material";
import { Dispatch, ReactNode, SetStateAction } from "react";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  modalStyle?: SxProps;
}

export default function CustomModal({
  open,
  setOpen,
  children,
  modalStyle,
}: Props) {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <Box
          sx={{
            width: 500,
            bgcolor: "background.default",
            border: "2px solid background.default",
            p: 1,
            borderRadius: 2,
            outline: "none",
            ...modalStyle,
          }}
        >
          {children}
        </Box>
      </Slide>
    </Modal>
  );
}
