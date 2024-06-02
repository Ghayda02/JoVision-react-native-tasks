import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';

const Screen1 = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen 1</Text>
      <Button title='Go to Screen 2'
      style={{padding:3}}
      onPress={()=> navigation.navigate('Screen2')}/>
       <Button title='Go to Screen 3'
      onPress={()=> navigation.navigate('Screen3')}/>
       <Button title='Go to Screen 4'
      onPress={()=> navigation.navigate('Screen4')}/>
    </View>
  );
};

export default Screen1;