import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class SimpleSnackbar extends React.Component {
  state = {
    open: false,
  };

  componentDidUpdate(prevProps) {
    if (this.props.open !== prevProps.open) {
      this.setState({ open: this.props.open });
    }
  }

  handleClose = () => {
    this.props.close();
  };

  render() {
    const { format } = this.props;

    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={this.state.open}
        autoHideDuration={3000}
        message={
          <span>
            Format changed to:&nbsp;&nbsp;&nbsp;{format.toUpperCase()}
          </span>
        }
        onClose={this.handleClose}
        action={[
          <IconButton
            onClick={this.handleClose}
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
}

export default SimpleSnackbar;
