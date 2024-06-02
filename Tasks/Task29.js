import React, { useState, useEffect, useRef } from 'react';
import { View, FlatList, Image, Alert, Pressable, Button, Animated, StyleSheet } from 'react-native';
import prompt from 'react-native-prompt-android';
// To install >> npm i react-native-prompt-android --save



const itemHeight = 300

const Task29 = () => {

  const [content, setContent] = useState([]);
  const ref = useRef(null);




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

  function scrollTo(id, data){
    Number(id) && id < data.length && id>0?
      ref.current?.scrollToIndex({index: id, Animated: true})
    :
      console.warn('Please enter a valid number')
  }

  renderItems = ({item}) =>{
    return(
        <View style={styles.FlatListStyle}>
          <Pressable onPress={
            ()=> Alert.alert('','You have selected image')
          }>
            <Image style={styles.imageStyle}
            source={{ uri: item.url }} />
          </Pressable>
        </View>
    )
  }

  return (
    <View style={{flex : 1, backgroundColor : 'lightblue'}}>
      <FlatList
        data={content}
        ref={ref}
        horizontal={true}
        renderItem={renderItems}
        keyExtractor={(item, index) => item.id}
        getItemLayout={(item, index) =>{
          return {index, length: itemHeight, offset: itemHeight * index}
        }}
      />
      <Button title='Click' onPress={()=>{
          prompt(
            '',
            'Please enter the image id to display',
            [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: (index) => scrollTo(index, content)},
            ],
            {
                type: 'plain-text',
                cancelable: false,
            }
        )
      }

      }/>
    </View>
  );
};


const styles = StyleSheet.create({
  imageStyle:{
    width : itemHeight,
    height : itemHeight,
    borderRadius: 8
  },

  FlatListStyle:{
    flexDirection: 'row-reverse',
    justifyContent : 'space-between',
    alignItems : 'center',
    margin: 4,
    padding: 4,
    marginBottom: itemHeight
    
  },
  
})

export default Task29;
