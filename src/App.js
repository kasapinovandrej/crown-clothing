import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import './App.css';
import Header from './components/header/Header';
import SingInAndSingOut from './pages/sing-in-and-sing-up/singInAndSingUp';
import { auth } from './firebase/firebase';


class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/singin" component={SingInAndSingOut} />
        </Switch>
      </div>
    );
  }
}

export default App;
