import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import fakeData from '../../fakeData';

const Fullpost = ({ navigation, route, post }) => {
  let postid = route.params.postid;
  const data = fakeData.find(item => item.id === postid);
  const {image, title,content} = data;
  return (
    
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.cimage} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
      <Button title="Close" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
  cimage : {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  }
});

export default Fullpost;
