import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', 'Proxima Nova', sans-serif;
    -webkit-font-smoothing: antialiased;
    margin: auto;
    width: 100%;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  p {
    color: ${({ theme }) => theme.p};
  }

  a:link {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    -webkit-transition: all .25s ease;
    transition: all .25s ease;
  }
  
  a:visited {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }

  .toggleButton {
    background: ${({ theme }) => theme.projectSquareBackground};
  }

  .displayBody {
    color: ${({ theme }) => theme.text};
  }

  .projectSquare {
    background-color: ${({ theme }) => theme.projectSquareBackground};
  }

  .overlay {
    background-color: ${({ theme }) => theme.overlayBackground};
  }
`;