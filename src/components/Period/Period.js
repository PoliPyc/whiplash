import React, { Component } from 'react'; 

export default class Period extends Component {
    render() {
      return (
        <tr>
            <td>{this.props.name}</td>
            <td>{this.props.startTime}</td>
            <td>{this.props.endTime}</td>
            <td><button className="btn btn-warning">Edit</button> <button className="btn btn-danger" onClick={() => this.props.removePeriod()}>Delete</button></td>
        </tr>);
    }
  }
