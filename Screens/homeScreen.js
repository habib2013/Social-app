/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class HomeScreen extends React.Component {
  state = {};
  render() {
    return (
    <View style={styles.container}>
         <Text>Home Screen</Text>
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