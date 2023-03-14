import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 1.5rem 2rem;
  cursor: pointer;

  background-color: red;

  &:hover {
    transition: 0.2s;
    background-color: ${theme.selectChatColor};
  }

  svg {
    width: 3rem;
    height: 3rem;
    background-color: #ccc;
    border-radius: 50%;
    margin-right: 1rem;
    min-width: fit-content;
  }

  &.active {
    background-color: red;
  }
`;

export const Name = styled.span`
  font-size: 1.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 1rem;
  min-width: fit-content;
`;
