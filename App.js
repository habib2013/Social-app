/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React  from 'react';
import LoadingScreen from './Screens/loadingScreen';
import ReginScreen from './Screens/loginScreen';
import RegisterScreen from './Screens/registerScreen';
import LoginScreen from './Screens/loginScreen';
import HomeScreen from './Screens/homeScreen';
import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAtMrui49AfIVhQmHCaKpnoYATLcpgGn8k",
  authDomain: "social-app-a0f46.firebaseapp.com",
  databaseURL: "https://social-app-a0f46.firebaseio.com",
  projectId: "social-app-a0f46",
  storageBucket: "social-app-a0f46.appspot.com",
  messagingSenderId: "668057381690",
  appId: "1:668057381690:web:8cb0e52cecd57181e63e03",
  measurementId: "G-T3SMV9828X"
};

firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen
})

const AuthStack = createStackNavigator({
  Login:LoginScreen,
  Register: RegisterScreen,
})



class App extends React.Component {
  
  render() { 
    return (
<LoadingScreen/>

);
  }
}

export default createAppContainer(
createSwitchNavigator({
  Loading:LoadingScreen,
  App:AppStack,
  Auth:AuthStack
},
{
  initialRouteName:"Loading"
}
)

)
