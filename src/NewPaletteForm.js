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
import styles from './styles/NewPaletteFormStyles'

NewPaletteForm.defaultProps = { maxColors: 20 }

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

  const handleSubmit = (paletteName, emoji) => {
    const newPalette = {
      paletteName,
      id: paletteName.toLowerCase().replace(/ /g, '-'),
      emoji,
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
        // classes={classes}
        colors={colors}
        palettes={palettes}
        handleSubmit={handleSubmit}
        setOpen={() => setOpen(true)}
        t
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
