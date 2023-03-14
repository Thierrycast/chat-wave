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
import { MdPerson, MdOutlineExitToApp } from "react-icons/md";

const ChatHeader = ({ photoURL, name, setUserChat }) => {
  return (
    <Container>
      <UserInfo>
        {photoURL ? <Avatar src={photoURL} alt="Avatar" /> : <MdPerson />}
        <NameContent>
          <Name>{name}</Name>
        </NameContent>
      </UserInfo>
      <Option>
        <MdOutlineExitToApp
          onClick={() => [auth.signOut(), setUserChat(null)]}
        />
      </Option>
    </Container>
  );
};

export default ChatHeader;
