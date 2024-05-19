import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Task18 extends React.Component{
  
    constructor(){
      super();
      this.state = {
        isloading: true
      }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({isloading: false})}
            ,5000)
    }
  
    render(){
      
      return(
        <View >
          <Text style={{fontSize:30}}>RN Task18</Text>
          {
            this.state.isloading? 
            <View>
                <ActivityIndicator size={'large'}/>
                <Text style={{fontSize:20}}>Loading...</Text>
            </View>
            :
            <Text style={{fontSize:20}}>Ghayda</Text>
          }
          
        </View>
      )
    }
  }

  
    export default Task18;