import React from 'react';

export const Section = (props) => {
  const { cards, header, addCard } = props;

  return (<section 
    className="trello-section"  
    {...props}>
      <header 
        className="section-header" 
        style={{ "backgroundColor": header.color }}
      >
        <h1>{header.name}</h1>
      </header>
      {cards.map((card, i) => <div key={i} className="card"><p>{card.description}</p></div>)}
      <div className="section-input-container">
        <input className="section-input" type="text"/>
        <button 
          className="section-input-submission" 
          onClick={() => {
            const description = document.getElementsByClassName("section-input")[props.id].value;
            return addCard({ status: 'pending', description  }, props.id);
          }}
        >
          <p><strong>+</strong></p>
        </button>
      </div>
    </section>);
};
