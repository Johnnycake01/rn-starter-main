import React,{useState} from 'react';
import {Button,Text,StyleSheet,View} from 'react-native'

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);
    return (
        <View>
            <Button 
            title='Increase'
            onPress={()=>{ setCounter(counter+1);}}
            />
            <Button 
            title='Decrease'
            onPress={()=>{ setCounter(counter -1);}}
            />
            <Text>Counter value is: {counter}</Text>
        </View>
    );
};

export default CounterScreen;
const style = StyleSheet.create({

})