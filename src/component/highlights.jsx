import React, { Component } from 'react'
import styled from 'styled-components'
import { CANVAS_W, CANVAS_H, TILE_S } from '../constants'
import { setScale, tile, scrn} from './util'

const Canvas = styled.canvas`
  grid-area: 1/1/1/1;
  z-index: 1;
`

class Highlights extends Component {
  constructor(props) {
    super(props)
    this.setRef = e => {
      this.canvas = e
      this.ctx = e.getContext("2d")
    } 
  }
  
  componentDidMount() {
    setScale(this.canvas, this.ctx)
  }

  clear = (e) => {
    this.ctx.save()
    this.ctx.clearRect(0, 0, CANVAS_W, CANVAS_H)
    this.ctx.restore()
  }

  highlight = (e) => {
    e = e.nativeEvent

    this.ctx.save() 
    this.ctx.clearRect(0, 0, CANVAS_W, CANVAS_H)
    this.ctx.beginPath()
  
    // let tileX = Math.floor(e.offsetX / TILE_S) * TILE_S
    let [tileX, tileY] = scrn(tile(e.offsetX), tile(e.offsetY))
    this.ctx.moveTo(tileX, 0)
    this.ctx.lineTo(tileX, CANVAS_H)
    this.ctx.moveTo(tileX+TILE_S, 0)
    this.ctx.lineTo(tileX+TILE_S, CANVAS_H)
  
    this.ctx.moveTo(0, tileY)
    this.ctx.lineTo(CANVAS_W, tileY)
    this.ctx.moveTo(0, tileY+TILE_S)
    this.ctx.lineTo(CANVAS_W, tileY+TILE_S)
  
    this.ctx.strokeStyle = 'rgba(0, 0, 0, 1)'
    this.ctx.stroke()

    // TOOLTIP
    this.ctx.font = "12px Arial"
    let x = tile(e.offsetX) >= 78 ? tileX-2*TILE_S : tileX+TILE_S
    let y = tile(e.offsetY) >= 64 ? tileY-TILE_S : tileY+TILE_S
    this.ctx.fillText(`X: ${tile(e.offsetX)}`,x,y)
    this.ctx.fillText(`Y: ${tile(e.offsetY)}`,x,y+12)


    this.ctx.restore()
  }

  render(){
    return (
      <Canvas innerRef={this.setRef} />
    )
  }
}

export default Highlights