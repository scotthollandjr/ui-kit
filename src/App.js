import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true
    };
  }

  handleToggle = () => {
    this.setState({checked: !this.state.checked});
  }

  render() {
    var toggle = this.state.checked ? 'light' : 'dark';
    return (
      <div className={`container ${toggle}`}>
        <div>
          <label className="switch">
            <input type="checkbox" onChange={this.handleToggle} />
            <span className="slider"></span>
          </label>
        </div>
        <div className="square-container">
          <div className="square purple"></div>
          <div className="square green"></div>
          <div className="square red"></div>
          <div className="square orange"></div>
        </div>
      </div>
    );
  }
}

export default App;
