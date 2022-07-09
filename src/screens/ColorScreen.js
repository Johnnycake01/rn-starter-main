import React,{useState} from 'react';
import {View,Button,StyleSheet,FlatList} from 'react-native';

const ColorScreen = () => {
    const [colors,addColor] = useState([])
    return (
        <View>
           <Button title='Add a color'
            onPress={()=>{
                addColor([...colors,RandomColorGen()])
            }}/> 
            <FlatList
            keyExtractor={(item)=>item}
            data={colors}
            renderItem={({item})=>{
             return <View style={{height:100,width:100, backgroundColor:item}} />
            }}
            />

        </View>
    );
};
const RandomColorGen = ()=>{
const Red = Math.floor(Math.random() * 256)
const Green = Math.floor(Math.random() * 256)
const Blue = Math.floor(Math.random() * 256)
return `rgb(${Red},${Green},${Blue})`
}
export default ColorScreen;
const styles =StyleSheet.create({

});