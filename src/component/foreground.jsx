import React, { Component } from 'react';
import { drawStatic, setScale, tile, scrn } from './util'

const canvasStyles = {
  position: 'absolute',
  zIndex: 2
}

class Foreground extends Component {
  componentDidMount() {
    let ctx = this.refs.canvas.getContext("2d");
    setScale(this.refs.canvas, ctx);
    drawStatic(ctx, '/img/farm_house.png', 59, 8, 9, 9);
    drawStatic(ctx, '/img/farm_greenhouse.png', 25, 8, 7, 8);
    this.drawBoundaries(this.refs.canvas);
  }

  drawBoundaries = (canvas) => {
    console.time('Path SVG Construction')
    let s = "M0,0,L640,0,L640,32,L656,32,L656,96,L608,96,L608,128,L496,128,L496,64,L464,64,L464,80,L448,80,L448,96,L432,96,L432,112,L352,112,L352,128,L336,128,L336,176,L336,176,L320,176,L320,224,L336,224,L336,272,L272,272,L272,240,L240,240,L240,256,L160,256,L160,192,L192,192,L192,96,L176,96,L176,80,L176,128,L96,128,L96,80,L80,80,L80,176,L96,176,L96,192,L160,192,L160,288,L176,288,L176,304,L256,304,L256,288,L272,288,L272,272,L336,272,L336,352,L352,352,L352,368,L384,368,L384,448,L304,448,L304,464,L288,464,L288,480,L272,480,L272,544,L208,544,L192,544,L192,528,L144,528,L144,544,L112,544,L112,560,L80,560,L80,576,L0,576,L0,0zM672,0,L1264,0,L1264,240,L1248,240,L1248,192,L1232,192,L1232,176,L1248,176,L1248,160,L1216,160,L1216,176,L1184,176,L1184,160,L1168,160,L1104,160,L1104,144,L1088,144,L1088,128,L928,128,L928,112,L912,112,L912,96,L896,96,L896,80,L816,80,L816,112,L736,112,L736,96,L656,96,L656,32,L672,32,L672,0zM1232,304,L1280,304,L1280,1040,L1040,1040,L1040,1008,L1024,1008,L1024,960,L1008,960,L1008,928,L992,928,L992,912,L976,912,L976,896,L784,896,L784,832,L800,832,L800,816,L832,816,L832,784,L928,784,L928,736,L912,736,L912,656,L976,656,L976,704,L992,704,L992,720,L1008,720,L1008,736,L1040,736,L1040,768,L1072,768,L1072,784,L1152,784,L1152,768,L1168,768,L1168,752,L1184,752,L1184,672,L1168,672,L1168,656,L1152,656,L1152,640,L1104,640,L1104,592,L1072,592,L1072,576,L1024,576,L1024,496,L1072,496,L1072,448,L1232,448,L1232,304zM384,368,L464,368,L464,384,L512,384,L512,400,L544,400,L544,448,L640,448,L640,464,L752,464,L752,448,L768,448,L768,384,L784,384,L784,368,L816,368,L816,352,L864,352,L864,368,L896,368,L896,384,L912,384,L912,416,L928,416,L928,432,L944,432,L944,448,L1008,448,L1008,496,L1024,496,L1024,576,L1008,576,L1008,592,L992,592,L992,608,L992,608,L976,608,L976,656,L912,656,L912,640,L896,640,L896,608,L880,608,L880,592,L848,592,L848,576,L592,576,L592,592,L560,592,L560,608,L544,608,L544,624,L528,624,L528,624,L528,640,L512,640,L512,656,L416,656,L416,672,L400,672,L400,720,L416,720,L416,736,L448,736,L448,752,L464,752,L464,784,L480,784,L480,816,L560,816,L560,800,L576,800,L576,784,L688,784,L688,800,L704,800,L704,816,L736,816,L736,832,L784,832,L784,896,L736,896,L736,912,L720,912,L720,928,L672,928,L672,944,L656,944,L656,960,L640,960,L640,1040,L464,1040,L448,1040,L448,912,L432,912,L432,896,L384,896,L384,864,L368,864,L368,848,L256,848,L256,864,L176,864,L176,880,L48,880,L48,944,L80,944,L80,960,L96,960,L96,976,L112,976,L112,992,L432,992,L432,1008,L448,1008,L448,1040,L0,1040,L0,784,L32,784,L32,800,L80,800,L80,784,L224,784,L224,768,L288,768,L288,752,L304,752,L304,672,L288,672,L288,656,L272,656,L272,640,L240,640,L240,624,L224,624,L224,608,L208,608,L208,544,L272,544,L272,560,L288,560,L288,576,L304,576,L304,592,L464,592,L464,576,L480,576,L480,560,L496,560,L496,480,L480,480,L480,464,L464,464,L464,448,L384,448,L384,368zM0,576,L48,576,L48,608,L64,608,L64,624,L96,624,L96,640,L112,640,L112,752,L80,752,L80,768,L48,768,L48,784,L0,784,L0,576zM400,160L512,160L512,256L400,256zM944,176L1088,176L1088,256L1104,256L1104,272L944,272z"
    let p = new Path2D(s);
    console.timeEnd('Path SVG construction')
    console.timeEnd('Path construction')
    let p2 = new Path2D();

    // Grandpa's Grave
    p2.moveTo(scrn(12), scrn(13))
    p2.lineTo(scrn(13), scrn(13))
    p2.lineTo(scrn(13), scrn(7))
    p2.lineTo(scrn(12), scrn(7))
    p2.lineTo(scrn(12), scrn(9))
    p2.lineTo(scrn(7), scrn(9))
    p2.lineTo(scrn(7), scrn(6))
    p2.lineTo(scrn(6), scrn(6))
    p2.lineTo(scrn(6), scrn(12))
    p2.lineTo(scrn(7), scrn(12))
    p2.lineTo(scrn(7), scrn(13))

    // Connector from Grave to Greenhouse
    p2.moveTo(scrn(18), scrn(18))
    p2.lineTo(scrn(18), scrn(16))
    p2.lineTo(scrn(16), scrn(16))
    p2.lineTo(scrn(16), scrn(17))
    p2.lineTo(scrn(11), scrn(17))
    p2.lineTo(scrn(11), scrn(19))
    p2.lineTo(scrn(12), scrn(19))
    p2.lineTo(scrn(12), scrn(20))
    p2.lineTo(scrn(17), scrn(20))
    p2.lineTo(scrn(17), scrn(19))
    p2.lineTo(scrn(18), scrn(19))

    // Top Bridge into Farm
    p2.moveTo(scrn(41), scrn(1))
    p2.lineTo(scrn(41), scrn(3))
    p2.lineTo(scrn(43), scrn(3))
    p2.lineTo(scrn(43), scrn(1))

    // Farm House Isalnd
    p2.moveTo(scrn(22), scrn(18))
    p2.lineTo(scrn(22), scrn(15))
    p2.lineTo(scrn(21), scrn(15))
    p2.lineTo(scrn(21), scrn(12))
    p2.lineTo(scrn(22), scrn(12))
    p2.lineTo(scrn(22), scrn(9))
    p2.lineTo(scrn(23), scrn(9))
    p2.lineTo(scrn(23), scrn(8))
    p2.lineTo(scrn(28), scrn(8))
    p2.lineTo(scrn(28), scrn(7))
    p2.lineTo(scrn(29), scrn(7))
    p2.lineTo(scrn(29), scrn(6))
    p2.lineTo(scrn(30), scrn(6))
    p2.lineTo(scrn(30), scrn(5))
    p2.lineTo(scrn(32), scrn(5))
    p2.lineTo(scrn(32), scrn(9))
    p2.lineTo(scrn(39), scrn(9))

    p2.closePath();
    console.timeEnd('Path Method construction')

    this.bounds = p2

    let ctx = canvas.getContext("2d")
    ctx.fillStyle = 'rgba(0,0,255,0.5)'
    ctx.fill(p2);
    ctx.fillStyle = 'rgba(255,0,0,0.5)'
    ctx.fill(p);
    
  }

  handleClick = (e) => {
    e = e.nativeEvent;
    let ctx = this.refs.canvas.getContext("2d")

    // isPointInPath uses an untransformed path space, so to determine if click
    // occurs within bounds, we have to scale the mouse coordiantes.
    let scale = window.devicePixelRatio || 1
    let isValid = ctx.isPointInPath(this.bounds, e.offsetX * scale, e.offsetY * scale);
    console.log(`(${e.offsetX}, ${e.offsetY}): ${isValid}`)
  }

  render(){
    return (
      <canvas ref="canvas" style={canvasStyles} onMouseMove={this.props.onMouseMove} 
              onMouseLeave={this.props.onMouseLeave} onClick={this.handleClick} />
    );
  }
}

export default Foreground;