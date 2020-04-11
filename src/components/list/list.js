import React, { Component } from 'react';
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
      .then(this.props.complete);
  }

  render() {
    if (this.props.data.length <= 0) return <h3>Загрузка...</h3>;
    const { data } = this.props;
    return (
      <>
        <List>
          {
            data.map((item, index) => (
              <ListItems
                id={item.id}
                name={item.name}
                editValue={this.props.editValue}
                key={index}
                onEdit={this.props.onEdit}
                onEditStart={this.props.onEditStart}
                onDelete={this.props.onDelete}
                onChecked={this.props.onChecked}
                editComplete={this.props.editComplete}
              />
            ))
          }
        </List>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  load: (payload) => dispatch({ type: 'LOAD', payload }),
  complete: () => dispatch({ type: 'COMPLETE' }),
  onDelete: (payload) => {
    swapiService
      .deleteItem(payload)
      .then(() => dispatch({ type: 'DELETE', payload }));
  },
  onChecked: (payload, checked) => {
    const chek = !checked;
    swapiService
      .checkedItem(payload, chek)
      .then(() => dispatch({ type: 'CHECKED', payload }));
  },
  onEdit: (e, id) => {
    const payload = {
      value: e.target.value,
      id,
    };
    dispatch({ type: 'EDIT', payload });
  },
  onEditStart: (payload) => dispatch({ type: 'EDIT-START', payload }),
  editComplete: (event, id, value) => {
    event.preventDefault();
    swapiService
      .editItem(id, value)
      .then((payload) => dispatch({ type: 'EDIT-COMPLETE', payload }));
  },
});

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
