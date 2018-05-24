import React, { Component } from 'react'
import styled from 'styled-components'
import Background from './component/background'
import Foreground from './component/foreground'
import Highlights from './component/highlights'
import Palette from './component/palette'

const CanvasContainer = styled.div`
  display: grid;
  grid-area: canvas;
  overflow: auto;
`

class App extends Component {
  constructor(props) {
    super(props)
    this.setHighRef = e => {
      this.highs = e
    }
  }
  handleMove = (e) => {
    this.highs.highlight(e)
  }

  handleLeave = (e) => {
    this.highs.clear(e)
  }

  render() {
    return (
      <React.Fragment>
        <Palette location='palette_top' />
        <Palette location='palette_left' />
        <CanvasContainer>
          <Background />
          <Highlights ref={this.setHighRef} />
          <Foreground onMouseMove={this.handleMove} onMouseLeave={this.handleLeave}/>
        </CanvasContainer>
      </React.Fragment>
    )
  }
}

export default App
