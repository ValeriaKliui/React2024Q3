import styled from "styled-components";

export const InputStyled = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.25);
  padding: 5px 15px;
  border-radius: 25px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;

  &[type="text"] {
    width: 26em;
  }

  &::placeholder {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
`;
