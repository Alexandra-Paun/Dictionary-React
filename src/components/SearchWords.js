import { useState } from 'react';

function SearchWords({ wordList }) {
  const [word, setWord] = useState('');
  const [message, setMessage] = useState('');

  const search = () => {
    if (wordList.includes(word)) {
      setMessage('The word ' + word + ' exists in the dictionary!');
    } else {
      setMessage('The word ' + word + " doesn't exist in the dictionary!");
    }
  };

  return (
    <div>
      <input type='text' value={word} onChange={e => setWord(e.target.value)} />
      <button onClick={search}>Search Word</button>
      <p style={{ color: 'green' }}>{message}</p>
    </div>
  );
}

export default SearchWords;
