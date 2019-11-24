import React from 'react';
import Deck from './deck.jsx';
import Card from './card.jsx';

const Page = props => {
  const content = props.content || [];

  return (
    <>
      {content.map((deck, idx) => (
        <Deck key={idx} title={deck.title}>
          {deck.records.map((card, cardIdx) => (
            <Card
              key={cardIdx}
              title={card.title}
              copy={card.copy}
              media={card.media}
              links={card.links}
            />
          ))}
        </Deck>
      ))}
    </>
  );
};

export default Page;
