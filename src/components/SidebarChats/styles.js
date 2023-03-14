import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  height: calc(100vh - 6rem);
  overflow-y: auto;
  background-color: ${theme.sidebarColor};

  &::-webkit-scrollbar {
    width: 0.6rem;
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const Content = styled.div``;

export const Divider = styled.div`
  border-top: solid 0.1rem ${theme.borderColor};
`;
