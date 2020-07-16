import sizes from './sizes';
import bg from './bg.svg';

export default {
  '@global': {
    '.fade-exit': {
      opacity: 1,
    },
    '.fade-exit-active': {
      opacity: 0,
    }
  },
  root: {
    color: 'white',
    height: '100vh',
    overflowY: 'scroll',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#030f34',
    backgroundImage: `url(${bg})`,
    transition: 'opacity 0.5s ease-out'
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
      width: '100%'
    },
  },
  nav: {
    width: '100%',
    height: '50px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '3rem',
    [sizes.down('sm')]: {
      padding: '1rem 2rem',
      marginBottom: '2rem',
    },
    '& h1': {
      [sizes.down('sm')]: {
        fontSize: '1em',
      },
    },
    '& a': {
      textDecoration: 'underline',
      fontSize: '0.8rem'
    },
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 28.666%)',
    gridGap: '7%',
    // [sizes.down('md')]: {
    // },
    [sizes.down('md')]: {
      gridTemplateColumns: 'repeat(2, 49%)',
      gridGap: '2%',
    },
    [sizes.down('xs')]: {
      gridTemplateColumns: 'repeat(1 , 100%)',
      gridGap: '1%',
    },
  }
}
