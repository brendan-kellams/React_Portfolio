import React, { Component } from 'react';
import {
  ImageButton,
  ImageButton2,
  ImageContainer,
  ProjectContainer,
  A
  // ProjectContainer2,
} from './Projects.style';
import { Container } from '../../theme/grid';
import App from '../App/App';
import { H1 } from '../../theme/types';
import Fade from 'react-reveal/Fade';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Footer from '../../components/Footer/Footer';


class Projects extends Component {
  render() {
    return (
      <div>
        <App>
          <ScrollToTop />
          <Container>
            <ProjectContainer>
              <h1><A href='https://pt-link.herokuapp.com/' target='_blank'>PT-Link</A></h1>
              <ImageContainer>
                <a href='https://pt-link.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                  <ImageButton>
                    <img src={require('../../assets/images/PT-Link-new.jpg')} alt='project1' />
                  </ImageButton>
                </a>
              </ImageContainer>
              <Fade right>
                <p>
                  PT-Link is an educational-communication application that allows parents and teachers
                to stay connected regarding what content is being taught in class.  The content covers
                each lesson plan, topics covered in class, homework, and the due date the homework.  Teachers
                and parents are also able to communicate through a messaging service to answer additional
                questions.
                </p>
              </Fade>
            </ProjectContainer>
            <br /><br /><br />
            <ProjectContainer>
              <H1 align='right'><A href='http://whoopitup.herokuapp.com/' target='_blank'>Whoop It Up!</A></H1>
              <ImageContainer>
                <a href='http://whoopitup.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                  <ImageButton2>
                    <img src={require('../../assets/images/og_image-new2.jpg')} alt='project4' />
                  </ImageButton2>
                </a>
              </ImageContainer>
              <Fade left>
                <p>
                  It's a social media application that allows users to create and search for events happening around them.
                  Users also have a profile page where it shows which events they are planning on attending and they
                  can see which events their friends are attending.
              </p>
              </Fade>
            </ProjectContainer>
            <br /><br /><br />
            <ProjectContainer>
              <h1><A href='https://yumburger.herokuapp.com/' target='_blank'>Yum Burger!</A></h1>
              <ImageContainer>
                <a href='https://yumburger.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                  <ImageButton>
                    <img src={require('../../assets/images/burger.gif')} alt='project2' />
                  </ImageButton>
                </a>
              </ImageContainer>
              <Fade right>
                <p>
                  Yum Burger is an application where you are able to create a burger and log that burger into a queue waiting to be DEVOURED!
                  This is made with MySQL, Node, Express, Handlebars and a homemade ORM (object-relational mapping). This uses a MVC design
                  pattern and uses Node and MySQL to query and route data in the app. Handlebars generates the
                  HTML for the application. Enjoy!
              </p>
              </Fade>
            </ProjectContainer>
            <br /><br /><br />
            <ProjectContainer>
              <H1 align='right'><A href='https://github.com/brendan-kellams/bamazon' target='_blank'>Bamazon</A></H1>
              <ImageContainer>
                <a href='https://github.com/brendan-kellams/bamazon' target='_blank' rel='noopener noreferrer'>
                  <ImageButton2>
                    <img src={require('../../assets/images/bamazon_thumbnail.jpg')} alt='project4' />
                  </ImageButton2>
                </a>
              </ImageContainer>
              <Fade left>
                <p>
                  This app is an Amazon-like storefront built with Javascript, MySQL, and implemented through Node. The app will take in orders from
                  customers and deplete stock from the store's inventory. As a bonus task, you can program your app to track
                  product sales across your store's departments and then provide a summary of the highest-grossing departments
                  in the store.
              </p>
              </Fade>
            </ProjectContainer>
            <div style={{ clear: 'both', height: 50 }}></div>
          </Container>
        </App>
        <div style={{ clear: 'both', height: 50 }}></div>                
        <Footer />
      </div>
    )
  }
}

export default Projects;