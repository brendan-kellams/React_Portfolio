import { injectGlobal } from 'styled-components';
import {white} from './variables'
import media from './media';
/*-eslint-disable */
injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Fjalla+One');

  body {
    font-family: 'Fjalla One', sans-serif;
    background-color: ${white};
    
    p {
      @media ${media.mobileS} {
        font-size: 15px;
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
  }

`;