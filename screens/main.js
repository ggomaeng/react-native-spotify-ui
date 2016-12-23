/**
 * Created by ggoma on 12/23/16.
 */
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Navigator
} from 'react-native';

import Landing from './Landing';
import Browse from './Browse';


import Footer from './common/footer';
import TabBarNavigation from './common/tab-bar-navigation';

var ROUTES = {
    landing: Landing,
    browser: Browse
};

export default class Main extends Component {
    renderScene(route, navigator) {
        var Component = ROUTES[route.name];

        return <Component route={route} navigator={navigator}/>
    }

    configureScene(route) {
        if (route.sceneConfig) {
            return route.sceneConfig;
        }
        return {
            ...CustomNavigatorSceneConfigs.FloatFromRight,
            gestures: {}
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Navigator
                    initialRoute={{name: 'landing'}}
                    renderScene={this.renderScene}
                    configureScene={(route) => ({ ... Navigator.SceneConfigs.VerticalDownSwipeJump, gestures: false })}
                    style={styles.container}
                />
                <Footer ref='footer'
                        hide={() => this.refs.tab.hide()}
                        show={() => this.refs.tab.show()}
                        hideTabBarNavigation={(v) => this.refs.tab.setHeight(v)}/>
                <TabBarNavigation ref='tab'/>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});