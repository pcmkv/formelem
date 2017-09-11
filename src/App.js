import React, { Component } from 'react';
import logo from './logo.svg';
import InputField from './InputField';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email:'',
      inputField: [],
      items: 1
    };
    this.sendForm = this.sendForm.bind(this);
    this.getUserName = this.getUserName.bind(this);
    this.getUserEmail = this.getUserEmail.bind(this);
  }

  getValue(e){
    console.log("Parent",e);
  }

  getUserName(e){
    let userName = e.target.value;
    this.setState({
      name:userName
    });
  }

  getUserEmail(e){
    let userEmail = e.target.value;
    this.setState({
      email:userEmail
    });
  }

  getInitialState(){
    this.addInput();
  }

  addInput(e) {
    e.preventDefault();
    const inputListFields = this.state.inputField;
    console.log(inputListFields);
    this.setState({
      items: this.state.items + 1,
      inputField: inputListFields.concat(<InputField inputVal={this.getValue.bind(this)} key={inputListFields.length}
                                                     items={this.state.items}/>)
    });
  }

  sendForm(e){
    e.preventDefault();
    console.log("inputField",this.state.inputField);
    let userInfo = {
      name: this.state.name,
      email:this.state.email
    };
    console.log(userInfo);
  }

  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="App">
                <form className="form-horizontal" onSubmit={this.sendForm}>
                  <div className="form-group">
                    <label>Name:</label>
                    <input type="text" className="form-control" id="name" onChange={this.getUserName} />
                  </div>
                  <div className="form-group">
                    <label>E-mail:</label>
                    <input type="text" className="form-control" id="email" onChange={this.getUserEmail}  />
                  </div>
                  <div>
                    {
                      this.state.inputField.map(function(input, index) {
                        return input;
                      })
                    }
                  </div>
                  <div className="form-group">
                    <button className="btn btn-dangerous pull-right" onClick={this.addInput.bind(this)}>+</button>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-success" >Save</button>
                  </div>
                  </form>
              </div>
            </div>
          </div>
          </div>

    );
  }
}

export default App;
