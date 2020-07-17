export default {
  root: {
    width: '300px',
    maxWidth: '100%',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    background: '#ddf',
    color: '#212121',

    position: 'relative',
    borderRadius: '2px',
    cursor: 'pointer',
    margin: 'auto',
    '&:hover svg': {
      opacity: 1
    },
    fadeEnter: {
      opacity: 0,
    },
    fadeEnterActive: {
      opacity: 1,
      transition: 'opacity 500ms ease-in',
    },
    fadeExit: {
      opacity: 1,
    },
    fadeExitActive: {
      opacity: 0,
      transition: 'opacity 500ms ease-in',
    },
  },
  colorBoxes: {
    flexGrow: 1,
    position: 'relative',
    height: '100%',
    borderRadius: '3px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  colorBox: {
    display: 'inline-block',
    width: '20%',
    height: '25%',
    position: 'relative'

  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '0.1rem',
    fontSize: '0.8rem',
    margin: '0.5rem',
  },
  emoji: {},
  btnDelete: {
    position: 'absolute',
    top: '0',
    right: '0',
    zIndex: 99,
    height: '40px',
    width: '30px',
    background: '#eb3d30',
    color: 'white',
    opacity: 0,
    transition: "opacity 0.2s ease-in-out"
  }
};
