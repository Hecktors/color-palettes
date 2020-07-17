import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/ColorBoxStyles';

function ColorBox({ name, color, id, paletteId, linkIsShown, classes }) {
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    isCopied && setTimeout(() => setIsCopied(false), 1500);
  }, [isCopied])

  return (
    <CopyToClipboard onCopy={() => setIsCopied(true)} text={color} >
      <div className={classes.ColorBox} style={{ background: color }}>
        <div
          className={`${classes.copyOverlay} ${
            isCopied ? classes.showOverlay : ''
            }`}
          style={{ background: color }}
        />
        <div
          className={
            isCopied
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
        {linkIsShown && (
          <Link
            className={classes.seeMore}
            to={`/palette/${paletteId}/${id}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span>More</span>
          </Link>
        )}
      </div>
    </CopyToClipboard >
  );
}

export default withStyles(styles)(ColorBox);
