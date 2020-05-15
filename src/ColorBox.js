import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './styles/ColoBoxStyles';

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
    return (
      <CopyToClipboard onCopy={this.handleCopy} text={color}>
        <div className={classes.ColorBox} style={{ background: color }}>
          <div
            className={`${classes.copyOverlay} ${
              this.state.copied ? classes.showOverlay : ''
            }`}
            style={{ background: color }}
          />
          <div
            className={
              this.state.copied
                ? [classes.copyMsg, classes.showMsg].join(' ')
                : classes.copyMsg
            }
          >
            <h1 className={classes.copyText}>COPIED!</h1>
            <p className={classes.copyText}>{color}</p>
          </div>
          <div className='copy-container'>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showLink && (
            <Link
              className={classes.seeMore}
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
