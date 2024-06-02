import React, {useState, useCallback, useContext} from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl, TextInput} from 'react-native';
import { LevelContext } from './Context';
import { UserNameContext } from '../../App';

class ComponentOne extends React.Component {
    
    render(){
        return(       
            <View style={{backgroundColor: 'lightblue'}}>
                <Text>{this.props.text}</Text>
            </View>
        )
    }
}

export default ComponentOne;