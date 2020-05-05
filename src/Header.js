import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';
import './Header.css';

import Slider from 'rc-slider';

class Header extends Component {
  state = {
    format: 'hex',
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ format: e.target.value }, () =>
      this.props.changeFormat(this.state.format)
    );
  };
  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;
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
            {/* hex, rgb, rgba */}
            <MenuItem value='hex'>HEX - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
        {/* <Select
              labelId='demo-simple-select-filled-label'
              id='demo-simple-select-filled'
              value={age}
              onChange={handleChange}
              >
              <MenuItem value=''>
              <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select> */}
      </header>
    );
  }
}

export default Header;
