import React from 'react';
import { Text, View, TextInput } from 'react-native';


class Task23 extends React.Component{
    constructor(){
        super();
        this.state={
            text:''
        }
    }
    updateText(val){
        this.setState({text:val})
    }

    render(){
        return(
            <View>
                <Text style={{fontSize:30}}>RN Task23</Text>
                <TextInput placeholder='Please Enter Text here'
                onChangeText={(txt) => this.updateText(txt)}></TextInput>
                <MyClassPage name={this.state.text} />
            </View>
        )
    }
}

class MyClassPage extends React.Component{  
    render(){    
        return(
        <View >
            <Text style={{fontSize:20, color:'red'}}>{this.props.name}</Text>
        </View>
        )
      }
    }
  

export default Task23;