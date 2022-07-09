import React from "react";
import {Text,StyleSheet, View, FlatList, Button} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const TextComponent = (props) =>{
    const great = [
        { name:"Friend 1#"},
        { name:"Friend 2#"},
        { name:"Friend 3#"},
        { name:"Friend 4#"},
        { name:"Friend 5#"},
        { name:"Friend 6#"},
        { name:"Friend 7#"},
        { name:"Friend 8#"},
        { name:"Friend 9#"},
    ]
    return <View style={{margin:10}}> 
        <Text style={style.textStyle}>I am a boy without style </Text>
        <FlatList 
        keyExtractor={(friend)=>friend.name}
        data={great} 
        renderItem={({item}) =>{
            return <Text>{item.name}</Text>;
        }}
        />
        <Button title="Home" onPress={()=>{props.navigation.navigate("Home")}}/>
        <TouchableOpacity onPress={()=>console.log("List Pressed")}>
        <Text style={style.textStyle}>I am a boy without style </Text>
        </TouchableOpacity>
    </View>
};

const style = StyleSheet.create({
    textStyle:{
        fontSize: 25,
        margin:10,
        fontWeight:"bold",
        textAlign:"center"
    }
});
export default TextComponent;