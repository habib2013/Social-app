/* eslint-disable prettier/prettier */
import React from 'react';
import {View,StyleSheet} from 'react-native';

class ProfileScreen extends React.Component {
   render() { 
      return ( 
<View style={styles.container}>
   Profile Screen
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
 
export default ProfileScreen;