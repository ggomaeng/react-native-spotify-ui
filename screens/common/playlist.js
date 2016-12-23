/**
 * Created by ggoma on 12/22/16.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native';

import PlaylistItem from './playlist-item';

export default class PlayList extends Component {


    renderItems() {
        const {circle} = this.props;
        return this.props.items.map((a, i ) => {
            return (
                <PlaylistItem circle={circle} source={a.source} followers={a.followers} title={a.name} key={i}/>
            )
        })

    }
    render() {
        const {title} = this.props;

        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <ScrollView horizontal={true}>
                        {this.renderItems()}
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 24,
        paddingBottom: 56
    },

    title: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 8,
    }
});