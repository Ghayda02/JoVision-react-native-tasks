import react, { useEffect, useState } from 'react';
import { Text, View, Button, SafeAreaView, Alert, Image } from 'react-native';
import { globalStyles, images } from './styles/global';


const Task27=() => {
    const [value, setValue] = useState(null)

    const submitHandler=()=>{
        Alert.alert('','Please Choose the image number to show',
            [
                {
                    text:'1',
                    onPress: () => setValue('1')
                },
                {
                    text:'2',
                    onPress: () => setValue('2')
                },
                {
                    text:'3',
                    onPress: () => setValue('3')}
            ]
        );
    }
  
  return(
    <View>
    <Text style={{fontSize:30}}>RN Task27</Text>
    <Button title='Submit'onPress={()=>submitHandler()}/>
    {
        value !=null?
        <View style={globalStyles.container}>
        <Image source={images.myImages[value]} />
        </View>
        :
        null
    }
    
  </View> 
  )
}

export default Task27;