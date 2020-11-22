import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
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

  .displayBody {
    color: ${({ theme }) => theme.text};
  }

  .projectSquare, .toggleButton, .banner {
    background-color: ${({ theme }) => theme.projectSquareBackground};
  }

  .insightCard, .userPersonaCard {
    background-color: ${({ theme }) => theme.insightCardBackground};
  }

  .overlay, .userInfoRow {
    background-color: ${({ theme }) => theme.overlayBackground};
  }
`;