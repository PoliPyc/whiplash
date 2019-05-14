import React, { Component } from 'react'; 
import Period from './Period.js';
import './PeriodList.css';

export default class PeriodList extends Component {
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
      this.removePeriod = this.removePeriod.bind(this);
      this.clearTable = this.clearTable.bind(this);
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

    removePeriod(key) {
      let newPeriodList = this.state.periodList.filter((period, periodKey) => periodKey !== key);
      this.setState((state) => {
        return {
          periodList: newPeriodList
        }
      });
      localStorage.setItem('periodList', JSON.stringify(newPeriodList));
    }

    clearTable(event) {
        let answer = window.confirm('U sure?');
        if(answer === true) {
            this.setState((state, period) => {
                return {
                    periodList: []
                  }
            });
        }
        localStorage.removeItem('periodList');
    }
  
    render() {
      console.log(this.state.periodList);
      const periodList = this.state.periodList.map((period, index) => 
        <Period key={index} name="test" startTime={period.startTime} endTime={period.endTime} removePeriod={() => this.removePeriod(index)} />
      );
      return (
          <div className="periodList row">
          <div className="col-sm-10">
              <table className="table table-striped table-bordered">
              <tbody>
                <tr>
                    <th>Name</th>
                    <th>Start time</th>
                    <th>End time</th>
                    <th style={{width: 20 + '%'}}>Actions</th>
                </tr>
                {periodList}
              </tbody>
            </table>
          </div>
          <div className="col-sm-2 buttons">
              <button className="btn btn-success" onClick={this.addPeriod}>Add period</button>
              <button className="btn btn-danger" onClick={this.clearTable}>Clear table</button>
          </div>
          </div>
      );
    }
  }