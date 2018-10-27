import React, { Component } from 'react';
import PeriodList from './components/Period/PeriodList.js';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        	<PeriodList></PeriodList>
      </div>
    );
  }
}

export default App;
