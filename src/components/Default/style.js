import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  background-color: ${theme.bodyColor};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;

  svg {
    width: 10rem;
    height: 10rem;
    color: ${theme.svgColor};
  }
`;
