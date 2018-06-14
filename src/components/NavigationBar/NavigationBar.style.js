import styled from 'styled-components';
import { Flex } from '../../theme/grid';
import {blue, red, charcoal, white} from '../../theme/variables';
import { Link } from  'react-router-dom';
import media from '../../theme/media';


export const NavigationContainer = styled(Flex)`
  @media ${media.mobileS} {
    right: 0;
    left: 0;
    top: 0.8em;
    position: fixed;
    justify-content: center;
    background-color: ${blue};
    border-radius: 15px;
    padding-bottom: 10px;
    padding-top: 10px;
    border: 1.5px solid ${charcoal};
    z-index: 1;
  }
  @media ${media.tablet} {
    border: 2px solid ${charcoal};    
  }
  @media ${media.laptop} {
    width: 38vw;
    left: 24.5em;    
  }
  @media ${media.desktop} {
    width: 38vw;
    left: 24.3em;  
  }
  @media ${media.desktopL} {
    width: 38vw;
    left: 24.3em;  
  }
`;

export const NavItem = styled(Link)`
  @media ${media.mobileS} {
    margin-right: 15px;
    margin-left: 15px
    font-size: 1em;
    cursor: pointer;
    color: ${white};
    position: relative;
    text-decoration: none;
    text-shadow: -1px 0 ${charcoal}, 0 1px ${charcoal}, 1px 0 ${charcoal}, 0 -1px ${charcoal};
    font-size: 1.3em;
  }
  @media ${media.mobileL} {
    font-size: 1.8em;
  }
  @media ${media.tablet} {
  font-size: 2em;
  }
  @media ${media.laptop} {
    font-size: 1em;
  }
  
  &:hover {
    color: ${red};
    &:after {
      content: ' ';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: ${white};
      z-index: -1;
      transform: scale(1.3);
      border-radius: 10px;
    }
  }
  `;
  