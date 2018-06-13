import { injectGlobal } from 'styled-components';
import {white} from './variables'
import media from './media';
/*-eslint-disable */
injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Fjalla+One');

  body {
    font-family: 'Fjalla One', sans-serif;
    font-weight: bold;
    background-color: ${white};

    @media ${media.mobileS} {
      font-size: 12px;
    }
    @media ${media.tablet} {
      font-size: 20px;
    }
    @media ${media.tabletL} {
      font-size: 25px;
    }
    @media ${media.laptop} {
      font-size: 30px;
    }
    @media ${media.desktop} {
      font-size: 35px;
    }
    @media ${media.desktopL} {
      font-size: 50px;
    }
  }

  h1, h2, h3 {
    font-weight: normal;
  }
`