import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 62.5%;
  }

  body {
    height: 100%;
    background: linear-gradient(
      180deg, 
      ${({ theme }) => theme.COLORS.BACKGROUND_1} 0%, 
      ${({ theme }) => theme.COLORS.BACKGROUND_2}  50%, 
      ${({ theme }) => theme.COLORS.BACKGROUND_3}  100%);
    color: ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    outline: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }
  button:hover, a:hover {
    filter: brightness(0.9);
  }
`;