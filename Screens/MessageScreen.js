/* eslint-disable prettier/prettier */
import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

class MessageScreen extends React.Component {
   render() { 
      return ( 
<View style={styles.container}>
  <Text>Message Screen</Text>
</View>

       );
   }
}

const styles = StyleSheet.create({
   container : {
      flex: 1,
      alignItems: "center",
      justifyContent:"center"
   }
});
 
export default MessageScreen;