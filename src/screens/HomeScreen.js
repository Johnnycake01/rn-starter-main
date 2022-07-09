import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import CardDetail from '../components/CardDetail';

const HomeScreen = (props) => {
  return <View>
    <Text style={styles.text}>Hello world</Text>
    <Button 
    title='Goto Component Screen'
    onPress={()=>props.navigation.navigate('TextC')}
    />
    <CardDetail title="beach" imageSrc={require('../../assets/beach.jpg')}/>
    <CardDetail title="forest" imageSrc={require('../../assets/forest.jpg')}/>
    <CardDetail title=" mountain" imageSrc={require('../../assets/mountain.jpg')}/>
    </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

