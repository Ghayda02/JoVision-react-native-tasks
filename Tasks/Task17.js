import React, { useState } from 'react';
import {View, Text, Button} from 'react-native'

class Task17 extends React.Component{
  
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
        <Text style={{fontSize:30}}>RN Task17</Text>
        {
        this.state.content ? <Text style={{fontSize:20}}> Ghayda </Text> : null
        }
        <Button title= {this.state.content? "Hide":"Show"} onPress={this.componentHideAndShow} />
        
      </View>
    )
  }
}

  export default Task17;
