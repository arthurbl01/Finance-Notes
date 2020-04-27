import React from 'react';
import './App.css';
import './components/firebase';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './rotas';

function App() {
  return (
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  );
}

export default App;
