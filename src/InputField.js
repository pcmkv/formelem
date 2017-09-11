import React, { Component } from 'react';
import logo from './logo.svg';

class InputField extends Component {
  constructor(props){
    super(props);
    console.log("Child",this.props);
    this.state = {
      inputVal:''
    };
    console.log("Child props",this.props);
  }
  
  getInputValue(e){
    var inputValue = e.target.value;
    this.setState({
      inputVal:inputValue
    });
    console.log("State input Value",this.state.inputVal);
    this.props.inputVal(this.state.inputVal);
  }
  
  render() {
    return (
          <div className="form-group">
            <label>E-mail {this.props.items}:</label>
            <input type="text" onChange={this.getInputValue.bind(this)}  className="form-control"/>
            <button className="btn btn-danger">-</button>
          </div>

    );
  }
}

export default InputField;
