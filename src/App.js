import React, { Component } from 'react';
import './App.css';
import './Components/itemBoard';
import ItemBoard from './Components/itemBoard';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clicky Game</h1>
        </header>
        <p className="App-intro">
          Click each picture one time, do not repeat a selection or else you lose!
        </p>
      </div>
    );
  }
}

const App = function() {
  return (<div>
  <Header/>
  <ItemBoard numChildren = '9'/>
  </div>)
};

export default App;
