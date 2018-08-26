import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import DataHandler from '../../services/DataHandler.js';
import Header from '../header/Header';

export default class SingleQuote extends Component {

  constructor(props) {
    super(props);

    var dataHandler = new DataHandler();

    this.state = {
      quote: dataHandler.getJson()["quotes"][0]
    }
  }

  render() {
    var style = require("./styles.js");

    return (
      <View style={style.container}>
        <Header text="Daily Quote" />

        <View style={style.textContainer}>
          <Text
            adjustsFontSizeToFit 
            numberOfLines={3}
            style={style.textStyle}
          > 
            {this.state.quote}  
          </Text>
        </View>
      </View>
    );
  }
}