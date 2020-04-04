import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import ListItems from '../list-item';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

class Lists extends Component {


  componentDidMount() {
    console.log('rendering')
    swapiService
      .getData()
      .then(this.props.load)
      .then(this.props.complete)
  }

  render() {
    console.log(this.props)
    if(this.props.data.length <=0) return <h3>Загрузка...</h3>
    const data = this.props.data;
    return (
      <Fragment>
        <List>
          {
            data.map(item => {
              return (
                <ListItems
                  {...item}
                  key={item.id}
                  onDelete={this.props.onDelete}
                  onChecked={onChecked}
                  onRead={onRead}/>
              )
            })
          }
        </List>
      </Fragment>
    )
  }
}

const onChecked = (id) => {
  console.log('Помечаем элемент с id: ', id, ' завершенным');
};

const onRead = (e, id) => {
  e.preventDefault();
  console.log('Получаем данные ввода: ', e.target.value, `c id `, id);
};

const mapDispatchToProps = (dispatch) => {
  return {
    load: (payload) => dispatch({type: 'LOAD', payload}),
    complete: () => dispatch({type: 'COMPLETE'}),
    onDelete: (payload) => {
      swapiService
        .deleteItem(payload)
        .then(res => console.log(res))
        .then(() => dispatch({type: 'DELETE', payload}))
    },
    onChecked: (payload) => dispatch({type: "CHECKED", payload})
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
