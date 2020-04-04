import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import './list-item.css';



const ListItems = ({id, name, onRead, onDelete, onChecked}) => {
  return (
    <ListItem className='list-items'>
      <Checkbox
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        onClick={()=>console.log(id)}
      />
      <TextField id="standard-basic" className='list-item-text' onChange={(e)=>onRead(e, id)} placeholder={name}/>
      <IconButton aria-label="delete" onClick={() => onDelete(id)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  )
}

export default ListItems;
