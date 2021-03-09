import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    padding-top: 5rem;
    padding-bottom: 5rem;

    .btn:disabled {
      cursor: not-allowed;
      pointer-events: all !important;
    }
  }
`;
