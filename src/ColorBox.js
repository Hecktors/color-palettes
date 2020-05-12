import React, { Component } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';

const styles = {
  textLighter: {
    color: (props) => (chroma(props.color).luminance() > 0.6 ? '#333' : '#fff'),
  },
  textDarker: {
    color: (props) =>
      chroma(props.color).luminance() < 0.15 ? '#fff' : '#212121',
  },
};

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
    const { name, color, id, paletteId, showLink, classes } = this.props;

    console.log(chroma(color).luminance());
    return (
      <CopyToClipboard onCopy={this.handleCopy} text={color}>
        <div className={`ColorBox `} style={{ background: color }}>
          <div
            className={`copy-overlay ${this.state.copied ? 'show' : ''}`}
            style={{ background: color }}
          />
          <div className={`copy-msg ${this.state.copied ? 'show' : ''}`}>
            <h1 className={classes.textLighter}>COPIED!</h1>
            <p className={classes.textLighter}>{color}</p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
              <span className={classes.textDarker}>{name}</span>
            </div>
            <button className={`copy-button ${classes.textLighter}`}>
              Copy
            </button>
          </div>
          {showLink && (
            <Link
              className={`see-more ${classes.textLighter}`}
              to={`/palette/${paletteId}/${id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
