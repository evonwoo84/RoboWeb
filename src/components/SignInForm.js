import React, { Component } from 'react';
import LogoGoogle from '../images/icon_google.png';
import LogoFacebook from '../images/icon_facebook.png';
import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-dom';

export default class SignInForm extends Component<{}> {
  render() {
    return(
      <div className="App-container">

        <textarea
          className="App-inputBox App-block"
          placeholder="Username or Email"/>

        <textarea type="password"
          className="App-inputBox App-block"
          placeholder="Password"/>

        <br/><br/><br/><br/>

        <a href
            className="App-button App-buttonText App-block">Sign In
        </a>

        <a href
          className="App-button App-buttonText App-block">Sign In with
          &nbsp;
          <img src={LogoGoogle} height="30" width="30" />
        </a>

        <a href
          className="App-button App-buttonText App-block">Sign In with
          &nbsp;
          <img src={LogoFacebook} height="30" width="30" />
        </a>

        <br/>

      </div>
    )
  }
}
