import React, { Component } from 'react';
import PeriodList from './components/Period/PeriodList.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div class="col-12">
            <header className="title"><h1>Whiplash 0.1</h1></header>
          </div>
        </div>
        <div className="row">
          <div class="col-12">
            <PeriodList></PeriodList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
