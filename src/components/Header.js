import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowBack from '@material-ui/icons/ArrowBack'
import Slider from 'rc-slider';
import SimpleSnackbar from './SimpleSnackbar';

import 'rc-slider/assets/index.css';
import styles from '../styles/HeaderStyles';

function Header({ history, paletteName, emoji, level, changeLevel, showSlider, changeFormat, classes }) {
  const [format, setFormat] = useState('hex')
  const [snackbarIsOpen, setSnackbarIsOpen] = useState(false)

  useEffect(() => { changeFormat(format) }, [format, changeFormat]);

  const handleChange = (e) => {
    setFormat(e.target.value);
    setSnackbarIsOpen(true);
  };

  const closeSnackbar = () => setSnackbarIsOpen(false);

  return (
    <header className={classes.Header}>
      <div className={classes.logo}>
        <ArrowBack onClick={() => history.goBack()} />
        {/* <Link to='/palette'>{paletteName} {emoji}</Link> */}
        {paletteName} {emoji}
      </div>
      {showSlider && (
        <div className={classes.sliderContainer}>
          <span>Level: {level}</span>
          <div className={classes.slider}>
            <Slider
              onChange={(value) => changeLevel(value)}
              min={100}
              max={900}
              defaultValue={level}
              step={100}
            />
          </div>
        </div>
      )}
      <div className={classes.selectContainer}>
        <Select onChange={handleChange} value={format}>
          <MenuItem value='hex'>HEX - #ffffff</MenuItem>
          <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
          <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
        </Select>
      </div>

      <SimpleSnackbar
        format={format}
        isVisible={snackbarIsOpen}
        close={closeSnackbar}
      />
    </header >
  );
}

export default withRouter(withStyles(styles)(Header));
