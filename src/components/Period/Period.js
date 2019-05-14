import React, { Component } from 'react'; 
import TextInput from '../Form/TextInput';

export default class Period extends Component {
    render() {
      
      return (
        <tr>
            <td><TextInput name="name" value={this.props.name}></TextInput></td>
            <td>{this.props.startTime}</td>
            <td>{this.props.endTime}</td>
            <td><button className="btn btn-warning">Edit</button> <button className="btn btn-danger" onClick={() => this.props.removePeriod()}>Delete</button></td>
        </tr>);
    }
  }
