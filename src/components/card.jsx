import React, { Component } from 'react';
import { If } from './if/index.js';

class Card extends Component {
  render() {
    const { title, copy, media, links } = this.props;
    return (
      <div className="card">
        <If condition={title}>
          <header>
            <h3>{title}</h3>
          </header>
        </If>
        <div className="content">{copy}</div>
        <figure>
          <img src={media.href} alt={media.alt} />
          <figcaption>{media.title}</figcaption>
        </figure>
        <nav className="links">
          <ul>
            {links.map((link, i) => (
              <li key={i}>
                <a className={link.type} href={link.href} title={link.title}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Card;

// "records": [
//   {
//     "title": "Content Record 1",
//     "copy": "Content Record 1 Copy Here...",
//     "media": {
//       "alt": "This is a picture",
//       "title": "This is the title of the picture",
//       "href": "https://placehold.it/200x100"
//     },
//     "links": [
//       {
//         "type": "primary",
//         "title": "Click Me",
//         "href": "https://www.foo.com"
//       },
//       {
//         "type": "secodary",
//         "title": "Not Me",
//         "href": "https://www.bar.com"
//       }
//     ]
//   }
// ]
