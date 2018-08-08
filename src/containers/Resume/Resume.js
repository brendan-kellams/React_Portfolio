import React, { Component } from 'react';
import App from '../App/App';
import { Container } from '../../theme/grid';
import ScrollToTopOnMount from '../../components/ScrollToTop/ScrollToTop';
import { H1, H2, P } from '../../theme/types';
import Footer from '../../components/Footer/Footer';




class Resume extends Component {
  render() {
    return (
      <div>
        <App>
          <ScrollToTopOnMount />
          <Container>
            <H1 align='center' textDecoration='underline'>Education</H1>

            <H2 textDecoration='underline'>
              University of California, Berkeley (Jan. 2010-Aug. 2011)
          </H2>
            <P style={{ textIndent: 40 }}>
              B.A. Psychology
          </P>

            <H1 align='center' textDecoration='underline'>Experience</H1>

            <H2 textDecoration='underline'>
              Full Stack Developer-BK Development (August 2017-Present)
          </H2>
            <ul style={{ lineHeight: "200%" }}>
              <li>
                Developed 5 responsive web pages for mobile, tablet, and desktop with reusable components for use
                across multiple projects, utilizing JavaScript ES6, ReactJS, Sass, and Node.js.
              </li>
              <li>
                Created a responsive website for folk rock band Finnegan Blue to help increase band exposure by 30%.
              </li>
              <li>
                Wrote and showcased application presentations to fellow developers and potential investors.
              </li>
              <li>
                Designed a portfolio for Dino Man Photography using WordPress.
              </li>
            </ul>

            <H2 textDecoration='underline'>
              Assistant Director-ID Tech (July 2016-Aug. 2016)
          </H2>
            <ul style={{ lineHeight: "200%" }}>
              <li>
                Oversaw operations to ensure teaching quality, staff, student relations, and logistics were running
                efficiently and effectively for a camp of 150+ campers.
              </li>
              <li>
                Communicated and trained 12 instructors on how to use different teaching techniques, engagement
                methodologies, and classroom management skills to better serve their students.
              </li>
              <li>
                Provided instructors feedback 2 times per week to further their personal and professional development.
              </li>
              <li>
                Performed quality service to students and parents to increase customer satisfaction by 30%.
              </li>
            </ul>

            <H2 textDecoration='underline'>
              Substitute Teacher-LMSVSD (April 2016-Present)
          </H2>
            <ul style={{ lineHeight: "200%" }}>
              <li>
                Provide a fun and creative class environment for the students while the
                regular teacher is absent.
              </li>
              <li>
                Follow and execute specific instructions set forth by the regular teacher
                to teach the class.
              </li>
              <li>
                Teach students a variety of skills such as: reading comprehension,
                mathematical skills, spelling, critical thinking, and physical well-being.
              </li>
            </ul>

            <H2 textDecoration='underline'>
              English Teacher-Education First (Aug. 2013-Aug. 2015)
          </H2>
            <ul style={{ lineHeight: "200%" }}>
              <li>
                Taught over 100 children, teenagers, and adults vocabulary,
                phonics, grammar, speaking and listening, and spelling and reading skills for the English language.
              </li>
              <li>
                Presented Achievements Ceremonies to parents showing their children’s progress in the English language.
              </li>
              <li>
                Trained teachers different teaching methods enabling them to get shy students to engage more
                during class and raise their confidence as teachers.
              </li>
            </ul>
          </Container>
        </App>
        <div style={{ clear: 'both', height: 70 }}></div>
        <Footer />
      </div>
    )
  }
}
export default Resume;