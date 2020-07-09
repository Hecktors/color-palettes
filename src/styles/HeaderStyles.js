import sizes from './sizes'

export default {
  Header: {
    maxWidth: '100%',
    overflow: 'hidden',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '10%',
    fontSize: '18px',
    [sizes.down('xs')]: {
      fontSize: '10px',
    }
  },
  logo: {
    padding: ' 0 10px',
    fontSize: '20px',
    // backgroundColor: '#eceff1',
    fontFamily: "'Roboto', sans-serif",
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    [sizes.down('sm')]: {
      fontSize: '12px',
      padding: ' 0 5px',
      height: 'auto',
      // backgroundColor: 'transparent'
    },
    '& a': {
      textDecoration: 'none',
      color: '#000',
    },
  },
  sliderContainer: {
    minWidth: '40%',
    paddingLeft: '5px',
    [sizes.down('xs')]: {
      order: 1,
      width: '100%',
      paddingBottom: '10px'
    },
  },
  slider: {
    width: '100%',
    margin: '0 10px',
    display: 'inline-block',
    '& rc-slider-track': {
      backgroundColor: 'transparent',
    },
    '& rc-slider-rail': {
      height: '8px',
    },
    '& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover, .rc-slider-handle:focus': {
      backgroundColor: 'green',
      outline: 'none',
      border: '2px solid green',
      boxShadow: 'none',
      width: '13px',
      height: '13px',
      marginLeft: '-7px',
      marginTop: '-3px',
    },
  },
  selectContainer: {
    // paddingRight: '6px',
    textAlign: 'right',
    // minWidth: '30%',
    // marginLeft: 'auto',
    // marginRight: '1rem',
  },
};
