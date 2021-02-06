<script src="http://localhost:8097"></script>
import React, { PureComponent } from 'react';
import { View, Text,Button, StyleSheet } from 'react-native';


import styles from '../styles/styles';
import Receipt_Instances from './Receipt_Instances';
import data from "./data";

const styless = StyleSheet.create({
    text: {
      fontFamily: "Roboto",
      fontSize: 336,
      // marginVertical: 15,
      // textAlign: 'center',
    },
  });

function LandingPage(props){
    const pressHandler = () =>{
        props.navigation.navigate('Snap')
    }
    const receiptComponents = data.map(receipt => <Receipt_Instances style={styless.text} key = {receipt.id} store = {receipt.store}
    total = {receipt.total} date = {receipt.date}/>)
    
    return (
        <View>
            <Text>gucci</Text>
            {receiptComponents}
            <Button title='go to snap' onPress={pressHandler}></Button>
        </View>
    );
}  




export default LandingPage;