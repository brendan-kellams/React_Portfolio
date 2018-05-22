import styled from 'styled-components';
import { red, charcoal } from './variables';

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

export const [H1, H2, H3, H4, H5, H6, P, BlockQuote, Code] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'blockquote', 'code']
 .map((tag) => styled(tag)`
  ${({ align }) => align && `text-align: ${align};`}
  ${({ textDecoration }) => textDecoration && `text-decoration: ${textDecoration};`}
 `)

