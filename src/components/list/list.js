import React, { Fragment } from 'react';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import ListItems from '../item';

const Lists = () => {
  return (
    <Fragment>
      <List>
        <ListItems />
      </List>
    </Fragment>
  )
}

export default Lists;
