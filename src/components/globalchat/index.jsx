import React from "react";
import * as C from "./styles";

const GlobalChat = ({ setUserChat, active }) => {
  const handleNewChat = () => {
    const userChat = {
      chatId: "di0CQidODXonTEGhZ7H1",
      name: "Global Chat",
      photoURL: "",
    };

    setUserChat(userChat);
  };

  return (
    <C.Container onClick={handleNewChat} className={active}>
      <C.Name>Global Chat</C.Name>
    </C.Container>
  );
};

export default GlobalChat;
