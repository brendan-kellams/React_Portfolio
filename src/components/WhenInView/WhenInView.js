import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import {
  CSSTransition,
} from 'react-transition-group';

class WhenInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInView: false
    };

    this.onEnter = this.onEnter.bind(this);
  }

  onEnter({ previousPosition }) {
    if (previousPosition === Waypoint.below) {
      this.state({
        isInView: true
      });
    }
  }

  render() {
    return (
      <div>
        <Waypoint onEnter={
          <CSSTransition
            timeout={500}
            classNames="fade" />
        }>
        </Waypoint>
        { this.props.children({ isInView: this.state.isInView }) }
      </div >
    );
  }
}

export default WhenInView;