import React, { Component } from 'react'; 

export default class Period extends Component {
    render() {
      return (
        <tr>
            <td>{this.props.name}</td>
            <td>{this.props.startTime}</td>
            <td>{this.props.endTime}</td>
            <td><button class="btn btn-warning">Edit</button> <button class="btn btn-danger" onClick="">Delete</button></td>
        </tr>);
    }
  }
