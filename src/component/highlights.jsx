import React, { Component } from 'react';
import { CANVAS_W, CANVAS_H, TILE_S } from '../constants'
import { setScale, tile, scrn} from './util'

class Highlights extends Component {
  constructor(props) {
    super(props);
    this.style = {
      gridArea: '1/1/1/1',
      zIndex: 1
    }
    this.ctx = null;
  }
  
  async componentDidMount() {
    this.ctx = this.refs.canvas.getContext("2d");
    setScale(this.refs.canvas, this.ctx);
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
  
    // let tileX = Math.floor(e.offsetX / TILE_S) * TILE_S
    let [tileX, tileY] = scrn(tile(e.offsetX), tile(e.offsetY))
    this.ctx.moveTo(tileX, 0);
    this.ctx.lineTo(tileX, CANVAS_H)
    this.ctx.moveTo(tileX+TILE_S, 0);
    this.ctx.lineTo(tileX+TILE_S, CANVAS_H)
  
    this.ctx.moveTo(0, tileY);
    this.ctx.lineTo(CANVAS_W, tileY)
    this.ctx.moveTo(0, tileY+TILE_S);
    this.ctx.lineTo(CANVAS_W, tileY+TILE_S)
  
    this.ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
    this.ctx.stroke();

    // TOOLTIP
    this.ctx.font = "12px Arial";
    let x = tile(e.offsetX) >= 78 ? tileX-2*TILE_S : tileX+TILE_S;
    let y = tile(e.offsetY) >= 64 ? tileY-TILE_S : tileY+TILE_S;
    this.ctx.fillText(`X: ${tile(e.offsetX)}`,x,y);
    this.ctx.fillText(`Y: ${tile(e.offsetY)}`,x,y+12);


    this.ctx.restore();
  }

  render(){
    return (
      <canvas ref="canvas" style={this.style} />
    );
  }
}

export default Highlights;