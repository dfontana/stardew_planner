import React, { Component } from 'react';
import { CANVAS_W, CANVAS_H } from '../constants'
import drawStatic from './util'

const canvasStyles = {
  position: 'absolute',
  zIndex: 2
}

class Foreground extends Component {
  async componentDidMount() {
    this.refs.canvas.width = CANVAS_W;
    this.refs.canvas.height = CANVAS_H;
    let ctx = this.refs.canvas.getContext("2d");
    await drawStatic(ctx, '../stardew_assets/farm_house.png', 59, 8, 9, 9);
    await drawStatic(ctx, '../stardew_assets/farm_greenhouse.png', 25, 8, 7, 8);
  }

  render(){
    return (
      <canvas ref="canvas" style={canvasStyles} />
    );
  }
}

export default Foreground;