/**
 * Created by ggoma on 12/23/16.
 */
import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

export default (props) => {
    return (
        <View style={{width: props.page_width}}>
            <Image style={{margin: 16, alignSelf: 'center', width: props.width, height: props.height}} source={props.source} />
        </View>
    )
}