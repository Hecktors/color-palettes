import React, { Component } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';

class ColorBox extends Component {
  state = {
    copied: false,
  };

  handleCopy = (br) => {
    this.setState({ copied: true }, () =>
      setTimeout(() => this.setState({ copied: false }), 1500)
    );
  };

  render() {
    const { name, color, id, paletteId, showLink } = this.props;
    const isDark = chroma(color).luminance() < 0.2;
    const isLight = chroma(color).luminance() > 0.5;

    console.log(chroma(color).luminance());
    return (
      <CopyToClipboard onCopy={this.handleCopy} text={color}>
        <div className={`ColorBox `} style={{ background: color }}>
          <div
            className={`copy-overlay ${this.state.copied ? 'show' : ''}`}
            style={{ background: color }}
          />
          <div
            className={`copy-msg ${this.state.copied ? 'show' : ''}${
              isLight ? ' dark-text' : ''
            }`}
          >
            <h1>COPIED!</h1>
            <p>{color}</p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
              <span className={isDark ? 'light-text' : ''}>{name}</span>
            </div>
            <button className={`copy-button ${isLight ? 'dark-text' : ''}`}>
              Copy
            </button>
          </div>
          {showLink && (
            <Link
              className='see-more'
              to={`/palette/${paletteId}/${id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span className={isLight ? 'dark-text' : ''}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
