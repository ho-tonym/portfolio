import React, { Component } from 'react';
import threeEntryPoint from './threeEntryPoint';
export default class reactThreeContainer extends Component {
  componentDidMount() {
    threeEntryPoint(this.threeRootElement);
  }
  render () {
      return (
        <div ref={element => this.threeRootElement = element} />
      );
  }
}
//
// threeEntryPoint is a function that lives outside of React and doesn’t care about it. For what it knows it could be called from any web app, built with any framework or no framework at all.
// threeEntryPoint is a function that takes a dom element as parameter, this element will be the container of the canvas.
// The function threeEntryPoint is responsible for:
// Creating the canvas
// Binding events
// Creating Three.js objects
// Starting the render loop
