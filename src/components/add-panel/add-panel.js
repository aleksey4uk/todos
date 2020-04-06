import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './add-panel.css';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const AddPanel = (props) => {
  const {value, onChanges,onSubmits, data} = props;
  return (
    <div className="add-panel">
      <form
        noValidate
        autoComplete="off"
        onSubmit={(e) => onSubmits(e, value, data)}>
        <TextField
          className="add-panel-inputs"
          fullWidth
          label="Task"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          onChange={(event) => {
            event.preventDefault();
            onChanges(event);
          }}
          value={value}
        />
        <Button
          type="submit"
          onSubmit={(e) => onSubmits(e, value)}
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

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChanges: (payload) => {
      dispatch({type: 'ADD-VALUE', payload})
    },

    onSubmits: (e, value) => {
      e.preventDefault();

      const payload = {
        name: value,
        checked: false,
      }
      swapiService
        .addItem(payload)
        .then(res => {
          let payload = res.data;
          dispatch({type: 'COMPLETE-VALUE', payload});
        })
    }


  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddPanel);
