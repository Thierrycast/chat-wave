import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  height: 6rem;
  background-color: ${theme.headerColor};
  padding: 1rem 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0 0.1rem 0.2rem #0003;
`;

export const Avatar = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  cursor: pointer;
  border-radius: 50%;
`;

export const Optins = styled.div`
  display: flex;
  gap: 1rem;

  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: ${theme.svgColor};
    cursor: pointer;
  }
`;
