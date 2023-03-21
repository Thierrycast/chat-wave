import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  transition: 0.5s;
  outline: none;
  font-size: 1.4rem;
  padding: 1.4rem 1.8rem;
  cursor: pointer;

  font-weight: 700;
  color: ${theme.headerColor};

  border: 1px solid transparent;

  border-radius: 3rem;
  margin-top: 10rem;

  &:hover {
    border: 1px solid gray;
  }
`;

export const Card = styled.div`
  height: 40rem;
  width: 35rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  padding: 6rem;

  background-color: ${theme.headerColor};
  border-radius: 2rem;

  div {
    text-align: center;

    p {
      font-size: 1.2rem;
    }

    h1 {
      font-size: 2.8rem;
    }
  }
`;
