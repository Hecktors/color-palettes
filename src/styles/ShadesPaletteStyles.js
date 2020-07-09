import sizes from './sizes'

export default {
  Palette: {
    height: '100vh',
    overflow: 'hidden',
  },
  ShadesPalette: {
    height: ' 90%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  goBack: {
    width: '20%',
    height: '50%',
    position: 'relative',
    cursor: 'pointer',
    backgroundColor: '#212121',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& a': {
      width: '100px',
      textAlign: 'center',
      outline: 'none',
      fontSize: '1rem',
      lineHeight: '30px',
      textTransform: 'uppercase',
      border: 'none',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      color: '#fff',
    },
    [sizes.down("lg")]: {
      width: "10%",
      height: "100%"
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: "10%"
    }
  },
};
