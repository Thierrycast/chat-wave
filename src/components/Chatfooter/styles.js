import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  height: 6.2rem;
  bottom: 0;
  width: 100%;
  padding: 1rem 2rem;
  background-color: ${theme.footerColor};
  display: flex;
  box-shadow: 0.2rem 0.1rem 0.3rem 0.1rem #0003;
  border-top: 0.1rem ${theme.borderColor} solid;

  svg {
    width: 2.5rem;
    height: 2.5rem;
    color: ${theme.svgColor};
  }

  @media only screen and (max-width: 600px) {
    position: fixed;
    bottom: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

export const Input = styled.input`
  background-color: ${theme.selectChatColor};
  padding: 1rem;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  width: 100%;
  box-shadow: inset 0 0 0.1rem 0.1rem #0003;
  color: ${theme.textColor};
`;
