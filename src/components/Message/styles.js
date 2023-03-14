import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div``;

export const Line = styled.div`
  margin: 1rem;
  display: flex;

  div {
  }

  &.me {
    > div {
      background-color: ${theme.myMessageColor};
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 0rem;
    }
    justify-content: right;
  }
`;

export const Content = styled.div`
  background-color: ${theme.messageColor};
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;

  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  max-width: 80%;
`;

export const Message = styled.span`
  font-size: 1.4rem;
  margin: 0.5rem 4rem 0.5rem 0.5rem;
`;

export const MessageData = styled.span`
  font-size: 1.1rem;
  color: #999;
  text-align: right;
  height: 1.5rem;
  margin: -0.5rem 0.5rem 0;
`;
