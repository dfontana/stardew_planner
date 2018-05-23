import React, { Component } from 'react'

class Palette extends Component {
  constructor(props) {
    super(props)
    this.style = {
      backgroundColor: 'yellow',
      gridArea: props.location
    }
  }

  render() {
    return (
      <div style={this.style}>Suh dude.</div>
    )
  }
}

export default Palette