import React, { useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';

const Task33 = () => {
  const ref = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePress = () =>{
    if(ref.current){
      isPlaying? ref.current.pause() : ref.current.play();
      setIsPlaying(!isPlaying)
    }

  }
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Video
          ref={ref}
          source={{uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'}}
          style={styles.video}
          poster="https://media-cache.cinematerial.com/p/500x/4kdey213/elephants-dream-movie-poster.jpg?v=1456412430"
          posterResizeMode="cover"
          volume={10}
          controls={false}
          fullscreenOrientation={'landscape'}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default Task33;