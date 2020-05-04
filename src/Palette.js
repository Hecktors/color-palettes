import React, { Component } from 'react';
import './Palette.css';
import ColorBox from './ColorBox';
import { v4 as uuid } from 'uuid';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

// import Tooltip from 'rc-tooltip';

// const createSliderWithTooltip = Slider.createSliderWithTooltip;
// const Range = createSliderWithTooltip(Slider.Range);
// const Handle = Slider.Handle;

// const handle = (props) => {
//   const { value, dragging, index, ...restProps } = props;
//   return (
//     <Tooltip
//       prefixCls='rc-slider-tooltip'
//       overlay={value}
//       visible={dragging}
//       placement='top'
//       key={index}
//     >
//       <Handle value={value} {...restProps} />
//     </Tooltip>
//   );
// };

class Palette extends Component {
  state = {
    level: 500,
  };

  componentDidMount() {
    this.setState({ level: 500 });
  }

  handleChange = (level) => {
    this.setState({ level });
    console.log(level);
  };
  render() {
    const colors = this.props.palette.colors;
    const level = this.state.level;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox key={uuid()} {...color} />
    ));
    // const wrapperStyle = { width: 400, margin: 50 };
    return (
      <div className='Palette'>
        {/* <div style={wrapperStyle}> */}
        {/* <p>Slider with fixed values</p> */}
        <Slider
          onChange={this.handleChange}
          min={100}
          max={900}
          defaultValue={level}
          step={100}
          // marks={{ 20: 20, 40: 40, 100: 100 }}
        />
        {/* </div> */}
        {/* Navbar goes here */}
        <div className='Palette-colors'>{colorBoxes}</div>
        {/* footer eventually */}
      </div>
    );
  }
}

export default Palette;
