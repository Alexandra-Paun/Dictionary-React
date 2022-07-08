import { useState } from 'react';

function AddWords({ wordList, setWordList }) {
  const [word, setWord] = useState('');
  const [message, setMessage] = useState('');

  const add = () => {
    if (!wordList.includes(word)) {
      setWordList(wordList => [...wordList, word]);
      setMessage('The word ' + word + ' has been added!');
    } else {
      setMessage('The word ' + word + ' is already in the dictionary!');
    }
  };

  return (
    <div>
      <input type='text' value={word} onChange={e => setWord(e.target.value)} />
      <button onClick={add}>Add Word</button>
      <p style={{ color: 'green' }}>{message}</p>
    </div>
  );
}

export default AddWords;
