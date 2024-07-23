import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 2em);
    padding: 0 0 2em 0;
  }

  .text_primary {
    color: rgba(0, 123, 255, 1);
  }

  .text_bold {
    font-weight: 700;
  }
`;
