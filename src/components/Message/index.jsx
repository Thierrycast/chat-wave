import React from "react";
import * as C from "./styles";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";

const Message = ({ user, avatar, message, globalChatVerify, userName }) => {
  const [userLoggedIn] = useAuthState(auth);

  return (
    <C.Container>
      <C.Line className={userLoggedIn?.email === user ? "me" : ""}>
        {globalChatVerify && <C.Avatar src={avatar} />}

        <C.Content>
          {globalChatVerify && <C.UserName>{userName}</C.UserName>}
          <C.Message>{message.message}</C.Message>
          {/* <C.MessageData>
            {new Date(message?.timestamp).toLocaleString()}
          </C.MessageData> */}
        </C.Content>
      </C.Line>
    </C.Container>
  );
};

export default Message;
