/* eslint-disable prettier/prettier */
import React from 'react';
import {View,StyleSheet} from 'react-native';

class NotificationScreen extends React.Component {
   render() { 
      return ( 
<View style={styles.container}>
   NotificationScreen 
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
 
export default NotificationScreen;