import React from 'react';
import { Text, View, TextInput } from 'react-native';


class Task23 extends React.Component{
    constructor(){
        super();
        this.state={
            text:''
        }
    }

    updateText = (newText) =>{
        this.setState({text : newText})
    }
   
    render(){
        return(
            <View>
                <Text style={{fontSize:30}}>RN Task23</Text>
                <Text style={{fontSize:30}}>{this.state.text}</Text>
                <MyClassPage updateText= {this.updateText} />
            </View>
        )
    }
}

class MyClassPage extends React.Component{  
    
    render(){    
        return(
        <View >
            <TextInput placeholder='Please Enter Text here'
                onChangeText={(txt) => this.props.updateText(txt)}></TextInput>
        </View>
        )
      }
    }
  

export default Task23;