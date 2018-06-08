import styled from 'styled-components';
import { Flex } from '../../theme/grid';
import {blue, red, charcoal, white} from '../../theme/variables';
import { Link } from  'react-router-dom';
import media from '../../theme/media';

export const NavigationContainer = styled(Flex)`
  position: fixed;
  right: 8.5em;
  top: 0.8em;
  z-index: 1;
  background-color: ${white};
  border-radius: 15px;
  @media ${media.tablet} {
    top: 0;
    font-size: .8em;
    position: fixed;
    justify-content: center;
  }
`;

export const NavItem = styled(Link)`
  margin-right: 15px;
  margin-left: 15px
  font-size: 1.5em;
  cursor: pointer;
  color: ${blue};
  position: relative;
  text-decoration: none;
  @media ${media.tablet} {
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
      background-color: ${charcoal};
      z-index: -1;
      transform: scale(1.3);
      border-radius: 25px;
    }
  }
  `;
  
  export const A = styled(Link)`
    margin-right: 15px;
    margin-left: 15px
    font-size: 1.5em;
    cursor: pointer;
    color: ${blue};
    position: relative;
    text-decoration: none;
    @media ${media.tablet} {
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
        background-color: ${charcoal};
        z-index: -1;
        transform: scale(1.3);
        border-radius: 25px;

      }
    }
  `;