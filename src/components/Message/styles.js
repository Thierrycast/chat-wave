import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div``;

export const Line = styled.div`
  margin: 1rem;
  display: flex;

  align-items: flex-end;
  gap: 1rem;

  div {
  }

  &.me {
    > div {
      background-color: ${theme.myMessageColor};
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 0rem;

      p {
        display: none;
      }
    }
    justify-content: right;
    flex-direction: row-reverse;
  }
`;

export const Avatar = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;

  @media only screen and (max-width: 600px) {
    width: 3rem;
    height: 3rem;
  }
`;

export const Content = styled.div`
  background-color: ${theme.messageColor};
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;

  display: flex;
  flex-direction: column;
  padding: 0.8rem;
  max-width: 60%;
`;

export const Message = styled.span`
  font-size: 1.4rem;
  margin: 0.5rem 4rem 1rem 0.5rem;
`;

export const MessageData = styled.span`
  font-size: 1.1rem;
  color: #999;
  text-align: right;
  height: 1.5rem;
  margin: -0.5rem 0.5rem 0;
`;

export const UserName = styled.p`
  color: ${theme.myMessageColor};
  font-size: 1.1rem;
  font-weight: 700;
`;
