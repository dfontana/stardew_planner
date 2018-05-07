import React, { Component } from 'react';
import Background from './component/background'
import Foreground from './component/foreground'
import Highlights from './component/highlights'

const appStyles = {
  position: 'absolute',
  left: 0
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
      <div style={appStyles}>
        <Background />
        <Highlights ref="highs" />
        <Foreground onMouseMove={this.handleMove} onMouseLeave={this.handleLeave}/>
      </div>
    );
  }
}

export default App;
