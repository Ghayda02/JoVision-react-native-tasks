import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';

const Screen2 = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen 2</Text>
      <Button title='Go to Screen 1'
      style={{padding:3}}
      onPress={()=> navigation.navigate('Screen1')}/>
       <Button title='Go to Screen 3'
      onPress={()=> navigation.navigate('Screen3')}/>
       <Button title='Go to Screen 4'
      onPress={()=> navigation.navigate('Screen4')}/>
    </View>
  );
};

export default Screen2;