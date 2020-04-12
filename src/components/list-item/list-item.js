import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemText from '@material-ui/core/ListItemText';
import './list-item.css';

const ListItems = ({
  id, name, onEdit, onDelete, onChecked, checked, editValue = false, onEditStart, editComplete,
}) => {
  let classes = 'list-item-text ';
  let classes2 = 'list-item-texts ';
  if (editValue) {
    if (editValue.id === id) {
      classes += 'on';
      classes2 += 'off';
    }
  }
  if (editValue.classes === 'off') {
    classes = 'list-item-text ';
    classes2 = 'list-item-texts ';
  }
  return (
    <ListItem className="list-items">
      <Checkbox
        checked={checked}
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        onClick={() => onChecked(id, checked)}
      />
      <form onSubmit={(event) => editComplete(event, id, editValue.value)}>
        <TextField
          id={`${id}`}
          autoComplete="off"
          className={classes}
          onChange={(event) => { event.preventDefault(); onEdit(event, id); }}
          placeholder={name}
          value={editValue.value}
        />
        <ListItemText
          className={classes2}
          id={id}
          primary={name}
          onClick={() => { onEditStart(id); }}
        />
      </form>
      <IconButton aria-label="delete" onClick={() => onDelete(id)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

ListItems.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onChecked: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  editValue: PropTypes.shape({}).isRequired,
  onEditStart: PropTypes.func.isRequired,
  editComplete: PropTypes.func.isRequired,
};

export default ListItems;
