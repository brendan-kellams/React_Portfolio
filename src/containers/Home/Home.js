import React, { Component } from 'react';
import { Container } from '../../theme/grid';
import App from '../App/App';
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Flip'
import { H2 } from '../../theme/types'

import {
  HeroImage, Logo, Row,
} from './Home.style';

import WhenInView from '../../components/WhenInView/WhenInView'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'
import { Footer } from '../../components/Footer/Footer';


export default class Home extends Component {

  render() {
    return (
      <div>
        <App>
          <ScrollToTop />
          <Container>
            <HeroImage>
              <h2>Brendan Kellams</h2>
              <h3>Wed Developer</h3>
            </HeroImage>
            <br />
            <WhenInView>
              {({ isInView }) =>
                <Fade left>
                  <H2 align='center'>
                    Hello Everyone!  Welcome to my portfolio!  This portfolio was built all in React.js
                    and I'm excited to share it with all of you!  I enjoy making things that will make people happy.
                    Whether it is music, food, computers, or websites, I love to do my part to put a smile on someone's
                    face.
                </H2>
                </Fade>
              }
            </WhenInView>
            <WhenInView>
              {({ isInView }) =>
                <Fade right>
                  <H2 align='center'>
                    Here are some of the technologies that I use in my web development.
                </H2>
                </Fade>
              }
            </WhenInView>
            <br />
            <Row>
              <WhenInView>
                {({ isInView }) =>
                  <Flip right>
                    <Logo>
                      <a style={{ textDecoration: 'none' }} href='https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' target='_blank' rel='noopener noreferrer'>
                        <img src={require('../../assets/images/HTML5.png')} alt="html" />
                        <h3>HTML5</h3>
                      </a>
                    </Logo>
                  </Flip>
                }
              </WhenInView>
              <WhenInView>
                {({ isInView }) =>
                  <Flip left>
                    <Logo>
                      <a style={{ textDecoration: 'none' }} href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3' target='_blank' rel='noopener noreferrer'>
                        <img src={require('../../assets/images/CSS3.png')} alt="css" />
                        <h3>CSS3</h3>
                      </a>
                    </Logo>
                  </Flip>
                }
              </WhenInView>
              <WhenInView>
                {({ isInView }) =>
                  <Flip right>
                    <Logo>
                      <a style={{ textDecoration: 'none' }} href='https://www.javascript.com/' target='_blank' rel='noopener noreferrer'>
                        <img src={require('../../assets/images/javascript.png')} alt="javascript" />
                        <h3>Javascript</h3>
                      </a>
                    </Logo>
                  </Flip>
                }
              </WhenInView>
              <WhenInView>
                {({ isInView }) =>
                  <Flip left>
                    <Logo>
                      <a style={{ textDecoration: 'none' }} href='https://jquery.com/' target='_blank' rel='noopener noreferrer'>
                        <img src={require('../../assets/images/JQuery.png')} alt="jquery" />
                        <h3>JQuery</h3>
                      </a>
                    </Logo>
                  </Flip>
                }
              </WhenInView>
            </Row>
            <br />
            <Row>
              <WhenInView>
                {({ isInView }) =>
                  <Flip right>
                    <Logo>
                      <a style={{ textDecoration: 'none' }} href='https://reactjs.org/' target='_blank' rel='noopener noreferrer'>
                        <img src={require('../../assets/images/React.png')} alt="react" />
                        <h3>React.js</h3>
                      </a>
                    </Logo>
                  </Flip>
                }
              </WhenInView>
              <WhenInView>
                {({ isInView }) =>
                  <Flip left>
                    <Logo>
                      <a style={{ textDecoration: 'none' }} href='https://nodejs.org/en/' target='_blank' rel='noopener noreferrer'>
                        <img src={require('../../assets/images/Node.png')} alt="node" />
                        <h3>Node.js</h3>
                      </a>
                    </Logo>
                  </Flip>
                }
              </WhenInView>
              <WhenInView>
                {({ isInView }) =>
                  <Flip right>
                    <Logo>
                      <a style={{ textDecoration: 'none' }} href='https://www.mysql.com/' target='_blank' rel='noopener noreferrer'>
                        <img src={require('../../assets/images/MySQL.png')} alt="mysql" />
                        <h3>MySQL</h3>
                      </a>
                    </Logo>
                  </Flip>
                }
              </WhenInView>
              <WhenInView>
                {({ isInView }) =>
                  <Flip left>
                    <Logo>
                      <a style={{ textDecoration: 'none' }} href='https://git-scm.com/' target='_blank' rel='noopener noreferrer'>
                        <img src={require('../../assets/images/Git.png')} alt="git" />
                        <h3>Git</h3>
                      </a>
                    </Logo>
                  </Flip>
                }
              </WhenInView>
            </Row>
          </Container>
        </App>
        <div style={{ clear: 'both', height: 50 }}></div>
        <Footer>
          <Row>
            <span>Email: brendan.kellams@gmail.com</span>
          </Row>
          <Row>
            <a href='https://www.linkedin.com/in/brendan-kellams/' target='_blank' rel='noopener noreferrer'>
              <img style={{ height: 80, width: 80 }} src={require('../../assets/images/linkedin.png')} alt='linkedin' />
            </a>
            <a href='https://github.com/brendan-kellams' target='_blank' rel='noopener noreferrer'>
              <img style={{ height: 80, width: 80 }} src={require('../../assets/images/github.png')} alt='github' />
            </a>
            <a href='https://www.instagram.com/redmangoin/?hl=en' target='_blank' rel='noopener noreferrer'>
              <img style={{ height: 80, width: 80 }} src={require('../../assets/images/instagram.png')} alt='instagram' />
            </a>
            <a href='https://www.facebook.com/brendan.kellams' target='_blank' rel='noopener noreferrer'>
              <img style={{ height: 80, width: 80 }} src={require('../../assets/images/facebook.png')} alt='facebook' />
            </a>
          </Row>
        </Footer>
      </div >
    );
  }
}