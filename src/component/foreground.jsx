import React, { Component } from 'react';
import { CANVAS_W, CANVAS_H } from '../constants'
import drawStatic from './util'

const canvasStyles = {
  position: 'absolute',
  zIndex: 2
}

class Foreground extends Component {
  componentDidMount() {
    this.refs.canvas.width = CANVAS_W*2;
    this.refs.canvas.height = CANVAS_H*2;
    this.refs.canvas.style.width = "1280px";
    this.refs.canvas.style.height = "1040px";
    let ctx = this.refs.canvas.getContext("2d");
    let multi = window.devicePixelRatio || 1
    ctx.scale(multi,multi)
    drawStatic(ctx, '/img/farm_house.png', 59, 8, 9, 9);
    drawStatic(ctx, '/img/farm_greenhouse.png', 25, 8, 7, 8);
  }

  render(){
    return (
      <canvas ref="canvas" style={canvasStyles} />
    );
  }
}

export default Foreground;