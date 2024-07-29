import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2em;
  background-color: ${({ theme: { colors } }) => colors.primary};
`;
