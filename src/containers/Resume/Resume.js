import React, { Component } from 'react';
import App from '../App/App';
import { Container } from '../../theme/grid';
import ScrollToTopOnMount from '../../components/ScrollToTop/ScrollToTop';
import { H1, H2, H3, H4, H5, H6, P, BlockQuote, Code, A } from '../../theme/types';
import { Footer } from '../../components/Footer/Footer';



class Resume extends Component {
  render() {
    return (
      <div>
        <App>
          <ScrollToTopOnMount />
          <Container>
            <H1 align='center' textDecoration='underline'>Education</H1>

            <H2 textDecoration='underline'>
              University of California, San Diego Extension (Aug. 2017-Feb. 2018)
          </H2>
            <P style={{ textIndent: 40 }}>
              UCSD Coding Bootcamp - Javascript Full Stack Web Development
          </P>

            <H2 textDecoration='underline'>
              University of California, Berkeley (Jan. 2010-Aug. 2011)
          </H2>
            <P style={{ textIndent: 40 }}>
              B.A. Psychology
          </P>

            <H2 textDecoration='underline'>
              Grossmont College (Aug. 2007-Dec. 2009)
          </H2>
            <P style={{ textIndent: 40 }}>
              A.A. University Transfer Studies
          </P>

            <H1 align='center' textDecoration='underline'>Experience</H1>

            <H2 textDecoration='underline'>
              Assistant Director-ID Tech (July 2016-Aug. 2016)
          </H2>
            <ul style={{ lineHeight: "200%" }}>
              <li>Oversaw the operations of the camp to make sure teaching quality,
                staff and student relations, and camp logistics was running effectively.
            </li>
              <li>Communicated and trained instructors on how to use different teaching methods
                to better engage their students and keep them on task.
            </li>
              <li>Provided instructors positive and constructive feedback to further their personal
                and professional development.
            </li>
              <li>Solved current and possible issues and problems within the environment with other
                managers.
            </li>
              <li>Worked together with other managers to provide quality service to students and
                parents to create a wonderful and unforgettable experience.
            </li>
            </ul>

            <H2 textDecoration='underline'>
              Substitute Teacher-LMSVSD (April 2016-Present)
          </H2>
            <ul style={{ lineHeight: "200%" }}>
              <li>Provide a fun and creative class environment for the students while the
                regular teacher is absent.
            </li>
              <li>Follow and execute specific instructions set forth by the regular teacher
                to teach the class.
            </li>
              <li>Teach students a variety of skills such as: reading comprehension,
                mathematical skills, spelling, critical thinking, and physical well-being.
            </li>
            </ul>

            <H2 textDecoration='underline'>
              English Teacher-Education First (Aug. 2013-Aug. 2015)
          </H2>
            <ul style={{ lineHeight: "200%" }}>
              <li>Taught over 100 children, teenagers, and adults vocabulary,
                phonics, grammar, speaking and listening, and spelling and reading skills for the English language.
            </li>
              <li>Presented Achievements Ceremonies to parents showing their children’s progress in the English language.
            </li>
              <li>Trained teachers different teaching methods enabling them to get shy students to engage more
                during class and raise their confidence as teachers.
            </li>
            </ul>
          </Container>
        </App>
        <Footer>
          <span>this is a test</span>
        </Footer>
      </div>
    )
  }
}
export default Resume;