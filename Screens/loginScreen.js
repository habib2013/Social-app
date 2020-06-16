/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet,TextInput,TouchableOpacity} from 'react-native';

class LoginScreen extends React.Component {
  state = {};
  render() {
    return (
    <View style={styles.container}>
       <Text style={styles.greeting}>{`Hello again. \n Welcome Back`}</Text>
    <View style={styles.errorMessage}>
      <Text>Error</Text>
    </View>

    <View style={styles.form}>
      <View>
        <Text style={styles.inputTitle}>Email Address</Text>
        <TextInput style={styles.input} autoCapitalize="none"></TextInput>
      </View>

      <View style={{marginTop:32}}>
        <Text style={styles.inputTitle}>Password</Text>
        <TextInput style={styles.input} secureTextEntry autoCapitalize="none"></TextInput>
      </View>

    </View>
      <TouchableOpacity style={styles.button}>
        <Text style={{color:"#ffffff"}}>Sign In</Text>
      </TouchableOpacity>
    </View>
    )  
    ;
  }
}

const styles = StyleSheet.create({
   container: {
      flex:1,
  
   },
   greeting: {
     marginTop:32,
     fontSize: 18,
     fontWeight: "400",
     textAlign: "center"
   },
   errorMessage: {
     height:72,
     alignItems:"center",
     justifyContent:"center",
     marginHorizontal: 30
   },
   form: {
     marginBottom:40,
     marginHorizontal:30
   },
   inputTitle: {
     color: "#8a8f9e",
     fontSize: 10,
     textTransform:"uppercase"
   },
   input: {
     borderBottomColor: "#8a8f9e",
     borderBottomWidth: StyleSheet.hairlineWidth,
     height: 40,
     fontSize:15,
     color: "#161f3d"
   },
   button: {
     marginHorizontal: 30,
     backgroundColor: "#e9446a",
     borderRadius:4,
     height:52,
     alignItems:"center",
     justifyContent:"center"
   }
});

export default LoginScreen;
