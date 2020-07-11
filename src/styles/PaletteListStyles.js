import sizes from './sizes';
import bg from './bg.svg';

export default {
  root: {
    height: '100vh',
    overflow: 'scroll',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#030f34',
    backgroundImage: `url(${bg})`,
    /* background by SVGBackgrounds.com */
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    [sizes.down('xl')]: {
      width: '80%'
    },
    [sizes.down('xs')]: {
      width: '75%'
    },
  },
  nav: {
    width: '100%',
    height: '50px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '3rem',
    // color: '#fff',
    [sizes.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      height: '60px'
    },
    '& h1': {
      [sizes.down('sm')]: {
        fontSize: '1rem',
      },
    },
    '& a': {
      // color: '#fff',
      textDecoration: 'underline',
      fontSize: '0.8rem'
    },
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%',
    [sizes.down('md')]: {
      gridTemplateColumns: 'repeat(2, 47.5%)',
    },
    [sizes.down('xs')]: {
      gridTemplateColumns: 'repeat(1 , 100%)',
      gridGap: '1%',
    },
  }
};
