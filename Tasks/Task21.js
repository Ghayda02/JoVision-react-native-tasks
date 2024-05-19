import react, { useEffect, useState } from 'react';
import { Text, View, Button, SafeAreaView } from 'react-native';


const Task21=() => {
  const [content, setContent] = useState(false);
  
  return(
    <View >
    <Text style={{fontSize:30}}>RN Task21</Text>
    <Button title='Show' onPress={()=>setContent(!content)} />
    {
        content?
        <MyFunctionPage name={content} />
        :
        null
    }
  </View> 
  )
}

const MyFunctionPage=() => {

    useEffect(()=>{
        console.warn('MyFunctionPage loaded')
    }, [])

    useEffect(()=>{
        return()=>{console.warn('MyFunctionPage unloaded')}
    }

    )

    return(
        <View>
            <Text style={{fontSize:20}}>Hello from MyFunctionPage</Text>
        </View>
    )
}

export default Task21;