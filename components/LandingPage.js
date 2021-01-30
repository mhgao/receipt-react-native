import React, { PureComponent } from 'react';
import { View, Text,Button } from 'react-native';

import styles from '../styles/styles';

const screens = {
    //key: value -_>
}

export default function LandingPage(props){
    const pressHandler = () =>{
        props.navigation.navigate('Snap')
    }
        return (
            <View>
                <Text>gucci</Text>
                <Button title='go to snap' onPress={pressHandler}></Button>
            </View>
            
       
        );

}   