import React, { Component } from 'react';
import { drawStatic, setScale } from './util'

const canvasStyles = {
  position: 'absolute',
  zIndex: 2
}

class Foreground extends Component {
  componentDidMount() {
    let ctx = this.refs.canvas.getContext("2d");
    setScale(this.refs.canvas, ctx);
    drawStatic(ctx, '/img/farm_house.png', 59, 8, 9, 9);
    drawStatic(ctx, '/img/farm_greenhouse.png', 25, 8, 7, 8);
  }

  render(){
    return (
      <canvas ref="canvas" style={canvasStyles} onMouseMove={this.props.onMouseMove} onMouseLeave={this.props.onMouseLeave}/>
    );
  }
}

export default Foreground;