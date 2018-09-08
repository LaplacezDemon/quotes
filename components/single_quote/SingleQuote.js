import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import Header from '../header/Header';

export default class SingleQuote extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    }
  }

  componentDidMount(){
      this.loadingQuoteFromUrl();
  }

  loadingQuoteFromUrl = () => {
    return fetch('https://talaikis.com/api/quotes/random/')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson,
      }, function(){

      });

    })
    .catch((error) =>{
      this.setState({isLoading: false})
      console.error(error);
    });
  }

  render() {
    var style = require("./styles.js");

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }    

    return (
      <View style={style.container}>
        <Header text="Quote of the Day" />

        <View style={style.textContainer}>
          <Text
            adjustsFontSizeToFit 
            numberOfLines={8}
            style={style.textStyle}
          > 
            {this.state.dataSource.quote} 
          </Text>

          <Text
            //adjustsFontSizeToFit
            //numberOfLines={1}
            style={style.author}
          >
            - {this.state.dataSource.author}
          </Text>

        </View>
      </View>
    );
  }
}