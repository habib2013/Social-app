/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import * as firebase from 'firebase';


class HomeScreen extends React.Component {
  state = {
email: "",
displayName: ""

  };
componentDidMount() {
  const {email,displayName} = firebase.auth().currentUser;
  this.setState({email,displayName});
}

logout = () => {
  firebase.auth().signOut();
}

  render() {
    return (
    <View style={styles.container}>
         <Text>Hi {this.state.email}</Text>
         <TouchableOpacity style={{marginTop:32}} onPress={this.logout}>
           <Text>Logout</Text>
         </TouchableOpacity>
    </View>);
  }
}

const styles = StyleSheet.create({
   container: {
      flex:1,
     justifyContent: 'center',
      alignItems: 'center',
   }
});

export default HomeScreen;
