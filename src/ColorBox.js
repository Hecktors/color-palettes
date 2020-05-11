import React, { Component } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

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
    const { name, color, id, paletteId, showLink } = this.props;
    return (
      <CopyToClipboard onCopy={this.handleCopy} text={color}>
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
            <button className='copy-button'>Copy</button>
          </div>
          {showLink && (
            <Link
              to={`/palette/${paletteId}/${id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span className='see-more'>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
