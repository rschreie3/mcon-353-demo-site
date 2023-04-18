import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { Input } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [input, setInput] = React.useState("");
  const [chats, setChats] = React.useState([]);

  const onInput = (event) => {
    setInput(event.target.value);
  };

  function addChat() {
    const chat = {
      name: input,
    };

    fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(chat),
    });

    setInput("");
  }

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          width: "20vh",
        }}
      >
        <AddIcon />
        New Chat
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Input
            placeholder="Enter new chat name..."
            onInput={onInput}
            value={input}
          />
          <IconButton onClick={() => addChat()}>
            <AddIcon />
          </IconButton>
        </Box>
      </Modal>
    </div>
  );
}
