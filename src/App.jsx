import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./services/firebase";
import Login from "./components/Login";
import Loading from "./components/Loading";
import Sidebar from "./components/Sidebar";
import { Container } from "./styles/app";
import Chat from "./components/Chat";

import firebase from "firebase/compat/app";

function App() {
  const [user, loading] = useAuthState(auth);
  const [userChat, setUserChat] = useState(null);

  const chatId = "di0CQidODXonTEGhZ7H1";

  useEffect(() => {
    if (user) {
      const userRef = db.collection("users").doc(user.uid);

      userRef
        .set({
          email: user.email,
          photoURL: user.photoURL,
        })
        .catch((error) => {
          console.error("Erro ao atualizar informações do usuário:", error);
          alert(
            "Não foi possível atualizar suas informações. Tente novamente mais tarde."
          );
        });

      const chatRef = db.collection("globalChat").doc(chatId);
      chatRef
        .update({
          users: firebase.firestore.FieldValue.arrayUnion(user.email),
        })
        .catch((error) => {
          console.error("Erro ao adicionar usuário ao chat:", error);
          alert(
            "Não foi possível adicionar você ao chat. Tente novamente mais tarde."
          );
        });
    }
  }, [user]);

  if (loading) return <Loading />;

  if (!user) return <Login />;

  return (
    <Container>
      <Sidebar setUserChat={setUserChat} userChat={userChat} />
      <Chat userChat={userChat} setUserChat={setUserChat} />
    </Container>
  );
}

export default App;
