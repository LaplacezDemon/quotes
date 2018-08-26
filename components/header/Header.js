import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

export default class Header extends Component {

  constructor(props) {
    super(props);

      this.state = {
       text: this.props.text
      }
  }

  render() {
    var style = require("./styles.js");

    return (
      <View>
        <Text
          style={style.textStyle}
        > 
          {this.state.text}
        </Text>
      </View>
    );
  }
}