
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Task35 = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    loadSavedData();
  }, []);

  const loadSavedData = async () => {
    try {
      const savedData = await AsyncStorage.getItem('userData');
      if (savedData) {
        const { name: savedName, age: savedAge, country: savedCountry, timestamp } = JSON.parse(savedData);
        const savedTimestamp = new Date(timestamp);
        const currentTimestamp = new Date();

        if (currentTimestamp - savedTimestamp < 60000) {
          setName(savedName);
          setAge(savedAge);
          setCountry(savedCountry);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    const userData = {
      name,
      age,
      country,
      timestamp: new Date().toLocaleString(),
    };

    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      console.log(userData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{flex:1}}>
      <View style={{flexDirection: 'row', margin:4, backgroundColor:'pink', borderRadius:4, padding:12}}>
      <Text style={{fontSize: 18}}>Name:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
      />
      </View>

      <View style={{flexDirection: 'row', margin:4, backgroundColor:'pink', borderRadius:4, padding:12}}>
      <Text style={{fontSize: 18}}>Age:</Text>
      <TextInput
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      </View>

      <View style={{flexDirection: 'row', margin:4, backgroundColor:'pink', borderRadius:4, padding:12}}>
      <Text style={{fontSize: 18}}>Country:</Text>
      <TextInput
        value={country}
        onChangeText={setCountry}
      />
      </View>
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};


export default Task35;