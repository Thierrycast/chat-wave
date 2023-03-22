import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  flex: 1;
  background-color: ${theme.bodyColor};
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.6rem;
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background-color: rgba(0, 0, 0, 0.2);
  }

  @media only screen and (max-width: 600px) {
    margin-top: 6rem;
    margin-bottom: 6.2rem;
  }
`;
