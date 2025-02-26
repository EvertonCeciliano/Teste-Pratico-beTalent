import { createGlobalStyle } from 'styled-components';

import HelveticaNeueRegular from '../assets/fonts/HelveticaNeue-Regular.woff2';
import HelveticaNeueMedium from '../assets/fonts/HelveticaNeue-Medium.woff2';

export const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Helvetica Neue';
    src: url(${HelveticaNeueRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Helvetica Neue';
    src: url(${HelveticaNeueMedium}) format('woff2');
    font-weight: 500;
    font-style: normal;
  }
`; 