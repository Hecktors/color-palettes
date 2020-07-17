import { DRAWER_WIDTH } from '../contansts';
import sizes from './sizes';

export default theme => ({
  root: {
    // color: 'var(--main-color)',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
    backgroundColor: 'transparent',
    color: 'var(--main-color)',

  },
  appBarShift: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    maxWidth: '100%',
    marginLeft: DRAWER_WIDTH,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    padding: '0.5rem'
  },
  title: {
    fontSize: '0.8rem'
  },
  menuButton: {
    marginRight: 20,
    [sizes.down('xs')]: {
      marginRight: 5
    }
  },
  navBtns: {
    marginRight: "1rem",
    [sizes.down('xs')]: {
      marginRight: 5
    }
  },
  navBtn: {
    minWidth: 'auto',
    margin: "0 0.5rem",
    [sizes.down('xs')]: {
      margin: '0 0.2rem',
      padding: '0 0.5rem'
    }

  }
});