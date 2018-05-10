import React, { Component } from 'react';
import Background from './component/background'
import Foreground from './component/foreground'
import Highlights from './component/highlights'

const canvasContainerStyles = {
  display: 'grid',
  gridArea: 'canvas'
}

const leftPalette = {
  gridArea: 'palette_left',
  backgroundColor: 'teal'
}

const topPalette = {
  gridArea: 'palette_top',
  backgroundColor: 'yellow'
}

class App extends Component {
  handleMove = (e) => {
    this.refs.highs.highlight(e);
  }

  handleLeave = (e) => {
    this.refs.highs.clear(e);
  }

  render() {
    return (
      <React.Fragment>
        <div style={topPalette}> TOP PALETTE </div>
        <div style={leftPalette}> LEFT PALETTE </div>
        <div style={canvasContainerStyles}>
          <Background />
          <Highlights ref="highs" />
          <Foreground onMouseMove={this.handleMove} onMouseLeave={this.handleLeave}/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
