import React from 'react';
import {View,StyleSheet,Text,Image} from 'react-native'

const CardDetail = (props) => {
    return (
        <View style={style.cardDesign}>
            <Image style={style.imageProp} source={props.imageSrc}/>
            <Text style={style.textStyle}>{props.title}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    cardDesign:{
        height:150,
        width:300,
        borderRadius:5,
        borderColor:"black",
        borderWidth:2,
        marginVertical:20,
        marginStart:10
    },
    imageProp:{
        width:100,
        height:50,
        margin:10
   },
   textStyle:{
    fontSize: 25,
    margin:10,
    fontWeight:"bold",
    textAlign:"center"
}
})
export default CardDetail; 