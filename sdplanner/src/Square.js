import React, {Component} from 'react';
import './Square.css';

class Line extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <line x1={this.props.x1} y1={this.props.y1} x2={this.props.x2} y2={this.props.y2} />
    );
  }
}

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tileX: null,
      tileY: null
    }
  }

  renderLine(id, x1,y1,x2,y2) {
    return <Line key={id} x1={x1} y1={y1} x2={x2} y2={y2} />;
  }

  buildLines() {
    let lines = []
    let id = 0;
    for(let y = 1; y<=65; y++){
      lines.push(this.renderLine(id, 0, y*16, 1280, y*16))
      id++;
    }
    for(let x = 1; x<=80; x++){
      lines.push(this.renderLine(id, x*16, 0, x*16, 1040))
      id++;
    }
    return lines;
  }

  render() {
    return (
      <g className='grid'>
        {this.buildLines()}
      </g>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <svg className="game">
        <image href={require('./farm_fishing.png')} x='0' y='0' width='1280' height='1040' />
        <Grid />
      </svg>
    );
  }
}

export default Game;