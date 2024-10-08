import styled from "styled-components";

export const Container = styled.div`
  border: 3px solid rgba(128, 128, 228, 0.388);
  padding: 1em 2em;
  margin-bottom: 10px;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
    border: 3px solid rgba(128, 128, 228, 0.88);
  }
`;
