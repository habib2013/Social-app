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
