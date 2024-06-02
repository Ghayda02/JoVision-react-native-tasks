import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, StatusBar, Alert, Pressable, Dimensions } from 'react-native';
import { globalStyles, images } from './styles/global';


const Task28 = () => {

  const [content, setContent] = useState([]);

  useEffect(()=>{
    fetchTextAsync();
  }, [])


  async function fetchTextAsync(){
    try
    {
        const result = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=20&_page=1')
        const data = await result.json()
        setContent(data)
    }
    catch(e)
    {
        console.log(e)
    }
  }

  return (
    <View style={{flex : 1, backgroundColor : 'red'}}>
      <FlatList
        data={content}
        horizontal={true}
        renderItem={({ item }) => 
        <View style={{backgroundColor : 'green'}}>
          <Pressable onPress={
            ()=> Alert.alert('','You have selected image')
          }>
            <Image style={{width : Dimensions.get('screen').width, height : Dimensions.get('screen').height}}
            source={{ uri: item.url }} />
          </Pressable>
        </View>}
        keyExtractor={item => item.id}
      />
    </View>
  );
};


export default Task28;