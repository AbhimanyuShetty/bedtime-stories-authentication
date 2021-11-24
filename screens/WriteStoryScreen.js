import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ToastAndroid,
 KeyboardAvoidingView} from 'react-native';
import {Header} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';


export default class WriteStoryScr extends React.Component{
    constructor(){
        super();
        this.state={
          title: '',
          author: '',
          story: '',
        }
    }

    submitStory = ()=>{
      db.collection("stories").add({
          title: this.state.title,
          author: this.state.author,
          story: this.state.story
      })
      this.setState({
          title: "",
          author: "",
          story: ""
      })
      //ToastAndroid.show(" Your story has been submitted",ToastAndroid.LONG)
      //ToastAndroid.show(" Your story has been submitted",ToastAndroid.SHORT)
      alert('Story Submitted Successfully');
  }
    
    render(){
        return(
          <KeyboardAvoidingView  style={styles.container} behavior="padding" enabled>
            <Text style={styles.story}> BEDTIME STORIES APP </Text>
            
          <TextInput style={styles.inputBox} 
          placeholder={'What is the name of your story?'} 
          onChangeText={(text)=>{
            this.setState({title:text})
          }}
          />
          <TextInput style={styles.inputBox}
            placeholder={'Who is the author of the  story?'} 
            onChangeText={(text)=>{
            this.setState({author:text})
          }}
            />
          <TextInput style={styles.inputBox2}  
          placeholder={'Write your story here'} 
          multiline={true}
          onChangeText={(text)=>{
            this.setState({story:text})
          }}/>
      <TouchableOpacity style={styles.submit} onPress={this.submitStory}>
                      <Text style={styles.text}>Submit</Text>
                      </TouchableOpacity>
          </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#00ffa2'
    },
  inputBox: {
    marginTop: 20,
    width: 280,
    alignSelf: 'center',
    height: 40,
    fontFamily : 'Eras Bold ITC',
    textAlign: 'center',
    backgroundColor: 'orange'
    },
    inputBox2: {
      marginTop: 20,
      width: 280,
      alignSelf: 'center',
      fontFamily : 'Eras Bold ITC',
      height: 200,
      textAlign: 'center',
      backgroundColor: 'orange'
      },
      text:{
      color:'white',
      fontSize:20,
      textAlign: 'center',
      fontWeight: 'Eras Bold ITC'
      },
      submit:{
      justifyContent:'center',
      backgroundColor:'orange',
      marginTop:10,

      },
      story:{
        justifyContent:'center',
        alignItems:'center',
        textAlign: 'center',
        backgroundColor: 'cyan',
        fontSize: 30,
        fontWeight: 'bold',
        color:'orange',
        fontFamily: 'Eras Bold ITC'
    },
    
    
})