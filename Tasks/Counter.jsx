import react, { useState } from 'react';
import { Text, View, Button, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { increment, decrement } from './context/actions/counterActions';
import { connect } from 'react-redux';


const Counter=({count, increment, decrement}) => {  
  return(
        <View>
            <TouchableOpacity onPress={increment}>
                <Text style={{fontSize: 20}}>Increment</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 20}}>{count}</Text>
            <TouchableOpacity onPress={decrement}>
                <Text style={{fontSize: 20}}>Decrement</Text>
            </TouchableOpacity>
            <TextInput>{count}</TextInput>
        </View>
  )
}

const mapStateToProps =(state)=>({
    count: state.counter.count
})

const mapDispatchToProps = {
    increment,
    decrement
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
