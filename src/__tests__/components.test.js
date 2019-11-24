import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import renderer from "react-test-renderer";
import Deck from '../components/deck.jsx';
import Card from '../components/card.jsx';

Enzyme.configure({ adapter: new Adapter() });

const exampleCard = {
  title: 'Content Record 1',
  copy: 'Content Record 1 Copy Here...',
  media: {
    alt: 'This is a picture',
    title: 'This is the title of the picture',
    href: 'https://placehold.it/200x100'
  },
  links: [
    {
      type: 'primary',
      title: 'Click Me',
      href: 'https://www.foo.com'
    },
    {
      type: 'secodary',
      title: 'Not Me',
      href: 'https://www.bar.com'
    }
  ]
};

describe('Our components are functioning', () => {
  it('Deck renders', () => {
    let deck = mount(<Deck title="test" />);
    let header = deck.find('header');
    expect(header.exists()).toBeTruthy();
  });

  it('Card renders', () => {
    let card = mount(
      <Card
        title={exampleCard.title}
        copy={exampleCard.copy}
        media={exampleCard.media}
        links={exampleCard.links}
      />
    );
    let h3 = card.find('h3');
    expect(h3.exists()).toBeTruthy();
  });

  it('Card renders', () => {
    let card = mount(
      <Card
        title={exampleCard.title}
        copy={exampleCard.copy}
        media={exampleCard.media}
        links={exampleCard.links}
      />
    );
    let h3 = card.find('h3');
    expect(h3.exists()).toBeTruthy();
  });
});
