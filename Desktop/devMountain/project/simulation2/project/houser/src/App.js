import React, { Component } from 'react';

import './App.css';

import route from './route'
import Header from './component/Header/Header';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        <Header/>
        </header>
      
        { route }
        
      </div>
    );
  }
}

export default App;
