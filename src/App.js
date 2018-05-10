import React, { Component } from 'react';
import Background from './component/background'
import Foreground from './component/foreground'
import Highlights from './component/highlights'
import Palette from './component/palette'

const canvasContainerStyles = {
  display: 'grid',
  gridArea: 'canvas'
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
        <Palette location='palette_top' />
        <Palette location='palette_left' />
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
