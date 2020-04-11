import React from 'react';
import Card from '@material-ui/core/Card';
import AddPanel from '../add-panel';
import Lists from '../list';
import './app.css';

const App = () => (
  <div className="app">
    <Card className="card">
      <AddPanel />
      <Lists />
    </Card>
  </div>
);

export default App;
