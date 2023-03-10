import React from "react";
import * as C from "./styles";
import { MdDonutLarge, MdChat, MdMoreVert } from "react-icons/md";
import * as EmailValidator from "email-validator";
import { auth, db } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

const SidebarHeader = ({ setUserChat }) => {
  const [user] = useAuthState(auth);
  const refChat = db
    .collection("chats")
    .where("users", "array-contains", user.email);
  const [chatsSnapshot] = useCollection(refChat);

  const handleCreateChat = () => {
    const emailinput = prompt("Escreva o e-mail desejado");

    if (!emailinput) return;

    if (!EmailValidator.validate(emailinput)) {
      return alert("E-mail invalido");
    } else if (emailinput === user.email) {
      return alert("insira um e-mail diferente do seu!");
    } else if (chatExists(emailinput)) {
      return alert("chat ja existe!");
    }

    db.collection("chats").add({
      users: [user.email, emailinput],
    });
  };

  const chatExists = (emailChat) => {
    return !!chatsSnapshot.docs.find(
      (chat) => chat.data().users.find((user) => user === emailChat)?.length > 0
    );
  };

  return (
    <C.Container>
      <C.Avatar
        src={user?.photoURL}
        onClick={() => [auth.signOut(), setUserChat(null)]}
      />
      <C.Optins>
        <MdDonutLarge />
        <MdChat onClick={handleCreateChat} />
        <MdMoreVert />
      </C.Optins>
    </C.Container>
  );
};

export default SidebarHeader;
