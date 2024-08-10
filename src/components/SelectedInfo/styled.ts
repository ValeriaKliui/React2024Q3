import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.primary_bright};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 2em;
  color: ${({ theme: { colors } }) => colors.light};
`;
