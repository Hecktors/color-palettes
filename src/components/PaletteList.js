import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/PaletteListStyles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import MiniPalette from './MiniPalette';

const PaletteList = React.memo(({ classes, palettes, history, deletePalette }) => {
  const [paletteIdToDelete, setPaletteIdToDelete] = useState('')

  const openDialog = (id) => setPaletteIdToDelete(id);
  const handleDelete = () => deletePalette(paletteIdToDelete, history);
  const handleCancel = () => setPaletteIdToDelete('');
  const goToPalette = (id) => history.push(`/palette/${id}`);

  const miniPalettes = palettes.map((palette, id) => (
    <CSSTransition
      key={id}
      timeout={500}
      classNames="fade"
      in={false}
    >
      <MiniPalette
        {...palette}
        key={palette.id}
        goToPalette={goToPalette}
        openDialog={openDialog}
      />
    </CSSTransition>
  ));

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>Color Palettes</h1>
          <Link to='/palette/new'>Create new Palette</Link>
        </nav>
        <TransitionGroup className={classes.palettes}>
          {miniPalettes}
        </TransitionGroup>
      </div>
      <Dialog open={!!paletteIdToDelete} aria-labelledby="delete-dialog-title">
        <DialogTitle id="delete-dialog-titile">Delete Palette?</DialogTitle>
        <List>
          <ListItem button onClick={handleDelete}>
            <ListItemAvatar>
              <Avatar style={{ background: blue[100], color: blue[600] }}>
                <CheckIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Delete" />
          </ListItem>
          <ListItem button onClick={handleCancel}>
            <ListItemAvatar>
              <Avatar style={{ background: red[100], color: red[600] }}>
                <CloseIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cancel" />
          </ListItem>
        </List>
      </Dialog>
    </div >
  );
});

export default withStyles(styles)(PaletteList);
