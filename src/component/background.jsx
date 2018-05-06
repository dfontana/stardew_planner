import React, { Component } from 'react';
import { CANVAS_W, CANVAS_H, TILE_S, TILE_W, TILE_H } from '../constants'
import drawStatic from './util'

const canvasStyles = {
  position: 'absolute',
  zIndex: 0
}

class Background extends Component {
  async componentDidMount() {
    this.refs.canvas.width = CANVAS_W;
    this.refs.canvas.height = CANVAS_H;
    let ctx = this.refs.canvas.getContext("2d");
    await drawStatic(ctx, '../farm_fishing.png', 0, 0, CANVAS_W/TILE_S, CANVAS_H/TILE_S)
    this.drawGrid(ctx)
  }

  drawGrid(ctx) {
    ctx.beginPath();
    for(let y = 1; y <= TILE_H; y++) {
      let lineH = TILE_S*y;
      ctx.moveTo(0, lineH);
      ctx.lineTo(CANVAS_W, lineH)
    }
    for(let x = 1; x <= TILE_W; x++) {
      let lineW = TILE_S*x;
      ctx.moveTo(lineW, 0);
      ctx.lineTo(lineW, CANVAS_H)
    }
    ctx.strokeStyle = 'rgba(100, 100, 100, 0.25)';
    ctx.stroke();
  }

  render(){
    return (
      <canvas ref="canvas" style={canvasStyles} />
    );
  }
}

export default Background;