import React from "react";
import * as C from "./styles";

const GlobalChat = ({ setUserChat, userChat }) => {
  const handleNewChat = () => {
    const newUserChat = {
      chatId: "di0CQidODXonTEGhZ7H1",
      name: "Global Chat",
      photoURL: "",
    };

    setUserChat(newUserChat);
  };

  return (
    <C.Container
      onClick={handleNewChat}
      className={userChat?.chatId === "di0CQidODXonTEGhZ7H1" ? "active" : ""}
    >
      <C.Name>Global Chat</C.Name>
    </C.Container>
  );
};

export default GlobalChat;
