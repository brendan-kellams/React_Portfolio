import styled from 'styled-components';
import { charcoal } from '../../theme/variables';
import media from '../../theme/media';

export const Title = styled.h1`
  margin-top: 0;
  color: ${charcoal};

  ${media.tablet`
    text-align: center;
  `}
`;

export const Image = styled.img`
  border-radius: 25px;
`;
export const ImageContainer = styled.div`
  width: 500px;
  height: 500px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 25px;
  ${media.tablet`
    margin-left: 125px;
  `}
`;