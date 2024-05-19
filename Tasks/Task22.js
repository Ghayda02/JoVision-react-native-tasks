import { useState } from 'react';
import { Text, View, TextInput } from 'react-native';


const Task22=() => {
  const [content, setContent] = useState('');
  
  return(
    <View >
        <Text style={{fontSize:30}}>RN Task22</Text>
        <Text style={{fontSize:20}}>{content}</Text>
        <MyFunctionPage changeTxt={setContent} />
    </View> 
  )
}

const MyFunctionPage=(props) => {

    return(
        <View>
            <TextInput placeholder='Please Enter Text here'
            onChangeText={(text) => props.changeTxt(text)}>
            </TextInput>
        </View>
    )
}

export default Task22;