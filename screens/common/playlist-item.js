/**
 * Created by ggoma on 12/22/16.
 */
import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import D from './dimensions';

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default (props) => {
    return (
        <View style={styles.container}>
            <Image source={props.source} style={[styles.album, props.circle ? {borderRadius: (D.width * 4.2/10)/2} : {}]} />

            <Text style={styles.text}>{props.title}</Text>
            <Text style={styles.followers}>{numberWithCommas(props.followers)} FOLLOWERS</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 8,
        marginLeft: 12
    },

    album: {
        width: D.width * 4.2/10,
        height: D.width * 4.2/10,
        backgroundColor: 'white'
    },

    img: {
        flex: 1,
        height: null,
        width: null
    },

    text: {
        fontSize: 10,
        color: 'white',
        fontWeight: '600',
        alignSelf: 'center',
        marginTop: 8,
    },

    followers: {
        fontSize: 8,
        color: 'gray',
        alignSelf: 'center',
        fontWeight: '600',
        marginTop: 4
    }

});