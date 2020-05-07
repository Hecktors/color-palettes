import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import SimpleSnackbar from './SimpleSnackbar';
import 'rc-slider/assets/index.css';
import './Header.css';

import Slider from 'rc-slider';

class Header extends Component {
  state = {
    format: 'hex',
    showSnackbar: false,
  };

  handleChange = (e) => {
    this.setState({ format: e.target.value, showSnackbar: true }, () => {
      this.props.changeFormat(this.state.format);
    });
  };

  closeSnackbar = () => {
    this.setState({ showSnackbar: false });
  };

  render() {
    const { level, changeLevel } = this.props;
    const { format, showSnackbar } = this.state;
    return (
      <header className='Header'>
        <div className='logo'>
          <a href='/'>color palette</a>
        </div>
        <div className='slider-container'>
          <span>Level: {level}</span>
          <div className='slider'>
            <Slider
              onChange={changeLevel}
              min={100}
              max={900}
              defaultValue={level}
              step={100}
            />
          </div>
        </div>
        <div className='select-container'>
          <Select onChange={this.handleChange} value={format}>
            <MenuItem value='hex'>HEX - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>

        <SimpleSnackbar
          format={format}
          open={showSnackbar}
          close={this.closeSnackbar}
        />
      </header>
    );
  }
}

export default Header;
