import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {periodList: []};
    this.addPeriod = this.addPeriod.bind(this);
  }
  addPeriod(event) {
    const periodList = this.state.periodList;
    let startTime = new Date();
	  startTime = startTime.getHours()+":"+startTime.getMinutes();
    this.setState({
      periodList: periodList.concat(<Period name="test" startTime={startTime} endTime="null" />)
    });
  }

  render() {
    return (
	    <div className="periodList">
	      <table><tbody>{this.state.periodList}</tbody></table>
	      <button onClick={this.addPeriod}>Add period</button>
	    </div>
    );
  }
}

class Period extends Component {
  render() {
    return (<tr><td>{this.props.name}</td><td>{this.props.startTime}</td><td>{this.props.endTime}</td></tr>);
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
	<List></List>
      </div>
    );
  }
}

export default App;
