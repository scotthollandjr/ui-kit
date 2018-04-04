import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      selectedOption: 'purple'
    };
  }

  handleToggle = () => {
    this.setState({checked: !this.state.checked});
  }

  handleRadioChange = (changeEvent) => {
    this.setState({selectedOption: changeEvent.target.value}, console.log(this.state.selectedOption));
  }

  render() {
    var toggle = this.state.checked ? 'light' : 'dark';
    var secondary = this.state.selectedOption;
    return (
      <div className={`container ${toggle} ${secondary}`}>
        <div className="switch-container">
          <label className="switch">
            <input type="checkbox" onChange={this.handleToggle} />
            <span className="slider"></span>
          </label>
        </div>
        <div className="radio-container">
          <form>
            <label className="radio">
              <input type="radio"
                     value="purple"
                     checked={this.state.selectedOption === 'purple'}
                     onChange={this.handleRadioChange} />
              <span className="radio-button purple"></span>
            </label>
            <label className="radio">
              <input type="radio"
                     value="green"
                     className="green"
                     checked={this.state.selectedOption === 'green'}
                     onChange={this.handleRadioChange} />
              <span className="radio-button green"></span>
            </label>
            <label className="radio">
              <input type="radio"
                     value="red"
                     className="red"
                     checked={this.state.selectedOption === 'red'}
                     onChange={this.handleRadioChange} />
              <span className="radio-button red"></span>
            </label>
            <label className="radio">
              <input type="radio"
                     value="blue"
                     className="blue"
                     checked={this.state.selectedOption === 'blue'}
                     onChange={this.handleRadioChange} />
              <span className="radio-button blue"></span>
            </label>
          </form>
        </div>
        <div className="square-container">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
      </div>
    );
  }
}

export default App;
