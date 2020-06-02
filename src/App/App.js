import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import MyNavbar from '../components/shared/MyNavbar/MyNavbar';

import Auth from '../components/pages/Auth/Auth';
import Home from '../components/pages/Home/Home';
import EditScat from '../components/pages/EditScat/EditScat';
import NewScat from '../components/pages/NewScat/NewScat';
import SingleScat from '../components/pages/SingleScat/SingleScat';


import fbConnection from '../helpers/data/connection';

import './App.scss';

fbConnection.firebaseApp();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUmount() {
    this.removerListener();
  }

  render() {
    return (
      <div className="App">
      <MyNavbar />
      <Auth />
      <Home />
      <EditScat />
      <NewScat />
      <SingleScat />
    </div>
    );
  }
}

export default App;
