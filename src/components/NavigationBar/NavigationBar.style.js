import styled from 'styled-components';
import { Flex } from '../../theme/grid';
import {blue, red, charcoal, white} from '../../theme/variables';
import { Link } from  'react-router-dom';
import media from '../../theme/media';

export const NavigationContainer = styled(Flex)`
  @media ${media.mobileS} {
    right: 0;
    left: 0;
    position: fixed;
    justify-content: center;
    padding-bottom: 10px;
    padding-top: 10px;
    border: 1.5px solid ${charcoal};
  }
  @media ${media.tablet} {
    border: 2px solid ${charcoal};    
  }
  @media ${media.laptopL} {
    width: 34vw;
    left: 30em;
    border: 2px solid ${charcoal};    
  }
  @media ${media.desktop} {
    width: 32vw;
    left: 3em;
    border: 2px solid ${charcoal};    
  }
  position: fixed;
  right: 8.5em;
  top: 0.8em;
  z-index: 1;
  background-color: ${blue};
  border-radius: 15px;

`;

export const NavItem = styled(Link)`
  margin-right: 15px;
  margin-left: 15px
  font-size: 1.5em;
  cursor: pointer;
  color: ${white};
  position: relative;
  text-decoration: none;
  text-shadow: -1px 0 ${charcoal}, 0 1px ${charcoal}, 1px 0 ${charcoal}, 0 -1px ${charcoal};
  @media ${media.mobileS} {
    font-size: 1.3em;
  }
  @media ${media.mobileL} {
    font-size: 1.8em;
  }
  @media ${media.tablet} {
  font-size: 2em;
  }
  @media ${media.laptopL} {
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
  