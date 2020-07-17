import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

function SimpleSnackbar({ format, close, isOpen }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      isOpen={isOpen}
      autoHideDuration={3000}
      message={
        <span>Format changed to:&nbsp;&nbsp;&nbsp;{format.toUpperCase()}</span>
      }
      onClose={close}
      action={[
        <IconButton
          onClick={close}
          color='inherit'
          size='small'
          key='close'
          aria-label='close'
        >
          <CloseIcon fontSize='small' />
        </IconButton>,
      ]}
    />
  );
}

export default SimpleSnackbar;
