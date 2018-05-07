import React, { Component } from 'react';
import { drawStatic, setScale, tile, scrn } from './util'

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
    this.drawBoundaries(this.refs.canvas);
  }

  drawBoundaries = (canvas) => {
    let p = new Path2D();
    p.moveTo(scrn(79), scrn(5))
    p.lineTo(scrn(85), scrn(5))
    p.lineTo(scrn(85), scrn(10))
    p.lineTo(scrn(79), scrn(10))
    p.lineTo(scrn(79), scrn(5))
    p.closePath();
    this.bounds = p

    let ctx = canvas.getContext("2d")
    ctx.fillStyle = 'rgba(0,0,0,1)'
    ctx.fill(p);
  }

  handleClick = (e) => {
    e = e.nativeEvent;
    let ctx = this.refs.canvas.getContext("2d")

    // isPointInPath uses an untransformed path space, so to determine if click
    // occurs within bounds, we have to scale the mouse coordiantes.
    let scale = window.devicePixelRatio || 1
    let isValid = ctx.isPointInPath(this.bounds, e.offsetX * scale, e.offsetY * scale);
    console.log(`(${e.offsetX}, ${e.offsetY}): ${isValid}`)
  }

  render(){
    return (
      <canvas ref="canvas" style={canvasStyles} onMouseMove={this.props.onMouseMove} 
              onMouseLeave={this.props.onMouseLeave} onClick={this.handleClick} />
    );
  }
}

export default Foreground;