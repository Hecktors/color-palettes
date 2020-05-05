import React, { Component } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class ColorBox extends Component {
  state = {
    copied: false,
  };

  handleCopy = () => {
    this.setState({ copied: true }, () =>
      setTimeout(() => this.setState({ copied: false }), 1500)
    );
  };

  render() {
    const { name, color } = this.props;
    return (
      <div className='ColorBox' style={{ background: color }}>
        <div
          className={`copy-overlay ${this.state.copied && 'show'}`}
          style={{ background: color }}
        />
        <div className={`copy-msg ${this.state.copied && 'show'}`}>
          <h1>COPIED!</h1>
          <p>{color}</p>
        </div>
        <div className='copy-container'>
          <div className='box-content'>
            <span>{name}</span>
          </div>
          <CopyToClipboard onCopy={this.handleCopy} text={color}>
            <button className='copy-button'>Copy</button>
          </CopyToClipboard>
        </div>
        <span className='see-more'>More</span>
      </div>
    );
  }
}

export default ColorBox;
