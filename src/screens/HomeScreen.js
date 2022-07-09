import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import CardDetail from '../components/CardDetail';

const HomeScreen = (props) => {
  return <View>
    <Text style={styles.text}>Hello world</Text>
    <Button 
    style={styles.buttonStyle}
    title='Goto Component Screen'
    onPress={()=>props.navigation.navigate('TextC')}
    />
    <Button 
    style={styles.buttonStyle}
    title='Goto Counter Screen'
    onPress={()=>props.navigation.navigate('Counter')}
    />
     <Button 
    style={styles.buttonStyle}
    title='Goto Color Screen'
    onPress={()=>props.navigation.navigate('Color')}
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
  buttonStyle:{
    width:100,
    margin:20,
    backgroundColor:"yellow"
  }
});

export default HomeScreen;

