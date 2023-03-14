import React from "react";
import ChatHeader from "../ChatHeader";
import ChatBody from "../ChatBody";
import Chatfooter from "../Chatfooter";
import Default from "../Default";

import { Container } from "./styles";

const Chat = ({ userChat, setUserChat }) => {
  if (!userChat) {
    return <Default />;
  }

  return (
    <Container>
      <ChatHeader
        photoURL={userChat?.photoURL}
        name={userChat?.name}
        setUserChat={setUserChat}
      />
      <ChatBody chatId={userChat?.chatId} />
      <Chatfooter chatId={userChat?.chatId} />
    </Container>
  );
};

export default Chat;
