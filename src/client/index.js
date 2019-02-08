import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import './index.scss';

const getQuote = () => fetch('/quote').then(q => q.json());

function App() {
  const [{ text, author }, setQuote] = useState({ text: '', author: '' });
  const [loading, setLoading] = useState(false);
  useEffect(newQuote, []);

  async function newQuote() {
    setLoading(true);
    setQuote(await getQuote());
    setLoading(false);
  }

  return (
    <main className={(text && author) || 'hidden'}>
      {text && author && (
        <React.Fragment>
          <blockquote>{text}</blockquote>
          <cite>{author}</cite>
        </React.Fragment>
      )}
      <button
        id="get-quote"
        onClick={newQuote}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Get another'}
      </button>
    </main>
  );
}

render(<App />, document.getElementById('app'));
