import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  flex-shrink: 0;
`;
export const Page = styled.div<{ $active: boolean }>`
  width: 50px;
  height: 50px;
  background-color: ${({ $active }) =>
    $active ? "white" : "rgba(214, 24, 100, 0.8)"};
  color: ${({ $active }) => ($active ? "rgba(214, 24, 100, 0.8)" : "white")};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 4px solid
    ${({ $active }) => ($active ? "rgba(214, 24, 100, 0.8)" : "transparent")};
  font-weight: ${({ $active }) => ($active ? 700 : 400)};
`;
