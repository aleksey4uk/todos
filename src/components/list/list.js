import React, { Fragment } from 'react';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import ListItems from '../list-item';

const data = [
  {
    id: 1,
    name: 'Вася'
  },
  {
    id: 2,
    name: 'Петя'
  },
  {
    id: 3,
    name: 'Коля'
  }
]

const onDelete = (id) => {
  console.log('Удалем элемент с id: ', id);
};

const onChecked = (id) => {
  console.log('Помечаем элемент с id: ', id, ' завершенным');
};

const onRead = (e, id) => {
  e.preventDefault();
  console.log('Получаем данные ввода: ', e.target.value, `c id `, id);
};

const Lists = () => {
  return (
    <Fragment>
      <List>
        {
          data.map(item => {
            return (
              <ListItems
                {...item}
                key={item.id}
                onDelete={onDelete}
                onChecked={onChecked}
                onRead={onRead}/>
            )
          })
        }
      </List>
    </Fragment>
  )
}

export default Lists;
