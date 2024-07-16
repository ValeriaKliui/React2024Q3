import styled from "styled-components";
import CloseIcon from "@assets/icons/close.svg";

export const CloseButton = styled(CloseIcon)`
  width: 40px;
  height: 40px;
  cursor: pointer;
  fill: rgba(214, 24, 100, 0.8);
  align-self: flex-end;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 4px solid rgba(0, 123, 255, 0.4);
  padding-left: 2em;
`;
