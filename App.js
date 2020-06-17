/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React  from 'react';
import LoadingScreen from './Screens/loadingScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
// import Icon from 'react-native-ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
// import ReginScreen from './Screens/loginScreen';
import RegisterScreen from './Screens/registerScreen';
import LoginScreen from './Screens/loginScreen';
import HomeScreen from './Screens/homeScreen';
import MessageScreen from './Screens/MessageScreen';
import PostScreen from './Screens/PostScreen';
import ProfileScreen from './Screens/ProfileScreen';
import NotificationScreen from './Screens/NotificationScreen';

import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAtMrui49AfIVhQmHCaKpnoYATLcpgGn8k",
  authDomain: "social-app-a0f46.firebaseapp.com",
  databaseURL: "https://social-app-a0f46.firebaseio.com",
  projectId: "social-app-a0f46",
  storageBucket: "social-app-a0f46.appspot.com",
  messagingSenderId: "668057381690",
  appId: "1:668057381690:web:8cb0e52cecd57181e63e03",
  measurementId: "G-T3SMV9828X",
};

// checking it

firebase.initializeApp(firebaseConfig);

const AppTabNavigator = createBottomTabNavigator({
  Home: {
    screen:HomeScreen,
    navigationOptions : {
      tabBarIcon: ({tintColor}) => <Icon name="home" size={24} color={tintColor}/>
    }
  },
  Message: {
    screen:MessageScreen,
    navigationOptions : {
      tabBarIcon: ({tintColor}) => <Icon name="md-chatboxes" size={24} color={tintColor}/>
    }
  },
})

const AuthStack = createStackNavigator({
  Login:LoginScreen,
  Register: RegisterScreen,
});




export default createAppContainer(
createSwitchNavigator({
  Loading:LoadingScreen,
  App:AppTabNavigator,
  Auth:AuthStack
},
{
  initialRouteName:"Loading"
}
)

)
