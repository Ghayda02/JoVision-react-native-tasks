import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';

const Screen4 = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen 4</Text>
      <Button title='Go to Screen 1'
      onPress={()=> navigation.navigate('Screen1')}/>
      <Button title='Go to Screen 2'
      style={{padding:3}}
      onPress={()=> navigation.navigate('Screen2')}/>
       <Button title='Go to Screen 3'
      onPress={()=> navigation.navigate('Screen3')}/>
    </View>
  );
};

export default Screen4;