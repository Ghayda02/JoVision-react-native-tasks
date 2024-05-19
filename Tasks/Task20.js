import React, { useState, useEffect } from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';

class Task20 extends React.Component{  
    constructor(){
        super();
        this.state = {
          content: false
        }
      }
    
    componentHideAndShow = () => {
    this.setState(previousState => ({ content: !previousState.content }))
    }

    render(){
      return(
        <View >
          <Text style={{fontSize:30}}>RN Task20</Text>
          <Button title='Show' onPress={this.componentHideAndShow} />
          {this.state.content?
            <MyClassPage />
            :
            null
            }
        </View>
      )
    }
  }


class MyClassPage extends React.Component{  

    componentDidMount(){
        console.warn('MyClassPage loaded')
    }

    componentWillUnmount(){
        console.warn('MyClassPage unloaded')
    }

    render(){    
        return(
        <View >
            <Text style={{fontSize:20}}>Hello from MyClassPage</Text>
        </View>
        )
      }
    }
  
    export default Task20;