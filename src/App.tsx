import React, { useEffect } from 'react';
import './App.css';

const tg = window?.Telegram.WebApp;

function App() {
  useEffect(() => {
    console.log('tg', tg);
    tg.ready();
  }, []);

  return (
    <div className="App">
      <button>Close</button>
    </div>
  );
}

export default App;
