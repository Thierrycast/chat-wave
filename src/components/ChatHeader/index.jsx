import React from "react";
import {
  Container,
  NameContent,
  Name,
  UserInfo,
  Avatar,
  Option,
} from "./styles";
import { MdPerson, MdMoreVert, MdSearch } from "react-icons/md";

const ChatHeader = ({ photoURL, name }) => {
  return (
    <Container>
      <UserInfo>
        {photoURL ? <Avatar src={photoURL} alt="Avatar" /> : <MdPerson />}
        <NameContent>
          <Name>{name}</Name>
        </NameContent>
      </UserInfo>
      <Option>
        <MdSearch />
        <MdMoreVert />
      </Option>
    </Container>
  );
};

export default ChatHeader;
