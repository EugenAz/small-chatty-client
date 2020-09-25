import React from 'react';
import './App.scss';
import { Messages } from './components/Messages';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="app">
      <Messages />
      <Footer />
    </div>
  );
}

export default App;
