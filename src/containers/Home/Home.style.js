import styled from 'styled-components';
import { white } from '../../theme/variables'
import media from '../../theme/media';

export const Logo = styled.div`
  width: 350px;
  height: 350px;
  algin-content: center;
  text-align: center;
  display: block;
  float:left;
  a {
    color: black
    text-decoration: none;
  }
${media.tablet`
  margin-left: 70px;
`}
`;

export const Row = styled.div`
  display: block;
  margin: auto;
  width: 70%;
`;

export const HeroImage = styled.div`
  height: 100vh;
  width: 100%;
  border-radius: 20px;
  background-image: url('${require('../../assets/images/Brendan.gif')}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  
  text-align: center;
  color: ${white};
  text-shadow: 2px 2px black;
  
  font-size: 2em;
  h2 {
    position: absolute;
    left: 38.5%;
    top: 15%;
  }

  h3 {
    position: absolute;
    left: 42%;
    top: 30%;
  }
  
  
  ${media.tablet`
    font-size: 1.5em;
    h2 {
      position: absolute;
      left: 21%;
      top: 20%;
    }

    h3 {
      position: absolute;
      left: 30%;
      top: 30%;
    }
  `}
`;


