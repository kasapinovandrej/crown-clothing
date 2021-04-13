import React from 'react';
import { Route } from 'react-router-dom'
import HomePage from './pages/homepage/Homepage';
import './App.css';


const HatsPage = () => {
  return <div><h1>Heloo Adi</h1></div>
}

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/adi" component={HatsPage} />
    </div>
  );
}

export default App;
