import React from 'react';
import { Text, View, TextInput } from 'react-native';

class Task25 extends React.Component{
    constructor(props){
        super(props);
        this.myRef = React.createRef();
        this.state={
            text:''
        }
    }

    handleTextChange(text) {
        this.myRef.current.onInputTextChange(text);
    }

    render(){
        return(
            <View>
                <Text style={{fontSize:30}}>RN Task25</Text>
                <TextInput placeholder='Please Enter Text here'
                onChangeText={(txt) => this.handleTextChange(txt)}></TextInput>
                <MyClassPage ref={this.myRef} />
            </View>
        )
    }
}

class MyClassPage extends React.Component{  
    constructor(props){
        super(props);
        this.state ={
            text:''
        }
    }
    onInputTextChange=(txt)=>{
        this.setState({name:txt})
    }


    render(){    
        return(
        <View >
            <Text style={{fontSize:20, color:'red'}}>{this.state.name}</Text>
        </View>
        )
      }
    }

export default Task25;