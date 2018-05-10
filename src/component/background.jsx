import React, { Component } from 'react';
import { CANVAS_W, CANVAS_H, TILE_S, TILE_W, TILE_H } from '../constants'
import { drawStatic, setScale } from './util'

class Background extends Component {
  constructor(props) {
    super(props);
    this.style = {
      gridArea: '1/1/1/1',
      zIndex: 0
    }
  }
  async componentDidMount() {
    let ctx = this.refs.canvas.getContext("2d");
    setScale(this.refs.canvas, ctx);
    await drawStatic(ctx, '/img/farm_fishing.png', 0, 0, CANVAS_W/TILE_S, CANVAS_H/TILE_S)
    this.drawGrid(ctx)
  }

  drawGrid(ctx) {
    ctx.beginPath();
    for(let y = 1; y <= TILE_H; y++) {
      let lineH = TILE_S*y + 0.5;
      ctx.moveTo(0, lineH);
      ctx.lineTo(CANVAS_W, lineH)
    }
    for(let x = 1; x <= TILE_W; x++) {
      let lineW = TILE_S*x + 0.5;
      ctx.moveTo(lineW, 0);
      ctx.lineTo(lineW, CANVAS_H)
    }
    ctx.strokeStyle = 'rgba(0,0,0,0.25)';
    ctx.stroke();
  }

  render(){
    return (
      <canvas ref="canvas" style={this.style} />
    );
  }
}

export default Background;