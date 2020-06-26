import React, { useState } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import PaletteFormNav from './PaletteFormNav';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DraggableColorBoxList from './DraggableColorBoxList';
import arrayMove from 'array-move';
import ColorPickerForm from './ColorPickerForm';


const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  // hide: {
  //   display: 'none',
  // },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    display: "flex",
    alignItems: "center   "
  },
  drawerHeader: {
    width: "100%",
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    height: 'calc(100vh - 64px)',
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
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
    height: "100%"
  },
  buttons: {
    width: "100%"
  },
  button: {
    width: "50%"
  }
});

NewPaletteForm.defaultProps = {
  maxColors: 20
}

function NewPaletteForm(props) {
  const { classes, maxColors, palettes } = props
  const [open, setOpen] = useState(true);
  const [colors, setColors] = useState(props.palettes[0].colors);
  const paletteIsFull = colors.length >= maxColors

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addNewColor = (newColor) => {
    console.log("colors", colors)
    console.log("newColor", newColor)
    setColors([...colors, newColor]);
  };

  const deleteColor = (name) => {
    setColors(colors.filter((color) => color.name !== name));
  };

  const onSortEnd = ({ oldIndex, newIndex }) =>
    setColors(arrayMove(colors, oldIndex, newIndex));

  const handleSubmit = (paletteName) => {
    const newPalette = {
      paletteName,
      id: paletteName.toLowerCase().replace(/ /g, '-'),
      emoji: '🤙',
      colors: colors,
    };
    props.savePalette(newPalette);
    props.history.push('/');
  };

  const clearPalette = () => {
    setColors([]);
  };

  const generateRandomColor = () => {
    const allColors = palettes.map((palette) => colors).flat();
    const randomColor = allColors[Math.floor(Math.random() * allColors.length)];

    setColors([...colors, { ...randomColor, name: randomColor.name + Math.floor(Math.random() * 100) }]);
  };
  console.log("colors:", colors)
  return (
    <div className={classes.root}>
      <PaletteFormNav
        open={open}
        classes={classes}
        colors={colors}
        palettes={palettes}
        handleSubmit={handleSubmit}
        setOpen={() => setOpen(true)}

      />

      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.container}>
          <Typography variant='h4' gutterBottom>Design Your Palette</Typography>
          <div className={classes.buttons}>
            <Button
              className={classes.button}
              variant='contained'
              color='secondary'
              onClick={clearPalette}>
              Clear Palette
          </Button>
            <Button
              className={classes.button}
              variant='contained'
              color='primary'
              disabled={paletteIsFull}
              onClick={generateRandomColor}
            >
              {paletteIsFull ? "Palette Full" : "Random Color"}
            </Button>
          </div>
          <ColorPickerForm colors={colors} maxColors={maxColors} addNewColor={addNewColor} paletteIsFull={paletteIsFull} />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorBoxList
          colors={colors}
          deleteColor={deleteColor}
          onSortEnd={onSortEnd}
          axis='xy'
        />
      </main>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
// export default withStyles(styles)(NewPaletteForm);
