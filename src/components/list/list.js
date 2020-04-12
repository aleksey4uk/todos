import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItems from '../list-item';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

class Lists extends Component {
  componentDidMount() {
    const { load, complete } = this.props;
    swapiService
      .getData()
      .then(load)
      .then(complete);
  }

  render() {
    const { data } = this.props;
    if (data.length <= 0) return <h3>Загрузка...</h3>;
    return (
      <>
        <List>
          {
            data.map((item) => {
              const {
                editValue, onEdit, onEditStart, onDelete, onChecked, editComplete,
              } = this.props;
              return (
                <ListItems
                  checked={item.checked}
                  id={item.id}
                  name={item.name}
                  editValue={editValue}
                  key={item.id}
                  onEdit={onEdit}
                  onEditStart={onEditStart}
                  onDelete={onDelete}
                  onChecked={onChecked}
                  editComplete={editComplete}
                />
              );
            })
          }
        </List>
      </>
    );
  }
}

Lists.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onEditStart: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onChecked: PropTypes.func.isRequired,
  editComplete: PropTypes.func.isRequired,
  load: PropTypes.func.isRequired,
  complete: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  editValue: PropTypes.shape({}).isRequired,
};

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
