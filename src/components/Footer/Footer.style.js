import { charcoal, white, red } from '../../theme/variables';
import styled from 'styled-components';
import { Flex } from '../../theme/grid';


export const footerStyle = styled(Flex)`
  background-color: ${charcoal};
  font-size: 20px;
  color: ${white};
  border-top: 1px solid ${red};
  text-align: center;
  padding: 20px;
  postion: fixed;
  left: 0;
  bottom: 0;
  height: 50px;
  width: 100%;
`;


export const phantomStyle = styled(Flex)`
  display: block;
  padding: 20px;
  height: 50px;
  width: 100%;
`;
