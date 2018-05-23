import React, { Component } from 'react'

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
    let isLeft = this.props.location == 'palette_left';
    let W = '500px'
    let H = '100px'

    let containerStyle = {
      backgroundColor: 'red',
      gridArea: this.props.location,
      placeSelf: isLeft ? 'center start' : 'start center',

      display: 'flex',
      flexDirection: isLeft ? 'row' : 'column',
      justifyContent: 'start',
      alignItems: 'center'
    }

    let buttonStyle = {
      width: isLeft ? '10px' : '20px',
      height: isLeft ? '20px' : '10px',
      backgroundColor: 'yellow',
      cursor: 'pointer',
      zIndex: 99
    }

    let paletteStyle = {
      backgroundColor: 'orange',
      width: isLeft ? H : W,
      height: isLeft ? W : H,
      display: this.state.isOpen ? 'block' : 'none',
      zIndex: 99
    }

    return (
      <div style={containerStyle}>
        <div style={paletteStyle}></div>
        <div style={buttonStyle} onClick={this.handleOpen}></div>
      </div>
    )
  }
}

export default Palette