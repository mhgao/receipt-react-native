import React, { PureComponent } from 'react';
import { View, Text,Button } from 'react-native';

function Receipt_Instances(props){
    // console.log(props)
    return(<View>
        <Text style={props.style}>{props.store}</Text>
        <Text>{props.date}</Text>
        <Text>{props.total}</Text>
    </View>
    )
}

export default Receipt_Instances;