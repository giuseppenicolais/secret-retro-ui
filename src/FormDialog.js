import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import { submitRetro } from './service';

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [good, setGood] = useState('');
  const [bad, setBad] = useState('');
  const [rating, setRating] = useState(5);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleSubmit = event => {
    event.preventDefault();

    setOpen(false);

    const payload = { good, bad, rating };

    submitRetro(payload).then((response) => {
      console.log(response);
    });
  };

  const handleGoodChange = event => {
    const { value } = event.target;
    setGood(value);
  };

  const handleBadChange = event => {
    const { value } = event.target;
    setBad(value);
  };

  const handleRatingChange = (event, value) => {
    setRating(value);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Submit Retro
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Retro</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To submit your retro for the day, fill out the form below and submit.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Good"
            fullWidth
            onChange={handleGoodChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Bad"
            fullWidth
            onChange={handleBadChange}
          />
          <Typography id="discrete-slider" gutterBottom>
            Rating
          </Typography>
          <Slider
            defaultValue={5}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={10}
            onChange={handleRatingChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
