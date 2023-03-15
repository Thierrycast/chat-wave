import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 2rem;
  cursor: pointer;

  color: ${theme.headerColor};

  &:hover {
    transition: 0.2s;
    background-color: ${theme.selectChatColor};
  }

  &.active {
    background-color: ${theme.selectChatColor};
  }
`;

export const Name = styled.span`
  font-size: 1.8rem;
`;
