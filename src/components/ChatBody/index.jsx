import React, { useEffect, useRef } from "react";
import { db } from "../../services/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { Container } from "./style";
import Message from "../Message";

const ChatBot = ({ chatId }) => {
  const globalChatVerify = chatId == "di0CQidODXonTEGhZ7H1";

  const [messagesRes] = useCollection(
    db
      .collection(globalChatVerify ? "globalChat" : "chats")
      .doc(chatId)
      .collection("messages")
      .orderBy("timestamp", "asc")
  );

  const refBody = useRef("");

  useEffect(() => {
    if (refBody.current.scrollHeight > refBody.current.offsetHeight) {
      refBody.current.scrollTop =
        refBody.current.scrollHeight - refBody.current.offsetHeight;
    }
  }, [messagesRes]);

  return (
    <Container ref={refBody}>
      {messagesRes?.docs.map((message) => (
        <Message
          avatar={message.data().photoURL}
          globalChatVerify={globalChatVerify}
          key={message.id}
          userName={message.data().userName}
          user={message.data().user}
          message={{
            message: message.data().message,
            timestamp: message.data().timestamp?.toDate().getTime(),
          }}
        />
      ))}
    </Container>
  );
};

export default ChatBot;
