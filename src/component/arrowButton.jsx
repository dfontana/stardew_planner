import React from 'react'
import styled from 'styled-components'

let paramsFor = {
  'up': [24,20,-180],
  'right': [20,24,-90],
  'down': [24,20,0],
  'left': [20,24,90]
}

let oppositeOf = {
  'up': 'down',
  'right': 'left',
  'down': 'up',
  'left': 'right'
}

let bordersFor = {
  'up': ['solid solid none solid', '40% 40% 0 0'],
  'right': ['solid solid solid none', '0 40% 40% 0'],
  'down': ['none solid solid solid', '0 0 40% 40%'],
  'left': ['solid none solid solid', '40% 0 0 40%']
}

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.W}px;
  height: ${props => props.H}px;
  cursor: pointer;
  z-index: 99;

  background-color: mediumspringgreen;
  border-style: ${props => bordersFor[props.orient][0]};
  border-color: white;
  border-width: 2px;
  border-radius: ${props => bordersFor[props.orient][1]};
  `

const Arrows = styled.div`
  &:after, &:before {
    content: '';
    display: inline-block;
    margin-top: 6px;
    width: 6px;
    height: 6px;
    border-top: 0.15em solid #333;
    border-right: 0.15em solid #333;
    border-color: white;
    transform: rotate(135deg);
  }

  &:before {
    position: absolute;
    margin-top: 0px;
  }

  transform: rotate(${props => props.rotation}deg)
  `

class ArrowButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orient: this.props.orient
    }
  }

  clickWrap = (e) => {
    //Invert arrow, then call handler
    this.setState({orient: oppositeOf[this.state.orient]})
    this.props.handler()
  }

  render() {
    let [W,H,ROTATION] = paramsFor[this.state.orient]
  
    return (
      <Button onClick={this.clickWrap} orient={this.props.orient} W={W} H={H}>
        <Arrows rotation={ROTATION}></Arrows>
      </Button>
    )
  }
}

export default ArrowButton