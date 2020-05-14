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
    margin: '0 auto',
    position: 'relative',
    cursor: 'pointer',
    backgroundColor: '#212121',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& a': {
      width: '100px',
      height: '30px',
      textAlign: 'center',
      outline: 'none',
      fontSize: '1rem',
      lineHeight: '30px',
      textTransform: 'uppercase',
      border: 'none',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      color: '#fff',
    },
  },
};
