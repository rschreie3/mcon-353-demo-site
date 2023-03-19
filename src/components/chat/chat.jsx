import { useEffect, useState } from "react";
import { useInterval } from "../../hooks/use-interval";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

export const Chat = () => {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

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
        username: "class 2023",
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
    50000,
    currentChat && currentChat.id
  );

  return (
    <Box>
      <Typography
        variant="h3"
        align="center"
        sx={{
          margin: 2,
          fontFamily: "sans-serif",
          fontWeight: 700,
          letterSpacing: ".3rem",
        }}
      >
        Chat
      </Typography>

      <Grid container justifyContent="center">
        <div>
          {/* <h2>Chats</h2> */}
          <PopupState variant="popover" popupId="">
            {(popupState) => (
              <div>
                <Button variant="contained" {...bindTrigger(popupState)}>
                  Chats
                </Button>
                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  {chats.map((chat) => (
                    <div key={chat.id}>
                      <button onClick={() => setChat(chat)}>{chat.name}</button>
                    </div>
                  ))}
                </Popover>
              </div>
            )}
          </PopupState>
        </div>
        <div>
          <h2>{currentChat && currentChat.name} Messages</h2>
          <div>
            <input onInput={onMessageInput} value={inputMessage} />{" "}
            <button onClick={() => postMessage()}>POST</button>
          </div>
          <div>
            {messages.map((message) => (
              <div key={message.id}>
                {message.username}: {message.text}
              </div>
            ))}
          </div>
        </div>
      </Grid>
    </Box>
  );
};
