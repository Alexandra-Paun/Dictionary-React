import './App.css';
import AddWords from './components/AddWords';
import React from 'react';

function App () {
  const wordList = [];
  return (
    <div>
      <h1>Dictionary</h1>
      <AddWords array = {wordList}/>
    </div>
  );
}

export default App;
