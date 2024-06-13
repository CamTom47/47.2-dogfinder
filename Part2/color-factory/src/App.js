import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react';

import RouteList from './RouteList';
import './App.css';

function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
      <RouteList/>
      </BrowserRouter>
    </div>
  );
}

export default App;
