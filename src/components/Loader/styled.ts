import styled, { keyframes } from 'styled-components';

const rotation = keyframes`  
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}`;

export const LoaderStyled = styled.span`
  margin: 0 auto;
  display: block;
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: ${({ theme: { colors } }) =>
    colors.primary_bright};
  border-radius: 50%;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;
