/* eslint-disable prettier/prettier */
import React from 'react';
import {View,StyleSheet} from 'react-native';

class PostScreen extends React.Component {
   render() { 
      return ( 
<View style={styles.container}>
   Post Screen
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
 
export default PostScreen;