import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './add-panel.css';

const AddPanel = () => {
  return (
    <div className="add-panel">
      <form noValidate autoComplete="off">
        <TextField
          className="inputs"
          fullWidth
          label="Task"
          id="outlined-size-small"
          defaultValue="Add task"
          variant="outlined"
          size="small"
        />
        <Button
          variant="outlined"
          size="small"
          color="primary"
          className="add-panel-button">
            ADD
        </Button>
      </form>
    </div>
  )
}

export default AddPanel;
