import React, { Component } from 'react';
import { CANVAS_W, CANVAS_H, TILE_S } from '../constants'
import {setScale} from './util'

const canvasStyles = {
  position: 'absolute',
  zIndex: 1
}

class Highlights extends Component {
  constructor(props) {
    super(props);
    this.ctx = null;
  }
  
  async componentDidMount() {
    setScale(this.refs.canvas, this.refs.canvas.getContext("2d"));
    this.ctx = this.refs.canvas.getContext("2d");
  }

  clear = (e) => {
    this.ctx.save()
    this.ctx.clearRect(0, 0, CANVAS_W, CANVAS_H)
    this.ctx.restore()
  }

  highlight = (e) => {
    e = e.nativeEvent;

    this.ctx.save(); 
    this.ctx.clearRect(0, 0, CANVAS_W, CANVAS_H)
    this.ctx.beginPath();
  
    let tileX = Math.floor(e.offsetX / TILE_S) * TILE_S
    this.ctx.moveTo(tileX, 0);
    this.ctx.lineTo(tileX, CANVAS_H)
    this.ctx.moveTo(tileX+TILE_S, 0);
    this.ctx.lineTo(tileX+TILE_S, CANVAS_H)
  
    let tileY = Math.floor(e.offsetY / TILE_S) * TILE_S
    this.ctx.moveTo(0, tileY);
    this.ctx.lineTo(CANVAS_W, tileY)
    this.ctx.moveTo(0, tileY+TILE_S);
    this.ctx.lineTo(CANVAS_W, tileY+TILE_S)
  
    this.ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
    this.ctx.stroke();
    this.ctx.restore();
  }

  render(){
    return (
      <canvas ref="canvas" style={canvasStyles} />
    );
  }
}

export default Highlights;