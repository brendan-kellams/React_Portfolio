import styled from 'styled-components';
import media from '../../theme/media';
import { Flex } from '../../theme/grid';
import { red, charcoal } from '../../theme/variables';

export const ProjectContainer = styled(Flex)`
  @media ${media.mobileS} {
    flex-direction: column;
    width: 100%;

    h1.project, h1.project2 {
      text-align: center;
      margin-top: 30px;
    }

    p {
      margin-top: 10px;
      text-align: center;
      margin-left: 0px;
      pointer-events: none;
      line-height: 200%;
    }
  }
  @media ${media.tablet} {
    h1 {
      font-size: 45px;
    }
  }
  @media ${media.tabletL} {
    h1 {
      padding-top: 20px;
      font-size: 50px;
    }
  }
  
  @media ${media.laptop} {
    justify-content: flex-start;

    div.row {
      display: flex;
      flex-direction: row;
    }

    div.row2 {
      display: flex;
      direction: rtl;
      flex-direction: row;
      justify-content: flex-end;
    }

    p {
      padding: 10px;
      width: 70%;
    }

    h1.project {
      text-align: left;
      flex-direction: row;
    }

    h1.project2 {
      text-align: right;
    }
  }
  
  
  }
  
  
  h1 {
    @media ${media.laptop} {
      margin-top: 20px;
    }
  }

`;

export const ImageContainer = styled(Flex)`
  @media ${media.mobileS} {
    justify-content: center;
  }
  @media ${media.laptop} {
    justify-content: flex-start;
  }
`;

export const ImageContainer2 = styled(Flex)`
  @media ${media.mobileS} {
    justify-content: center;
  }
  @media ${media.laptop} {
    justify-content: flex-end;
  }
`;

export const ImageButton = styled(Flex)`
  @media ${media.mobileS} {
    cursor: pointer;
    overflow: hidden;
    display: inline-block;
    height: 100%;
    width: 100%;
    justify-content: center;
    top: 0;
    left: 0;
    border: 1px solid black;
    border-radius: 20px;   
  }  

  img {
    height: 100%;
    width: 100%;
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

export const ImageButton2 = styled(Flex)`
  @media ${media.mobileS} {
    cursor: pointer;
    overflow: hidden;
    display: inline-block;
    height: 100%;
    width: 100%;
    justify-content: center;
    top: 0;
    left: 0;
    border: 1px solid black;
    border-radius: 20px;
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




// export const ProjectContainer2 = styled(Flex) `
//   width: 20%;
//   display: inline;
//   @media ${media.tablet} {
  //     flex-direction: column;
  //     display: block;
  //     margin: auto;
  //     width: 90%;
  //     text-align: center;
  //   }

  //   h1 {
    //     text-align: right;
//     @media ${media.tablet} {
//       text-align: center;
//     }
//   }
//   p {
//     font-size: 30px;
//     margin-left: 0px;
//     pointer-events: none;
//     margin-top: 100px;
//     line-height: 200%;
//     @media ${media.tablet} {
//       margin-top: 20px;
//     }
//   }
// `;
