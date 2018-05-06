import React, { Component } from 'react';
import Background from './component/background'
import Foreground from './component/foreground'
import Highlights from './component/highlights'
import { CANVAS_W, CANVAS_H } from './constants'

const appStyles = {
  width: `${CANVAS_W}px`,
  height: `${CANVAS_H}px`
}

class App extends Component {
  handleMove = (e) => {
    this.refs.highs.highlight(e);
  }

  render() {
    return (
      <div style={appStyles}>
        <Background />
        <Highlights ref="highs" />
        <Foreground OnMouseMove={this.handleMove}/>
      </div>
    );
  }
}

export default App;
