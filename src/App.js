import React, { Component } from 'react';
import './App.css';
import BooksContainer from './components/BooksContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BooksContainer />
      </div>
    );
  }
}

export default App;
