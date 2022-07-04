import './App.css';
import AddWords from './components/AddWords';
import SearchWords from './components/SearchWords';
import React from 'react';

function App () {
  const wordList = [];
  return (
    <div>
      <h1>Dictionary</h1>
      <SearchWords array = {wordList}/>
      <AddWords array = {wordList}/>
    </div>
  );
}
export default App;



