import { injectGlobal } from 'styled-components';
import {white} from './variables'
/*-eslint-disable */
injectGlobal`
// @import url('https://fonts.googleapis.com/css?family=Fjalla+One');

  body {
    // font-family: 'Fjalla One', sans-serif;
    font-size: 30px;
    font-weight: bold;
    background-color: ${white};
  }

  h1, h2, h3 {
    font-weight: normal;
  }
`