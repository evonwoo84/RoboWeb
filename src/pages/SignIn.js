import React, { Component } from 'react';

import Logo from '../components/Logo';
import SignInForm from '../components/SignInForm';

export default class SignIn extends Component<{}> {
  render() {
    return(
      <div className="App.container">
        <SignInForm />
      </div>
    )
  }
}
