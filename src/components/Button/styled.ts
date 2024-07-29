import styled from 'styled-components';

export const ButtonStyled = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px 16px;
  background-color: ${({ theme: { colors } }) => colors.secondary};
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.light};
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-style: normal;
`;
