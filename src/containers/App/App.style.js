import styled from 'styled-components';
import { white } from '../../theme/variables';
import { Flex } from '../../theme/grid';
import media from '../../theme/media';

export const Background = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  
  background-image: url(${require('../../assets/images/BK-logo.png')});
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: .5;
  background-color: ${white};
  z-index: -1;

  body {
    background-color: ${white};
  }
`;

export const App = styled.div`
  div.header {
    @media ${media.laptopL} {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
  }
  }
`;