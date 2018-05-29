import React from 'react';
import { charcoal, white, red } from '../../theme/variables';


const footerStyle = {
  backgroundColor: '#0e79b2',
  fontSize: "30px",
  color: "#F5F5F5",
  borderTop: "1px solid #F5F5F5",
  textAlign: "center",
  padding: "20px",
  paddingTop: "10px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "80px",
  width: "100%"
};

const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%"
};

export const Footer = function({ children }) {
  return (
    <div>
      <div style={phantomStyle} />
      <div style={footerStyle}>{children}</div>
    </div>
  );
}




