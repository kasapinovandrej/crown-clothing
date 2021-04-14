import React from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import './App.css';
import Header from './components/header/Header';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
