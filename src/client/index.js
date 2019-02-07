import React from 'react';
import { render } from 'react-dom';

import './index.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      author: '',
    };

    this.getQuote = this.getQuote.bind(this);
  }

  componentDidMount() {
    this.getQuote();
  }

  async getQuote() {
    const response = await fetch('/quote');
    if (!response.ok) {
      throw new Error(`Failed to fetch resource: ${response.statusText}`);
    }

    const { text, author } = await response.json();

    this.setState({ text, author });
  }

  render() {
    const { text, author } = this.state;

    let visible;
    let content;
    if (text && author) {
      visible = true;
      content = (
        <React.Fragment>
          <blockquote>{text}</blockquote>
          <cite>{author}</cite>
        </React.Fragment>
      );
    }

    return (
      <main className={visible || 'hidden'}>
        {content}
        <button id="get-quote" onClick={this.getQuote}>
          Get another
        </button>
      </main>
    );
  }
}

render(<App />, document.getElementById('app'));
