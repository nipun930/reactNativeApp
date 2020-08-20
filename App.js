import 'react-native-gesture-handler';
import React, { Component } from 'react';



import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import HomePage from './Components/HomePage';
import ProfilePage from './Components/ProfilePage';
import CameraComponent from './Components/CameraComponent';

const Stack = createStackNavigator();

// export default function App() {
export default class App extends Component {

  render() {
    return (
      
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginPage} options={{ title: 'Login', headerLeft: null }} />
            <Stack.Screen name="Signup" component={SignupPage} options={{ title: 'Signup', headerLeft: null }} />
            <Stack.Screen name="Profile" component={ProfilePage} options={{ title: 'Profile', headerLeft: null }} />
            <Stack.Screen name="Home" component={HomePage} options={{ title: 'Home', headerLeft: null }}/>
            <Stack.Screen name="CameraComponent" component={CameraComponent} options={{ title: 'Scan', headerLeft: null }}/>
          </Stack.Navigator>
        </NavigationContainer>

    );
  }
}




