import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
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
  title: {
    display: "flex"
  }
}));

NewPaletteForm.defaultProps = {
  maxColors: 20
}

function NewPaletteForm(props) {
  const { maxColors, palettes } = props
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [colors, setColors] = useState(props.palettes[0].colors);
  const paletteIsFull = colors.length >= maxColors



  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addNewColor = (newColor) => {
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
        <Typography variant='h4'>Design Your Palette</Typography>
        <div>
          <Button variant='contained' color='secondary' onClick={clearPalette}>
            Clear Palette
          </Button>
          <Button
            disabled={paletteIsFull}
            variant='contained'
            color='primary'
            onClick={generateRandomColor}
          >
            {paletteIsFull ? "Palette Full" : "Random Color"}
          </Button>
        </div>
        <ColorPickerForm colors={colors} maxColors={maxColors} addNewColor={addNewColor} paletteIsFull={paletteIsFull} />
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

export default NewPaletteForm;
