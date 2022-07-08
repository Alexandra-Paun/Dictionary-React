import './App.css';
import AddWords from './components/AddWords';
import SearchWords from './components/SearchWords';
import React, { useState } from 'react';

function App() {
  const [WordList, setWordList] = useState('');
  return (
    <div>
      <h1>Dictionary</h1>
      <SearchWords wordList={WordList} />
      <AddWords wordList={WordList} setWordList={setWordList} />
    </div>
  );
}
export default App;
