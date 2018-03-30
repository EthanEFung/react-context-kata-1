import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="trello-container">
          <header className="trello-header"></header>
          <article className="trello-board">
            <section className="trello-section"></section>
            <section className="trello-section"></section>
            <section className="trello-section"></section>
            <section className="trello-section"></section>
          </article>
        </div>
      </div>
    );
  }
}

export default App;
