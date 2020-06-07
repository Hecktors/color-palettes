import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Typography from '@material-ui/core/Typography';
import { ChromePicker } from 'react-color';
import Button from '@material-ui/core/Button';
import DraggableColorBoxList from './DraggableColorBoxList';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import arrayMove from 'array-move';

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
}));

NewPaletteForm.defaultProps = {
  maxColors: 20
}

function NewPaletteForm(props) {
  const { maxColors } = props
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [newColor, setNewColor] = useState('#88f');
  const [newColorName, setNewColorName] = useState('blue');
  const [colors, setColors] = useState(props.palettes[0].colors);
  const [newPaletteName, setNewPaletteName] = useState('');
  const paletteIsFull = colors.length >= maxColors

  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
      colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );
    ValidatorForm.addValidationRule('isColorUnique', () =>
      colors.every(
        ({ color }) => color.toLowerCase() !== newColor.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
      props.palettes.every(
        (palette) =>
          palette.paletteName.toLowerCase().replace(/ /g, '') !==
          value.toLowerCase().replace(/ /g, '')
      )
    );
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addNewColor = (e) => {
    const newColorObj = { color: newColor, name: newColorName };
    setColors([...colors, newColorObj]);
    setNewColorName('');
  };

  const deleteColor = (name) => {
    setColors(colors.filter((color) => color.name !== name));
  };

  const onSortEnd = ({ oldIndex, newIndex }) =>
    setColors(arrayMove(colors, oldIndex, newIndex));

  const handleSubmit = () => {
    let paletteName = newPaletteName;
    const newPalette = {
      paletteName: paletteName,
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
    const allColors = props.palettes.map((palette) => colors).flat();
    const randomColor = allColors[Math.floor(Math.random() * allColors.length)];

    setColors([...colors, { ...randomColor, name: randomColor.name + Math.floor(Math.random() * 100) }]);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        color='default'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            Persistent drawer
            <ValidatorForm onSubmit={handleSubmit}>
              <TextValidator
                value={newPaletteName}
                onChange={(e) => setNewPaletteName(e.target.value)}
                validators={['required', 'isPaletteNameUnique']}
                errorMessages={[
                  'Palette Name is required',
                  'Name already exists',
                ]}
              />
              <Button variant='contained' color='primary' type='submit'>
                Save Palette
              </Button>
            </ValidatorForm>
          </Typography>
        </Toolbar>
      </AppBar>
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
        <ChromePicker
          color={newColor}
          onChangeComplete={(newColor) => setNewColor(newColor.hex)}
        />
        <ValidatorForm onSubmit={addNewColor}>
          <TextValidator
            value={newColorName}
            onChange={(e) => setNewColorName(e.target.value)}
            validators={['required', 'isColorNameUnique', 'isColorUnique']}
            errorMessages={[
              'This field is required',
              'Color name must be unique',
              'Color already used',
            ]}
          />
          <Button
            disabled={paletteIsFull}
            type='submit'
            variant='contained'
            color='primary'
            style={{ backgroundColor: paletteIsFull ? "grey" : newColor }}
          >
            {paletteIsFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
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
