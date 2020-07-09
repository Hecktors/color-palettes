export default {
  root: {
    border: '1px solid #fffefe4a',
    padding: '0.5rem',
    position: 'relative',
    borderRadius: '2px',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover svg': {
      opacity: 1
    },
  },
  colorBoxes: {
    height: '130px',
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
    paddingBottom: '0.3rem',
    fontSize: '1rem',
    color: 'white'
  },
  emoji: {},
  btnDelete: {
    position: 'absolute',
    bottom: '0',
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
