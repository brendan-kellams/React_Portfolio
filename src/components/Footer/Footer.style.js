import styled from 'styled-components';
import media from '../../theme/media';
import {blue, white, charcoal} from '../../theme/variables';

export const FooterStyle = styled.div`
  background-color: ${blue};
  border-top: 2px solid ${charcoal};
  text-shadow: -1px 0 ${charcoal}, 0 1px ${charcoal}, 1px 0 ${charcoal}, 0 -1px ${charcoal};
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
  }
  @media ${media.tablet} {
    font-size: 20px;
    height: 55px;
  }
  @media ${media.tabletL} {
    font-size: 23px;
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
  @media ${media.tabletL} {
    height: 45px;
    width: 45px;
  }
`;
