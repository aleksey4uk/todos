import React from 'react';
import AddPanel from '../add-panel';
import Card from '@material-ui/core/Card';
import Lists from '../list';
import './app.css';

const App = (props) => {
  return (
    <div className="app">
      <Card className="card">
        <AddPanel />
        <Lists />
      </Card>
    </div>
  )
}

export default App;
