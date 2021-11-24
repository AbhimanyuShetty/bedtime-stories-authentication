import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Alert} from 'react-native';
import firebase from 'firebase';

export default class LoginScreen extends React.Component {
  constructor(){
    super()
    this.state={
      email : "",
      password : ""
    }
  }

  showAlert(errorCode){
    switch(errorCode){
      case 'auth/user-not-found':
        alert('To many requests.Try again later')
        this.setState({
          email:"",
          password : ""
        })
        break
      case 'auth/invalid-email':
        alert('Please enter the correct email and password')
        this.setState({
          password : ""
        })
        break
      default:
        this.setState({
          email:"",
          password : ""
        })
        alert('Invalid email and password')
    }
  }

  render(){
    return(
      <View style={styles.container}>

        <View style={styles.container1}>
          <Text style={styles.title}>Bedtime Stories</Text>
         <Image
          source={require("../assets/loginimg.jpg")}
          style={{width:350, height:300}}
       />
          <TextInput
              placeholder="Enter the e-mail"
              placeholderTextColor = "white"
              onChangeText= {(emailText)=>{
                  this.setState({
                      email: emailText
                  })
              }}
              value={this.state.email}
              style={styles.textInput}
              />
          <TextInput
              placeholder="Enter the password"
              placeholderTextColor = "white"
              onChangeText= {(passwordText)=>{
                  this.setState({
                      password: passwordText
                  })
              }}
              value={this.state.password}
              style={styles.textInput}
              secureTextEntry = {true}
              />
        </View>
        <View style={styles.container2}>
          <TouchableOpacity
            style={styles.button}
            onPress = {async()=>{
              var email  = await this.state.email;
              var password = await this.state.password
              firebase.auth().signInWithEmailAndPassword(email, password)
              .then(()=>{
                this.props.navigation.navigate('WriteStory')
              })
              .catch((error)=> {
                var errorCode = error.code;
                var errorMessage = error.message;
                return this.showAlert(errorCode)
              })
            }}
            >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'cyan'
  },
  title:{
    fontSize:30,
    color:'orange',
    fontFamily: 'arial black',
    marginTop: -5
  },
  image:{
    width:100,
    height:100,
    margin:20,
    borderWidth:5,
    borderColor:'orange',
    borderRadius:20
  },
  container1:{
    justifyContent:'center',
    alignItems:'center',
    margin: 20,
    marginBottom: -10
  },
  container2:{
    alignItems:'center',
    margin: 10 
  },
  textInput : {
    width:200,
    height: 50,
    borderWidth:2,
    borderColor:'orange',
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom:5,
    borderRadius:10,
    margin: 10,
    backgroundColor: '#ffb300',
  },
  button:{
    width:200,
    backgroundColor: '#ea00ff',
    justifyContent:'center',
    alignItems:'center',
    borderWidth: 3,
    borderColor:'orange',
    marginTop: 1,
    borderRadius:10,
  },
  buttonText:{
    color:'white',
    fontSize:20,
  }
})