import React, { Component } from 'react';

class Deck extends Component {
  render() {
    const { title } = this.props;
    return (
      <section className="deck">
        <header>
          <h2>{title}</h2>
        </header>
        {this.props.children}
      </section>
    );
  }
}

export default Deck;
