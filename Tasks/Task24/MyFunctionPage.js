import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { Text, View, TextInput } from 'react-native';

function MyFunctionPage(props, ref){

    const [content, setContent] = useState('');
    useImperativeHandle(ref, () => {
        return {
            onInputTextChange(text){
                setContent(text)
            }
        };
      }, []);
    return(
        <View>
            <Text style={{fontSize:20}} >{content}</Text>
        </View>
    )
}

export default forwardRef(MyFunctionPage);