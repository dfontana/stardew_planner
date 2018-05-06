import React, { Component } from 'react';
import { CANVAS_W, CANVAS_H, TILE_S, TILE_W, TILE_H } from '../constants'
import drawStatic from './util'

const canvasStyles = {
  position: 'absolute',
  zIndex: 0
}

class Background extends Component {
  async componentDidMount() {
    this.refs.canvas.width = CANVAS_W*2;
    this.refs.canvas.height = CANVAS_H*2;
    this.refs.canvas.style.width = "1280px";
    this.refs.canvas.style.height = "1040px";

    let ctx = this.refs.canvas.getContext("2d");
    let multi = window.devicePixelRatio || 1
    ctx.scale(multi,multi)

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
    ctx.strokeStyle = 'rgba(0,0,0,1)';
    ctx.stroke();
  }

  render(){
    return (
      <canvas ref="canvas" style={canvasStyles} />
    );
  }
}

export default Background;