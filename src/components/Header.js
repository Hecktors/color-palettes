import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import SimpleSnackbar from './SimpleSnackbar';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import styles from '../styles/HeaderStyles';

function Header({ paletteName, emoji, level, changeLevel, showSlider, changeFormat, classes }) {
  const [format, setFormat] = useState('hex')
  const [showSnackbar, setShowSnackbar] = useState(false)

  useEffect(() => { changeFormat(format) }, [format, changeFormat]);

  const handleChange = (e) => {
    setFormat(e.target.value);
    setShowSnackbar(true);
  };

  const closeSnackbar = () => setShowSnackbar(false);

  return (
    <header className={classes.Header}>
      <div className={classes.logo}>
        <Link to='/palette'>{paletteName} {emoji}</Link>
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
        open={showSnackbar}
        close={closeSnackbar}
      />
    </header>
  );
}

export default withStyles(styles)(Header);
