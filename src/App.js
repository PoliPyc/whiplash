import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class List extends Component {
  constructor(props) {
    super(props);
    let startDate = new Date();
    startDate.setHours(8,0,0,0);
    let periodList = localStorage.getItem('periodList');
    if(periodList === null) {
      periodList = [];
    } else {
      periodList = JSON.parse(periodList);
    }
    this.state = {
      periodList: periodList,
      previousDate: startDate
    };
    this.addPeriod = this.addPeriod.bind(this);
  }
  addPeriod(event) {
    const periodList = this.state.periodList;
    let endDate = new Date();
    let startMinute = this.state.previousDate.getMinutes()+1;
    let startTime = this.state.previousDate.getHours()+":"+startMinute;
    let endTime = endDate.getHours()+":"+endDate.getMinutes();
    let newPeriodList = [...this.state.periodList, {
                        startTime: startTime,
                        endTime: endTime 
                      }];
    localStorage.setItem('periodList', JSON.stringify(newPeriodList));
    this.setState((state, period) => {
      return {
        periodList: newPeriodList,
        previousDate: endDate
      }
    });
    console.log(newPeriodList);
    
  }

  render() {
    console.log(this.state.periodList);
    const periodList = this.state.periodList.map((period) => 
      <Period name="test" startTime={period.startTime} endTime={period.endTime} />
    );
    return (
	    <div className="periodList">
	      <table><tbody>{periodList}</tbody></table>
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
