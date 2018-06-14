import styled from 'styled-components';
import { white } from '../../theme/variables'
import media from '../../theme/media';
import { Flex } from '../../theme/grid';

export const Logo = styled(Flex)`
  @media ${media.mobileS} {
    width: 100%;
    height: auto;
    margin: 0 auto;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    text-align: center;

    img {
      width: 50%;
      height: auto;
    }
    
    h2 {
      text-align: center;
    }
    h3 {
      text-align: center;
    }
    a {
      color: black
      text-decoration: none;
    }
  }

  @media ${media.tabletL} {
    img {
      width: 70%;
      height: auto;
    }
    h3 {
      font-size: 25px;
      text-align: center;
    }
  }

  @media ${media.laptop} {
    img {
      width: 75%;
      padding: 30px;
    }
  }
  `;
  
  export const Rows = styled(Flex)`
    flex-direction: column;
    align-content: center;
    justify-content: center;  
    
    @media ${media.tablet} {
      flex-direction: row;
      align-content: center;
      justify-content: center;
      margin-bottom: 60px;
    }
`;

export const HeroImage = styled.div`
  @media ${media.mobileS} {
    margin: 0;
    margin-top:12px;
    width: 100%;
    height: 66.67vh;
    border-radius: 20px;
    background-image: url('${require('../../assets/images/Brendan.gif')}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
    
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    
    text-align: center;
    color: ${white};
    text-shadow: 2px 2px black;
    font-size: 2em;
    
    h2 {
      margin-bottom: 0;
      }
    }
  }

  @media ${media.mobileL} {
    margin-top: 20px;
  }
  @media ${media.tablet} {
    margin-top: 30px;
  }
  @media ${media.laptop} {
    margin-top: 0px;
    height: 100vh
  }

  
`;


