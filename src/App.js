import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import './App.css';
import Header from './components/header/Header';
import SingInAndSingOut from './pages/sing-in-and-sing-up/singInAndSingUp';
import { auth, createUserProfileDocument } from './firebase/firebase';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions' 


class App extends Component {
  unsubscribeFromAuth = null
  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/singin" component={SingInAndSingOut} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
