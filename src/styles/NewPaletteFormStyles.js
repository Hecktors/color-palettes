import { DRAWER_WIDTH } from '../contansts';
import sizes from './sizes';
import bg from './bg.svg'

export default theme => ({
  root: {
    height: '100vh',
    display: 'flex',
  },
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
    height: '100%',
    display: "flex",
    alignItems: "center",
    backgroundColor: '#030f34',
    backgroundImage: `url(${bg})`,
    /* background by SVGBackgrounds.com */
    color: 'var(--main-color)'
  },
  drawerHeader: {
    width: "100%",
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    '& svg': {
      color: 'var(--main-color)'
    },
  },
  content: {
    height: 'calc(100vh - 64px)',
    flexGrow: 1,
    padding: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -DRAWER_WIDTH,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  container: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  title: {
    fontSize: '2rem',
    [sizes.down('xs')]: {
      fontSize: '1.5rem'
    }
  },
  buttons: {
    width: "100%",
  },
  button: {
    fontSize: "0.8rem",
    width: "50%",
    padding: '0.2rem 0',
    [sizes.down('xs')]: {
    },
  },
});