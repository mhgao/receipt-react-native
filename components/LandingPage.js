import React, { PureComponent } from 'react';
import { View, Text,Button } from 'react-native';

import styles from '../styles/styles';
import Receipt_Instances from './Receipt_Instances';
import data from "./data";

function LandingPage(props){
    const pressHandler = () =>{
        props.navigation.navigate('Snap')
    }
    const receiptComponents = data.map(receipt => <Receipt_Instances key = {receipt.id} store = {receipt.store}
    total = {receipt.total} date = {receipt.date}/>)
    
    return (
        <View>
            <Text>gucci</Text>
            <Receipt_Instances />
            {receiptComponents}
            <Button title='go to snap' onPress={pressHandler}></Button>
        </View>
    );
}  
 
export default LandingPage;