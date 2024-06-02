import React, { useState, useEffect, useRef } from 'react';
import { View, FlatList, Image, Alert, Pressable, Button, Animated, TouchableOpacity, StyleSheet, Text } from 'react-native';
import prompt from 'react-native-prompt-android';
import Icon from 'react-native-vector-icons/Ionicons'
// To install >> npm i react-native-prompt-android 
// To install >> npm i react-native-vector-icons



const itemHeight = 300

const Task31 = () => {

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
    Number(id) && id< data.length && id>0?
      ref.current?.scrollToIndex({index: id, Animated: true})
    :
      console.warn('Please enter a valid number')
  }

  renderItems = ({item}) => {
    return(
          <View style={styles.FlatListStyle}>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Icon name='add-circle-outline'
                      style = {styles.deleteIconStyle}
                      color={'white'}
                      size={30}
                      onPress={()=> onAdd(item)}/>

                <Icon name='close-circle-outline'
                      style = {styles.addIconStyle}
                      color={'white'}
                      size={30}
                      onPress={()=> onDelete(item.id)}/>
              </View>
          
            
              <Pressable onPress={
                ()=> Alert.alert('','You have selected image')
                }>
                <Image style={styles.imageStyle}
                source={{ uri: item.url }} />
              </Pressable>
              
            </View>
          </View>
          )
  }

  onDelete = (id) =>{
    setContent(content.filter((val, i) => val.id != id))
    console.log(`Image ${id} has been deleted`)
  }

  onAdd = (item) =>{
    const newItem = {
      albumId: item.albumId,
      id: item.id,
      title: item.title,
      url: item.url,
      thumbnailUrl: item.thumbnailUrl
    }
    setContent([...content, newItem])
    console.log(`Image ${item.id} has been added`)

  }

  return (
    <View style={{flex : 1, backgroundColor : 'lightblue'}}>
      <FlatList
        data={content}
        ref={ref}
        horizontal={true}
        renderItem={renderItems}
        keyExtractor={(item, index) => index}
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
    marginBottom: itemHeight,
    
  },
  
  deleteIconStyle:{
    borderRadius: 4,
    marginRight: 270,
    marginBottom:1
  },

  addIconStyle:{
    borderRadius: 4,
    marginBottom:1
  }
})
export default Task31;
