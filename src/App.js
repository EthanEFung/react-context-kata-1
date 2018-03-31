import React, { Component } from 'react';
import './App.css';
import { Sections } from './components';
export const SectionContext = React.createContext();

class App extends Component {
  state = {
    sections: [
      { 
        cards: [{status: 'pending', description: 'mow lawn'}], 
        header: { name: 'Ethan', color: '#8e6e95' }
      },
      { 
        cards: [{status: 'pending', description: 'mow lawn'}], 
        header: { name: 'Chris', color: '#39a59c' }
      },
      { 
        cards: [{status: 'pending', description: 'mow lawn'}], 
        header: { name: 'Matt', color: '#344759' }
      },
      { 
        cards: [{status: 'pending', description: 'mow lawn'}], 
        header: { name: 'Thomas', color: '#e8741e' }
      },
    ]
  }
  
  addCard(card, i) {
    this.setState(state => {
      const newState = {...state};
      newState.sections[i].cards.push(card);
      return newState;
    });
  }


  render() {
    return (
      <div className="App">
        <div className="trello-container">
          <header className="trello-header"></header>
          <SectionContext.Provider value={this.state.sections}>
            <article className="trello-board">
              <Sections addCard={this.addCard.bind(this)}/>
            </article>
          </SectionContext.Provider>
        </div>
      </div>
     
    );
  }
}

export default App;
