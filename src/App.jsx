import React from 'react';
import './App.css'
import Home from './hooks/useHome';
import Pesquisa from './hooks/usePesquisa';
function App() {
  return (
    <div className='container'>
      <Pesquisa />
      <Home />
    </div>
  )
}

export default App
