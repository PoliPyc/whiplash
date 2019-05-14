import React, { Component } from 'react'; 

export default class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: false
        }
    }

    input() {
        if(this.state.editable === true) {
           return <input type="text" name={this.props.name} value={this.props.value} />
        } else {
           return this.props.value
        }
    }

    render() {
      return (
        this.input
      );
    }
  }
