import React from "react";
import { auth } from "../../services/firebase";
import {
  Container,
  NameContent,
  Name,
  UserInfo,
  Avatar,
  Option,
} from "./styles";
import { MdPerson, MdKeyboardArrowRight } from "react-icons/md";

const ChatHeader = ({ photoURL, name, setUserChat, chatId }) => {
  const globalChatVerify = chatId == "di0CQidODXonTEGhZ7H1";

  return (
    <Container>
      <UserInfo>
        {!globalChatVerify && (
          <>
            {photoURL ? <Avatar src={photoURL} alt="Avatar" /> : <MdPerson />}
          </>
        )}
        <NameContent>
          <Name>{name}</Name>
        </NameContent>
      </UserInfo>
      <Option>
        <MdKeyboardArrowRight onClick={() => setUserChat(null)} />
      </Option>
    </Container>
  );
};

export default ChatHeader;
