import React from 'react'
import './App.css';
import PokeCard from './components/PokeCard'
import  Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <PokeCard />
    </div>
  );
}

export default App;
