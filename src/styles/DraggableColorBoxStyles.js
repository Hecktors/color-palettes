import chroma from 'chroma-js';
import sizes from './sizes';

export default {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-5px',
    '&:hover svg': {
      opacity: 1,
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: '20%'
    },
    [sizes.down('md')]: {
      width: '33.33%',
      height: '14.28%'
    },
    [sizes.down('sm')]: {
      width: '50%',
      height: '10%'
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: '5%'
    },
  },
  btnDelete: {
    position: 'absolute',
    top: '0',
    right: '0',
    zIndex: '99',
    height: '40px',
    width: '30px',
    background: '#eb3d30',
    color: 'white',
    opacity: 0,
    transition: "opacity 0.2s ease-in-out"
  },
  boxContent: {
    color: (props) =>
      chroma(props.color).luminance() <= 0.08 ? 'white' : 'black',
    position: 'absolute',
    width: '100%',
    left: '0px',
    bottom: '0px',
    padding: '10px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between',
  },
};
