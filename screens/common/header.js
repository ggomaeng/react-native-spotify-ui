/**
 * Created by ggoma on 12/22/16.
 */
import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import D from './dimensions';

export default (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position:'absolute',
        top: 0,
        backgroundColor: 'rgba(27,27,27,.9)',
        width: D.width,
        height: 72,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    },

    text: {
        fontWeight: '500',
        color: 'white'
    }
});