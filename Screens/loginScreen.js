/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet,TextInput,TouchableOpacity, StatusBar,LayoutAnimation,Image,KeyboardAvoidingView,SafeAreaView} from 'react-native';
import * as firebase from 'firebase';

class LoginScreen extends React.Component {
static navigationOptions = {
  header:null
};
 

  state = {
email: "",
password: "",
errorMessage: null


  };

handleLogin = () => {
  const {email,password} = this.state;

  firebase.auth().signInWithEmailAndPassword(email,password).catch(error => this.setState({errorMessage:error.message}))
}

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
      <KeyboardAvoidingView>
    <StatusBar barStyle="light-content"></StatusBar>
       <Text style={styles.greeting}>{`Hello again. \n Welcome Back`}</Text>
    <View style={styles.errorMessage}>
    {this.state.errorMessage && <Text style={{color:"red",fontSize:13,fontWeight:"600",textAlign:"center"}}>{this.state.errorMessage}</Text>}
    </View>

    <View style={styles.form}>
      <View>
        <Text style={styles.inputTitle}>Email Address</Text>
        <TextInput returnKeyType="next" keyboardType="email-address" value={this.state.email} style={styles.input} autoCapitalize="none" onChangeText={email => this.setState({email})} ></TextInput>
      </View>

      <View style={{marginTop:32}}>
        <Text style={styles.inputTitle}>Password</Text>
        <TextInput returnKeyType="next" value={this.state.password} onChangeText={password => this.setState({password})} style={styles.input} secureTextEntry autoCapitalize="none"></TextInput>
      </View>

    </View>
      <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
        <Text style={{color:"#ffffff"}}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate("Register")} style={{alignSelf:"center",marginTop:32}}>
        <Text style={{color:"#414959",fontSize: 13}}>New To Social App ? <Text style={{fontWeight: "500",color:"#e9446a"}}>Sign Up</Text> </Text>
      </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
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
