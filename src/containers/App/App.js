import React, { Component } from 'react';
import { Background } from './App.style';
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import ReallySmoothScroll from 'really-smooth-scroll';


ReallySmoothScroll.shim();

class App extends Component {
  render() {
    return (
      <div>
        <div className='header'>
          <NavigationBar />
        </div>
        <Background />
        {this.props.children}
      </div>
    );
  }
}

export default App;
