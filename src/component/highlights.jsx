import React, { Component } from 'react';
import { CANVAS_W, CANVAS_H, TILE_S } from '../constants'
import './util'

const canvasStyles = {
  position: 'absolute',
  zIndex: 1
}

// Off screen canvas for better buffering
const hi_off_cvs = document.createElement('canvas');
hi_off_cvs.width = CANVAS_W;
hi_off_cvs.height = CANVAS_H;
const hi_off_ctx = hi_off_cvs.getContext("2d");

class Highlights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ctx: null
    }
  }
  
  async componentDidMount() {
    this.refs.canvas.width = CANVAS_W*2;
    this.refs.canvas.height = CANVAS_H*2;
    this.refs.canvas.style.width = "1280px";
    this.refs.canvas.style.height = "1040px";
    this.setState({ctx: this.refs.canvas.getContext("2d")})
    let multi = window.devicePixelRatio || 1
    this.refs.canvas.getContext("2d").scale(multi,multi)
  }

  update() {
    this.ctx.clearRect(0, 0, CANVAS_W, CANVAS_H)
    this.ctx.drawImage(hi_off_cvs, 0, 0)
    requestAnimationFrame(this.update);
  }

  highlight(e) {
    hi_off_ctx.clearRect(0, 0, CANVAS_W, CANVAS_H)
    hi_off_ctx.beginPath();
  
    let tileX = Math.floor(e.offsetX / TILE_S) * TILE_S
    hi_off_ctx.moveTo(tileX, 0);
    hi_off_ctx.lineTo(tileX, CANVAS_H)
    hi_off_ctx.moveTo(tileX+TILE_S, 0);
    hi_off_ctx.lineTo(tileX+TILE_S, CANVAS_H)
  
    let tileY = Math.floor(e.offsetY / TILE_S) * TILE_S
    hi_off_ctx.moveTo(0, tileY);
    hi_off_ctx.lineTo(CANVAS_W, tileY)
    hi_off_ctx.moveTo(0, tileY+TILE_S);
    hi_off_ctx.lineTo(CANVAS_W, tileY+TILE_S)
  
    hi_off_ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
    hi_off_ctx.stroke();
  }

  render(){
    return (
      <canvas ref="canvas" style={canvasStyles} />
    );
  }
}

export default Highlights;