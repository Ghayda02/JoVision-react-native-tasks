import { useRef, useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import MyFunctionPage from './MyFunctionPage';


const Task24=() => {
  let ref = useRef(null);

  function handleTextChange(text) {
    ref.current.onInputTextChange(text);
  }
  
  return(
    <View >
        <Text style={{fontSize:30}}>RN Task24</Text>
        <TextInput placeholder='Please Enter Text here'
            onChangeText={(text) => handleTextChange(text)}>
            </TextInput>
        <MyFunctionPage ref={ref} />
    </View> 
  )
}


export default Task24;