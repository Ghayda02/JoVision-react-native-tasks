import React, { useState } from 'react';
import {View, Text, Button} from 'react-native'

class Task16 extends React.Component{
  
  constructor(){
    super();
    this.state = {
      content: true
    }
  }

  componentHideAndShow = () => {
    this.setState(previousState => ({ content: !previousState.content }))
  }


  render(){
    
    return(
      <View>
        <Text style={{fontSize:30}}>RN Task16</Text>
        {
        this.state.content ? <Text style={{fontSize:20}}> Ghayda </Text> : null
        }
        <Button title= "Show" onPress={this.componentHideAndShow} />
        
      </View>
    )
  }
}

  export default Task16;


