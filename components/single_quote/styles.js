'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  container:{
    flex: 0.5,
    alignItems: "center",
  },

  textContainer:{
    paddingTop: 200,
  }, 
  textStyle: {
    fontFamily: "Merriweather-Light",
    fontSize: 30, 
    textAlign: "center",
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#F5FCFF"
    //margin: 10
  }
});