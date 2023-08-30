import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    a{
      text-decoration: none;
    }
  }

  .modal-enter {
    opacity: 0;
    transform: scale(0.95);
  }

  .modal-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 300ms ease-in, transform 300ms ease-in;
  }

  .modal-exit {
    opacity: 1;
  }

  .modal-exit-active {
    opacity: 0;
    transition: opacity 300ms ease-out;
  }
`;

export default GlobalStyles;
