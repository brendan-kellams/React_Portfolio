import React, { Component } from 'react';
import App from '../App/App';
import { Container } from '../../theme/grid';
import { Title, Image, ImageContainer } from './AboutMe.style';
import { H2 } from '../../theme/types';
import Slideshow from '../../components/SlideShow/SlideShow'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'
import Footer from '../../components/Footer/Footer';





class AboutMe extends Component {
  render() {
    return (
      <div>
        <App>
          <ScrollToTop />
          <Container>
            <Title>About Me</Title>
            <ImageContainer justify= 'center'>
              <Image src={require('../../assets/images/brendan profile.jpg')} />
            </ImageContainer>
            <H2 align='center' style={{ lineHeight: '1.5em', fontSize: '1.2em' }}>As you probably already know, my name is Brendan and I'm a new web developer
            looking to grow so I can build bigger and better websites for people and businesses.  In my free
            time when I am not trying to perfect my craft, I enjoy many different things and it just depends
            on my mood. Sometimes, I enjoy playing guitar, bass, piano, and any other instruments I
            can get my hands on.
          </H2>
            <H2 align='center' style={{ lineHeight: '1.5em', fontSize: '1.2em' }}> When I want to have some down time, I enjoy playing video games (both console and PC),
            and I love building computers when I have the funds to do so.  My wife and I are big board game nerds and we are
            always down for a good game.
          </H2>
            <H2 align='center' style={{ lineHeight: '1.5em', fontSize: '1.2em' }}>  When I get out of house, I want to do many things like: play all kinds of sports,
            go longboarding, shoot some pictures and videos with my drone, travel and discover new and wonderful places, and
            meet up with friends for some good food and a beer!
          </H2>
            <H2 align='center' style={{ lineHeight: '1.5em', fontSize: '1.2em' }}>Here is a small little sldeshow of some pictures that I have taken of my travels abroad.  I hope you enjoy!</H2>
            <Slideshow />
          </Container>
        </App>
        <div style={{ clear: 'both', height: 60 }}></div>
        <Footer />
      </div>
      );
    }
  }
  
export default AboutMe;