import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import { Close } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

function TransitionUp(props) {
  return <Slide {...props} direction='up' />;
}

export default function Alert(props) {
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
    navigator.clipboard.writeText(props.toCopy);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        // disableRipple
        onClick={handleClick(TransitionUp)}
        style={{
          textTransform: 'none',
          background: 'transparent',
          color: 'black',
          marginInline: '-0.25rem',
        }}
      >
        {props.title}
      </IconButton>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={props.msg}
        key={transition ? transition.name : ''}
        action={
          <IconButton
            size='small'
            aria-label='close'
            color='inherit'
            onClick={handleClose}
          >
            <Close fontSize='small' />
          </IconButton>
        }
      />
    </div>
  );
}
