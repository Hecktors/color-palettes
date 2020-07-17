import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/NewPaletteFormStyles'
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import arrayMove from 'array-move';
import DraggableColorBoxList from './DraggableColorBoxList';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import seedColors from '../seedColors';

NewPaletteForm.defaultProps = { maxColors: 20 }

function NewPaletteForm({ classes, maxColors, palettes, savePalette, history }) {
  const [isOpen, setIsOpen] = useState(true);
  const [colors, setColors] = useState(seedColors[0].colors);
  const paletteIsFull = colors.length >= maxColors

  const handleDrawerClose = () => setIsOpen(false);

  const addNewColor = (newColor) => {
    console.log("colors", colors)
    console.log("newColor", newColor)
    setColors([...colors, newColor]);
  };

  const deleteColor = (colorName) => {
    setColors(colors.filter((color) => color.name !== colorName));
  };

  const onSortEnd = ({ oldIndex, newIndex }) =>
    setColors(arrayMove(colors, oldIndex, newIndex));

  const handleSubmit = (paletteName, emoji) => {
    const newPalette = {
      paletteName,
      id: paletteName.toLowerCase().replace(/ /g, '-'),
      emoji,
      colors: colors,
    };
    savePalette(newPalette);
    history.push('/');
  };

  const clearPalette = () => {
    setColors([]);
  };

  const generateRandomColor = () => {
    const allColors = palettes.map((palette) => palette.colors.map(color => color)).flat();
    const randomColor = allColors[Math.floor(Math.random() * allColors.length)];
    colors.map(color => console.log(color.name))
    colors.some(color => color.name === randomColor.name)
      ? generateRandomColor()
      : setColors([...colors, { ...randomColor, name: randomColor.name }]);
  };

  return (
    <div className={classes.root}>
      <PaletteFormNav
        isOpen={isOpen}
        colors={colors}
        palettes={palettes}
        handleSubmit={handleSubmit}
        setIsOpen={() => setIsOpen(true)}
      />

      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={isOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Link to="/">
            {/* <Button variant='contained' color='secondary' className={classes.navBtn}>Go Back</Button> */}
            <ArrowBack />
          </Link>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.container}>
          <Typography className={classes.title} variant='h4' gutterBottom>Design Your Palette</Typography>
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
          [classes.contentShift]: isOpen,
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorBoxList
          colors={colors}
          deleteColor={deleteColor}
          onSortEnd={onSortEnd}
          distance={10}
          axis='xy'
        />
      </main>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
