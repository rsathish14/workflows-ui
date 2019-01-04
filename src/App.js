import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state= {"userid": "", "name": ""};  
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);  
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {    
    //alert('You created user: ' + this.state.userid + ' ' + this.state.name);
    fetch('http://localhost:8080/persons/create', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    //body: "{'userid':'" + this.state.userid + "', 'name':'" + this.state.name +"'}"
    body: JSON.stringify({
      userid: this.state.userid,
      name: this.state.name
    })
  }).then(function(response) {
    return response.json();
  })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Create Person
          </h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              User ID:
    <input type="text" name="userid" value={this.state.userid} onChange={this.handleInputChange}/>
            </label>
            <label>
              User Name:
    <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange}/>
            </label>
            <input type="submit" value="Submit"/>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
