export default {
  root: {
    width: '260px',
    backgroundColor: '#fff',
    padding: '0.5rem',
    position: 'relative',
    // border: '1px solid #999',
    borderRadius: '5px',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover svg': {
      opacity: 1
    }
  },
  colorBoxes: {
    height: '140px',
    width: '100%',
    borderRadius: '3px',
    overflow: 'hidden',
  },
  colorBox: {
    display: 'inline-block',
    width: '20%',
    height: '25%',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-3.5px',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '0.5rem',
    fontSize: '1rem',
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
    // visibility: 'hidden',
  }

};
