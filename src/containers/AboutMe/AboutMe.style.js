import styled from 'styled-components';
import { charcoal } from '../../theme/variables';
import media from '../../theme/media';
import { Flex } from '../../theme/grid';

export const Title = styled.h1`
  text-align: center;
  color: ${charcoal};

  @media ${media.mobileS} {
    font-size: 35px;
  }
  @media ${media.tablet} {
    font-size: 45px;
  }
`;

export const Image = styled.img`
  border-radius: 25px;

  @media ${media.mobileS} {
    height: 250px;
    width: 250px;
  }
  @media ${media.tablet} {
    height: 300px;
    width: 300px;
  }
  @media ${media.tabletL} {
    height: 350px;
    width: 350px;
  }

`;
export const ImageContainer = styled(Flex)`
  
`;

export const Bio = styled.div`
  @media ${media.mobileS} {
    p {
      line-height: 1.3em;
      text-align: center;
      font-size: 1em;
    }
  }
  @media ${media.mobileL} {
    p {
      font-size: 1.1em;
    }
  }
  @media ${media.tablet} {
    p {
      font-size: 1.5em;
    }
  }
  @media ${media.tabletL} {
    p {
      font-size: 1.8em;
    }
  }
`;

