import { useEffect, useState } from "react";
import { useInterval } from "../../hooks/use-interval";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { Input } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import { Stack } from "@mui/system";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Modal from "./Modal";

export const Chat = () => {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [username, setUsername] = useState("");

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  }));

  function getChats() {
    fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats")
      .then((response) => response.json())
      .then((data) => {
        console.log("chats:");
        console.log(data);

        setChats(data.Items);
      });
  }

  function setChat(chat) {
    setCurrentChat(chat);
    getMessages(chat.id);
  }

  function getMessages(chatId) {
    fetch(
      `https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats/${chatId}/messages`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("messages:");
        console.log(data);

        setMessages(data.Items);
      });
  }

  function postMessage(chat) {
    if (currentChat) {
      const message = {
        chatId: currentChat.id,
        username: username,
        text: inputMessage,
      };

      fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/messages", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

      setInputMessage("");
    } else {
      console.log("cannot post the message because current chat is null");
    }
  }

  function onMessageInput(event) {
    setInputMessage(event.target.value);
  }

  function onUsernameInput(event) {
    setUsername(event.target.value);
  }

  useEffect(() => {
    getChats();
  }, []);

  useInterval(
    (params) => {
      const chatId = params[0];
      if (chatId) {
        getMessages(chatId);
      }
    },
    1000,
    currentChat && currentChat.id
  );

  return (
    <Box>
      <Typography
        variant="h3"
        align="center"
        sx={{
          marginTop: 1,
          fontFamily: "sans-serif",
          fontWeight: 700,
          letterSpacing: ".3rem",
        }}
      >
        Chat
      </Typography>
      <Grid
        container
        justifyContent="center"
        rowSpacing={2}
        sx={{
          width: "100vh",
          margin: "auto",
        }}
      >
        <Grid item xs={2}>
          <PopupState variant="popover" popupId="">
            {(popupState) => (
              <div>
                <Button variant="contained" {...bindTrigger(popupState)}>
                  Chats
                </Button>
                <Popover
                  {...bindPopover(popupState)}
                  anchorPosition={{
                    top: 500,
                    left: 200,
                  }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  {chats.map((chat) => (
                    <div key={chat.id}>
                      <Button onClick={() => setChat(chat)}>{chat.name}</Button>
                    </div>
                  ))}
                </Popover>
              </div>
            )}
          </PopupState>
        </Grid>
        <Grid item xs={2}>
          <Modal />
        </Grid>
        <Grid item xs={6} align="right">
          <Input placeholder="Username" onInput={onUsernameInput} />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            height: "75vh",
            minWidth: "85vh",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 1,
            borderBottom: 1,
            borderColor: "grey.500",
            boxShadow: 1,
            padding: 2,
          }}
        >
          <Typography variant="h5" align="center" margin={1}>
            {currentChat && currentChat.name} Messages
          </Typography>{" "}
          <Stack
            direction="column-reverse"
            overflow="scroll"
            height="60vh"
            spacing={2}
          >
            {messages.map((message) => (
              <Item
                item
                key={message.id}
                sx={{
                  maxWidth: "30vh",
                }}
              >
                {message.username}: {message.text}
              </Item>
            ))}
          </Stack>
          <div align="center">
            <Input
              onInput={onMessageInput}
              value={inputMessage}
              sx={{
                minWidth: 350,
              }}
            />
            <IconButton
              onClick={() => postMessage()}
              variant="contained"
              size="small"
            >
              <SendIcon />
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};
