import React, { Component } from 'react';
import './Palette.css';
import ColorBox from './ColorBox';
import { v4 as uuid } from 'uuid';
import Header from './Header';

class Palette extends Component {
  state = {
    level: 500,
  };

  componentDidMount() {
    this.setState({ level: 500 });
  }

  changeLevel = (level) => {
    this.setState({ level });
    console.log(level);
  };

  render() {
    const colors = this.props.palette.colors;
    const level = this.state.level;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox key={uuid()} {...color} />
    ));
    return (
      <div className='Palette'>
        <Header changeLevel={this.changeLevel} level={level} />
        {/* Navbar goes here */}
        <div className='Palette-colors'>{colorBoxes}</div>
        {/* footer eventually */}
      </div>
    );
  }
}

export default Palette;
