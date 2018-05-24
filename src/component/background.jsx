import React, { Component } from 'react'
import styled from 'styled-components'
import { CANVAS_W, CANVAS_H, TILE_S, TILE_W, TILE_H } from '../constants'
import { drawStatic, setScale } from './util'

const Canvas = styled.canvas`
  grid-area: 1/1/1/1;
  z-index: 0;
`

class Background extends Component {
  constructor(props) {
    super(props)
    this.setRef = e => {
      this.canvas = e
      this.ctx = e.getContext("2d")
    }
  }
  
  async componentDidMount() {
    setScale(this.canvas, this.ctx)
    await drawStatic(this.ctx, '/img/farm_fishing.png', 0, 0, CANVAS_W/TILE_S, CANVAS_H/TILE_S)
    this.drawGrid()
  }

  drawGrid() {
    this.ctx.beginPath()
    for(let y = 1; y <= TILE_H; y++) {
      let lineH = TILE_S*y + 0.5
      this.ctx.moveTo(0, lineH)
      this.ctx.lineTo(CANVAS_W, lineH)
    }
    for(let x = 1; x <= TILE_W; x++) {
      let lineW = TILE_S*x + 0.5
      this.ctx.moveTo(lineW, 0)
      this.ctx.lineTo(lineW, CANVAS_H)
    }
    this.ctx.strokeStyle = 'rgba(0,0,0,0.25)'
    this.ctx.stroke()
  }

  render(){
    return (
      <Canvas innerRef={this.setRef} />
    )
  }
}

export default Background