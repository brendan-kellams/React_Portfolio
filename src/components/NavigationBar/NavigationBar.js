import React, { Component } from 'react';
import { NavigationContainer, NavItem } from './NavigationBar.style';

class NavigationBar extends Component {
  render() {
    return (
      <NavigationContainer>
        <NavItem to="/" style={{marginLeft: 10}}>Home</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem to="/aboutme" style={{marginRight: 10}}>About Me</NavItem>
      </NavigationContainer>
    );
  }
}

export default NavigationBar;