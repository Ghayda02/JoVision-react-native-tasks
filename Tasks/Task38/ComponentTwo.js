import React, {useState, useCallback, useContext} from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl, TextInput} from 'react-native';
import { useTextContext, useUpdateTextContext} from './Context';
import ComponentOne from './ComponentOne';

const ComponentTwo = () => {

    const text = useTextContext();
    const updateText = useUpdateTextContext();

    const [newName, setNewName] = useState(text)

    const handleChangeText = newText => {
        updateText(newText);
      };

    return(
                
        <View style={{backgroundColor:'pink', margin:6, borderRadius:5}}>
                <TextInput 
                onChangeText={handleChangeText} style={{backgroundColor:'lightgreen'}}/>
                <Text>{text}</Text>
                <ComponentOne text = {text}/>
        </View>
    )
}

export default ComponentTwo;