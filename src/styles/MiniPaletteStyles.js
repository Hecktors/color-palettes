export default {
  root: {
    width: '300px',
    maxWidth: '100%',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #5f54fb4a',
    padding: '1rem',
    background: '#1a1a4d',
    position: 'relative',
    borderRadius: '2px',
    cursor: 'pointer',
    margin: 'auto',
    '&:hover svg': {
      opacity: 1
    },
    // itemEnter: {
    //   opacity: 0,
    // },
    // itemEnterActive: {
    //   opacity: 1,
    //   transition: 'opacity 500ms ease-in',
    // },
    // itemExit: {
    //   opacity: 1,
    // },
    // itemExitActive: {
    //   opacity: 0,
    //   transition: 'opacity 500ms ease-in',
    // },
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
