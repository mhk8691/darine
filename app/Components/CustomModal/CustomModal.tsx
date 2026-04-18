import { Box, Modal, SxProps } from "@mui/material";
import { keyframes } from "@mui/system";
import { Dispatch, ReactNode, SetStateAction } from "react";

const slideUp = keyframes`
  from {
    transform: translate(-50%, 100%);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`;

const style: SxProps = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.default",
  border: "2px solid background.default",
  p: 1,
  animation: `${slideUp} 0.3s ease-out`,
};

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  modalStyle?: SxProps;
}

export default function CustomModal({ open, setOpen, children,modalStyle }: Props) {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style, ...modalStyle }}>{children}</Box>
    </Modal>
  );
}
