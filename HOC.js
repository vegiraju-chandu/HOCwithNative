import React from 'react';
import {
    View,
    NativeModules
} from 'react-native';

const {Star} = NativeModules;

export function makeConnectionWithString(request) {
    //Do need full things with native communication.
}


export const HOC = (props) => {
    const {
        bColor = 'red',
        bWidth = 1,
    } = props;

    return(
        <View style = {{flex:1,borderColor:'red',borderWidth:5,borderRadius:5}}> 
            {props.children}
        </View>
    )
}


