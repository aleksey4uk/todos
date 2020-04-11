import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItems from '../list-item';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

class Lists extends Component {

  componentDidMount() {
    swapiService
      .getData()
      .then(this.props.load)
      .then(this.props.complete)
  }

  render() {
    if(this.props.data.length <=0 ) return <h3>Загрузка...</h3>
    const data = this.props.data;
    return (
      <Fragment>
        <List>
          {
            data.map((item, index) => {
              return (
                <ListItems
                  {...item}
                  editValue={this.props.editValue}
                  key={index}
                  onEdit={this.props.onEdit}
                  onEditStart={this.props.onEditStart}
                  onDelete={this.props.onDelete}
                  onChecked={this.props.onChecked}
                  editComplete={this.props.editComplete}/>
              )
            })
          }
        </List>
      </Fragment>
    )
  }
}

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
    onChecked: (payload, checked) => {
      let chek = !checked;
      swapiService
        .checkedItem(payload, chek)
        .then(res => console.log(res))
        .then(() => dispatch({type: 'CHECKED', payload}))
    },
    onEdit: (e, id) => {
      let payload = {
        value: e.target.value,
        id: id
      }
      dispatch({type: 'EDIT', payload})
    },
    onEditStart: (payload) => dispatch({type: 'EDIT-START', payload}),
    editComplete: (event, id, value) => {
      event.preventDefault();
      swapiService
        .editItem(id, value)
        .then((payload) => dispatch({type: 'EDIT-COMPLETE', payload}))
   },
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
