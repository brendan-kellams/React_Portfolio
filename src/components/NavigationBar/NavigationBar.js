import React, { Component } from 'react';
import { NavigationContainer, NavItem } from './NavigationBar.style';

class NavigationBar extends Component {
  render() {
    return (
      <NavigationContainer>
        <NavItem to="/" style={{ marginLeft: 10 }}>Home</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem to="/aboutme" >About Me</NavItem>
        <NavItem to='/resume'>Resume</NavItem>
      </NavigationContainer>
    );
  }
}

export default NavigationBar;