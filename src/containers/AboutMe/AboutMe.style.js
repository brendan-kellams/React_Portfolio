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
`;

export const Image = styled.img`
  border-radius: 25px;

  @media ${media.mobileS} {
    height: 250px;
    width: 250px;
  }
  @media ${media.laptop} {
    height: 350px;
    width: 350px;
  }

`;
export const ImageContainer = styled(Flex)`
  
`;