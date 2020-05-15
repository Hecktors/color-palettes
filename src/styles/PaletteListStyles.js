export default {
  root: {
    backgroundColor: 'blue',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  nav: {
    width: '100%',
    height: '50px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
    '& a': {
      color: '#fff',
      textDecoration: 'underline',
    },
  },
  palettes: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%',
  },
};
