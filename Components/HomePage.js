import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';


// export default function App() {
export default class HomePage extends Component {

  state = {
    text: '',
    email: '',
    password: ''
  };

  goToLogin = () => {
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <View >

       <Text style={styles.container}>this is home page</Text>

       <Button onPress={this.goToLogin} title='Login to User Account'/>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  //=======================
  container: {
    position: 'absolute',
    bottom: 0,
    fontSize: 50,
    height: 60,
    width: '100%',
    backgroundColor: 'red',
    color: '#fff'
  },
  //=======================

});
