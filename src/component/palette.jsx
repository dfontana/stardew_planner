import React, { Component } from 'react'
import styled from 'styled-components'
import ArrowButton from './arrowButton'

const Container = styled.div`
  background-color: red;
  grid-area: ${props => props.location};
  place-self: ${props => props.isLeft ? 'center start' : 'start center'};

  display: flex;
  flex-direction: ${props => props.isLeft ? 'row' : 'column'};
  justify-content: start;
  align-items: center;
  `
const ToolBox = styled.div`
  background-color: orange;
  width: ${props => props.W}px;
  height: ${props => props.H}px;
  display: ${props => props.isOpen ? 'flex' : 'none'};
  flex-direction: ${props => props.isLeft ? 'column' : 'row'};
  align-items: center;
  justify-content: center;
  z-index: 99;
  `

const Tool = styled.div`
  background-color: teal;
  width: 50px;
  height: 50px;
  margin: 10px 10px;
  `

class Palette extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  handleOpen = (e) => {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    let isLeft = this.props.location === 'palette_left';
    let W = 500
    let H = 100

    let tools = ['crow', 'sprinkle', 'farm'].map((item, i) => (
      <Tool key={i}>{item}</Tool>
    ))

    return (
      <Container location={this.props.location} isLeft={isLeft}>
        <ToolBox W={isLeft ? H : W} H={isLeft ? W : H} isOpen={this.state.isOpen} isLeft={isLeft}>
          {tools}
        </ToolBox>
        <ArrowButton handler={this.handleOpen} orient={isLeft ? 'right' : 'down'}></ArrowButton>
      </Container>
    )
  }
}

export default Palette