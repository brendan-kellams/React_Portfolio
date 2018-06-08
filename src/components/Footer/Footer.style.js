import styled from 'styled-components';
import media from '../../theme/media';
import {blue, white} from '../../theme/variables';

export const FooterStyle = styled.div`
  background-color: ${blue};
  border-top: 1px solid ${white};
  color: ${white};
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  font-size: 30px;
  padding: 20px;
  padding-top: 10px;
  height: 110px;

  @media ${media.mobileS} {
    font-size: 13px;
    height: 28px;
    padding-left: 0;
    padding-top: 5px;
  }

  @media ${media.mobileL} {
    font-size: 15px;
    height: 35px;
    padding-left: 0;
  }
  @media ${media.tablet} {
    font-size: 23px;
    height: 55px;
  }
  @media ${media.laptop} {
    font-size: 20px;
    height: 60px;
  }
`;

export const Image = styled.img`
  height: 80px;
  width: 80px;


  @media ${media.mobileS} {
    height: 25px;
    width: 25px;
    padding: 2px;
  }
  @media ${media.mobileL} {
    height: 30px;
    width: 30px;
    padding: 2;
  }
  @media ${media.tablet} {
    height: 40px;
    width: 40px;
  }
  @media ${media.laptop} {
    height: 40px;
    width: 40px;
    padding: 5px;
  }
`;
