import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    padding: 80,
    backgroundColor: 'lightblue'
  },
});

export const images = {
  myImages: {
    '1': require('../Resource/image_1.png'),
    '2': require('../Resource/image_2.png'),
    '3': require('../Resource/image_3.png'),
    }
};