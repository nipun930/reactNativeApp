import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default class ProfilePage extends Component {

  state = {
    text: '',
    email: '',
    password: ''
  };

  // reset = () => {
  //   this.props.navigation.reset({
  //     index: 0,
  //     routes: [{ name: 'Profile' }],
  //   });
  // }
  // componentWillMount(){
  //   this.reset;
  // }


  render() {
    return (
      <View style={styles.container}>

       <Text style={styles.text}>Profile UI is this for now</Text>

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
    height: '100%',
    width: '100%',
    backgroundColor: '#7BDCB5',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  //=======================
  text: {
    fontSize: 30
  }

});
