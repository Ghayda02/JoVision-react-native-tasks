import React from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const Task32 = () => {
  return (
    <View style={styles.container}>
      <Video
        source={{uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'}}
        style={styles.video}
        poster="https://media-cache.cinematerial.com/p/500x/4kdey213/elephants-dream-movie-poster.jpg?v=1456412430"
        posterResizeMode="cover"
        volume={10}
        controls={true}
        fullscreenOrientation={'landscape'}
      />
    </View>
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

export default Task32;