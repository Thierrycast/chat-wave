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
  z-index: 1;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 3rem;
    height: 3rem;
    background-color: #ccc;
    border-radius: 50%;
    margin-right: 1rem;
    min-width: fit-content;
  }
`;

export const NameContent = styled.div`
  display: grid;
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

export const Option = styled.div`
  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: ${theme.svgColor};
    cursor: pointer;
  }
`;
