import React from 'react';
import { HashRouter, Route} from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Home from './containers/Home/Home';
import Projects from './containers/Projects/Projects';
import AboutMe from './containers/AboutMe/AboutMe';


export default (
  <HashRouter>
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 1 }}
      atActive={{ opacity: 1 }}
      className='switch-wrapper'
    >
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/aboutme" component={AboutMe} />
    </AnimatedSwitch>
  </HashRouter>
);