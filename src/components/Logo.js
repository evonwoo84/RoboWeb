import React, { Component } from 'react';
import LogoRobo from '../images/icon_roboapp.png';
import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-dom';

export default class Logo extends Component<{}> {
  render() {
    return(
      <div className="App-container">

        <img
          className="App-welcomeLogo"
          src={LogoRobo} />

          <textarea className="App-welcomeLogoText">RoboWeb</textarea>

      </div>
    )
  }
}
