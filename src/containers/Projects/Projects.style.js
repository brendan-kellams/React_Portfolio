import styled from 'styled-components';
import media from '../../theme/media';
import { Relative, Flex } from '../../theme/grid';
import { red, charcoal } from '../../theme/variables';

export const ImageButton = styled.div`
  cursor: pointer;
  overflow: hidden;
  display: inline-block;
  height: 442px;
  float: left;
  border: 1px solid black;
  border-radius: 20px;
  margin-right: 80px;

  @media ${media.tablet} {
    margin-left:15px;
  }

  & > img {
    transition: transform .3s;
  }
  &:hover {
    & > img {
        transform: scale(1.3);
      }
    }
`;

export const ImageButton2 = styled.div`
  cursor: pointer;
  overflow: hidden;
  display: inline-block;
  height: 442px;
  float: right;
  border: 1px solid black;
  margin-left: 20px;
  border-radius: 20px;
  
  
  @media ${media.tablet} {
    margin-right:15px;
  }
  
  & > img {
    transition: transform .3s;
  }
  &:hover {
    & > img {
      transform: scale(1.3);
    }
  }
`;



export const ImageContainer = styled(Relative) `
  width: 100%;
  @media ${media.tablet} {
    width: 100%;
  }
  flex-shrink: 0;
  flex-grow: 0;  
`;
export const ProjectContainer2 = styled(Flex) `
  width: 20%;
  display: inline;
  @media ${media.tablet} {
    flex-direction: column;
    display: block;
    margin: auto;
    width: 90%;
    text-align: center;
  }

  h1 {
    text-align: right;
    @media ${media.tablet} {
      text-align: center;
    }
  }
  p {
    font-size: 30px;
    margin-left: 0px;
    pointer-events: none;
    margin-top: 100px;
    line-height: 200%;
    @media ${media.tablet} {
      margin-top: 20px;
    }
  }
`;
export const ProjectContainer = styled(Flex) `
  width: 20%;
  display: inline;
  @media ${media.tablet} {
    flex-direction: column;
    display: block;
    width: 100%;
  }
  p {
    @media ${media.tablet} {
      margin-top: 10px;
    }    
    font-size: 30px;
    margin-left: 0px;
    pointer-events: none;
    margin-top: 100px;
    line-height: 200%;
  }
`;
export const A = styled.a`
  color: ${charcoal};
  text-decoration: none;
  position: relative

  &:after {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 10%;
    width: 100%;
    background-color: ${charcoal};
    z-index:-1;
    transition: height .1s, background-color .1s;
  }

  &:hover:after {
    height: 40%;
    background-color: ${red};
  }
`;

