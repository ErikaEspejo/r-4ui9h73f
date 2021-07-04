import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ word: event.target.value });
  };
  render() {
    const { word } = this.state;
    return (
      <div>
        <h1>Un repetidor</h1>
        <input
          type="text"
          placeholder="Empieza a escribir algo"
          onChange={this.handleChange}
        />
        <p className="repeater">{word}</p>
      </div>
    );
  }
}

export default App;
