import styled from "styled-components";
import CloseIcon from "@assets/icons/close.svg";

export const CloseButton = styled(CloseIcon)`
  width: 40px;
  height: 40px;
  cursor: pointer;
  fill: ${({ theme: { colors } }) => colors.secondary};
  align-self: flex-end;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 4px solid ${({ theme: { colors } }) => colors.primary};
  padding-left: 2em;
  gap: 2em;
`;
