import React, { Component } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class ColorBox extends Component {
  render() {
    const { color, name } = this.props;
    return (
      <div className='ColorBox' style={{ background: color }}>
        <div className='copy-container'>
          <div className='box-content'>
            <span>{name}</span>
          </div>
          <CopyToClipboard text={color}>
            <button className='copy-button'>Copy</button>
          </CopyToClipboard>
        </div>
        <span className='see-more'>More</span>
      </div>
    );
  }
}

export default ColorBox;
