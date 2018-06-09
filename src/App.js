import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var FontAwesome = require('react-fontawesome');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      selectedOption: 'purple',
      animate: false
    };
  }

  handleToggle = () => {
    this.setState({checked: !this.state.checked});
    this.setState({animate: false}, () => {
      setTimeout(() => this.setState({animate: true}), 0);
    });
  }

  handleRadioChange = (changeEvent) => {
    this.setState({selectedOption: changeEvent.target.value});
  }

  componentDidMount() {
    setTimeout(() => this.setState({animate: true}), 0);
  }

  render() {
    var toggle = this.state.checked ? 'dark' : 'light';
    var secondary = this.state.selectedOption;
    var animate = this.state.animate ? 'animate' : '';

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
        <div className={`content border ${animate}`}>
          <div className="top">
            <div className="title">Scott Holland, Jr.</div>
            <div className="sub-title">Front End Developer</div>
            <div className="top-row">
              <span className="item">408-963-8034</span>
              <span className="item center">scotthollandjr@gmail.com</span>
              <span className="item center">github.com/scotthollandjr</span>
            </div>
          </div>
          <div className="bottom">
            <div className="left">
              <span className="header">experience</span>
              <div className="segment">
                <span className="title">Software Developer</span>
                <span className="sub-title">EyeCue Lab</span>
                <span className="timespan"><i className="far fa-calendar-alt"></i>08/2016 - PRESENT</span>
                <span className="description">Product & Software Design Firm</span>
                <ul>
                  <li>Front-end web and mobile development focused on CRMs and CMSs</li>
                  <li>Develop daily with Angular/AngularJS, ES6 Typescript/JavaScript,
                  HTML5, CSS3 and Sass</li>
                  <li>Frequent use of RESTful APIs and work with Ruby on Rails, Node.js,
                  postgreSQL, AWS (S3), and integration testing</li>
                  <li>Work in React and React Native, with UX/UI design and implementation</li>
                  <li>Collaborate on agile projects in a team, or independent work</li>
                </ul>
              </div>
              <div className="segment">
                <span className="title">Community Outreach Coordinator</span>
                <span className="sub-title">Pets on Broadway</span>
                <span className="timespan"><i className="far fa-calendar-alt"></i>07/2015 - 12/2016</span>
                <ul>
                  <li>Maintained store WordPress website, including adding new features</li>
                  <li>Input monthly store product discounts, coupons, and sales</li>
                  <li>Compiled monthly sales reports for manufacturer reimbursement</li>
                  <li>Managed team of customer service associates</li>
                  <li>Planned and developed in-store events, by working with local
                  companies and non-profit organizations</li>
                </ul>
              </div>
              <span className="header">education</span>
              <div className="segment">
                <span className="title">Java, JavaScript, Android</span>
                <span className="sub-title">Epicodus Code School</span>
                <span className="timespan"><i className="far fa-calendar-alt"></i>02/2016 - 08/2016</span>
                <ul>
                  <li>Boot-camp style program to learn mobile and web development</li>
                  <li>Over 800 hours of classroom team and independent programming</li>
                  <li>Web Development with HTML, CSS, and Javascript</li>
                  <li>Front-end libraries and frameworks including Angular & React</li>
                  <li>Mobile application development with Java and Android Studio</li>
                  <li>Test-driven development</li>
                </ul>
              </div>
              <div className="segment">
                <span className="title">Business Management</span>
                <span className="sub-title">Fullerton College</span>
                <span className="timespan"><i className="far fa-calendar-alt"></i>2011 - 2014</span>
                <ul>
                  <li>Completed credits towards BS in Business Management</li>
                </ul>
              </div>
            </div>
            <div className="right">
              <span className="header">projects</span>
              <div className="segment">
                <span className="title">Rocket Stats, v2</span>
                <span className="timespan"><i className="fas fa-link"></i>http://rocketpla.net</span>
                <span className="description">A React web app built to input, track, and catalog 2v2 office games of Rocket League.</span>
                <ul>
                  <li>Built with React, Redux, and Node.js</li>
                  <li>Database and authentication with Firebase</li>
                  <li>Responsive layout and style with Sass</li>
                </ul>
              </div>
              <div className="segment">
                <span className="title">EyeCue Lab Homepage</span>
                <span className="timespan"><i className="fas fa-link"></i>www.eyecuelab.com</span>
                <span className="description">A React web app built to input, track, and catalog 2v2 office games of Rocket League.</span>
                <ul>
                  <li>Responsive site built with HTML, Sass, and
                  vanilla JavaScript for animations</li>
                  <li>Includes lightweight Node.js (Express) server
                  for Heroku hosting</li>
                </ul>
              </div>
              <span className="header">tech skills</span>
              <div className="segment">
                <div className="row">
                  <span className="title">HTML5, CSS3, Sass</span>
                  <div className="circles">
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                  </div>
                </div>
                <div className="row">
                  <span className="title">JavaScript, TypeScript</span>
                  <div className="circles">
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle empty"></span>
                  </div>
                </div>
                <div className="row">
                  <span className="title">Angular & AngularJS</span>
                  <div className="circles">
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle empty"></span>
                  </div>
                </div>
                <div className="row">
                  <span className="title">React & React Native</span>
                  <div className="circles">
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle empty"></span>
                    <span className="circle empty"></span>
                  </div>
                </div>
                <div className="row">
                  <span className="title">Ruby on Rails</span>
                  <div className="circles">
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle empty"></span>
                    <span className="circle empty"></span>
                  </div>
                </div>
                <div className="row">
                  <span className="title">Git</span>
                  <div className="circles">
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                  </div>
                </div>
              </div>
              <span className="header">volunteer work</span>
              <div className="segment">
                <span className="title">Potluck in the Park</span>
                <span className="description">Volunteer by preparing healthy meals for
                those in need using ingredients donated by local grocers, businesses, and farmers.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
