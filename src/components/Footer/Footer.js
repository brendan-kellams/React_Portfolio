import React, { Component } from 'react';
import { FooterStyle, Image } from './Footer.style';
import { Row } from './Footer.style';


class Footer extends Component {
  render() {
    return (
      <FooterStyle>
        <Row>
          <span>Email: brendan.kellams@gmail.com</span>
        </Row>
        <Row>
          <a href='https://www.linkedin.com/in/brendan-kellams/' target='_blank' rel='noopener noreferrer'>
            <Image src={require('../../assets/images/linkedin.png')} alt='linkedin' />
          </a>
          <a href='https://github.com/brendan-kellams' target='_blank' rel='noopener noreferrer'>
            <Image src={require('../../assets/images/github.png')} alt='github' />
          </a>
          <a href='https://www.instagram.com/redmangoin/?hl=en' target='_blank' rel='noopener noreferrer'>
            <Image src={require('../../assets/images/instagram.png')} alt='instagram' />
          </a>
          <a href='https://www.facebook.com/brendan.kellams' target='_blank' rel='noopener noreferrer'>
            <Image src={require('../../assets/images/facebook.png')} alt='facebook' />
          </a>
        </Row>
      </FooterStyle>
    );
  }
}

export default Footer;




