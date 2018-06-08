import styled from 'styled-components';


export const [H1, H2, H3, H4, H5, H6, P, BlockQuote, Code] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'blockquote', 'code']
 .map((tag) => styled(tag)`
  ${({ align }) => align && `text-align: ${align};`}
  ${({ textDecoration }) => textDecoration && `text-decoration: ${textDecoration};`}
 `)

