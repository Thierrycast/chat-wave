import React, { useState } from "react";
import * as C from "./styles";
import { MdSend } from "react-icons/md";
import { auth, db } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/compat/app";

const ChatFooter = ({ chatId }) => {
  const [user] = useAuthState(auth);
  const [message, setMessage] = useState("");

  console.log(user);

  const globalChatVerify = chatId == "di0CQidODXonTEGhZ7H1";

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    db.collection(globalChatVerify ? "globalChat" : "chats")
      .doc(chatId)
      .collection("messages")
      .add({
        message: message,
        userName: getAbbreviatedName(user.displayName),
        user: user.email,
        photoURL: user.photoURL,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

    setMessage("");
  };

  function getAbbreviatedName(fullName) {
    const nameArray = fullName.split(" ");
    const abbreviatedName =
      nameArray[0] + " " + nameArray[nameArray.length - 1];
    return abbreviatedName;
  }

  return (
    <C.Container>
      <C.Form onSubmit={handleSendMessage}>
        <C.Input
          placeholder="Mensagem"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <MdSend onClick={handleSendMessage} />
      </C.Form>
    </C.Container>
  );
};

export default ChatFooter;
