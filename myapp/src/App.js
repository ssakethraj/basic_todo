import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './Text';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todolist: [],
      value:"",
    }
    // this.handleClick = this.handleClick.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }
  handleClick = () => {
    const todo = document.getElementById("todo").value;
    const temp = this.state.todolist;
    temp.push(todo);
    this.setState({
      todolist: temp,
    })
  }
  handleChange = (e) => {
    this.setState({
      value:e.target.value
    })
  }
  render() {
    const todoCollection = this.state.todolist.map((item, index) => { 
      return <li key={index}>{item}</li>
    });
    return (  
      <div className="App">
        <input id="todo" type="text" value={this.state.value} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>add todo</button>
        <div>
          <ol>
            {todoCollection}
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
