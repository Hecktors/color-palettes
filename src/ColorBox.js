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
    const { hex, name } = this.props;
    return (
      <div className='ColorBox' style={{ background: hex }}>
        <div
          className={`copy-overlay ${this.state.copied && 'show'}`}
          style={{ background: hex }}
        />
        <div className={`copy-msg ${this.state.copied && 'show'}`}>
          <h1>COPIED!</h1>
          <p>{hex}</p>
        </div>
        <div className='copy-container'>
          <div className='box-content'>
            <span>{name}</span>
          </div>
          <CopyToClipboard onCopy={this.handleCopy} text={hex}>
            <button className='copy-button'>Copy</button>
          </CopyToClipboard>
        </div>
        <span className='see-more'>More</span>
      </div>
    );
  }
}

export default ColorBox;
