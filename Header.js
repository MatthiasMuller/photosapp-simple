import {StyleSheet, View, Text} from "react-native";
import Constants from 'expo-constants';
import React from 'react';
import constants from "./Constants";


export default class Header extends React.Component {
    render() {
        return (<View style={styles.header}>
                    <Text style={styles.headertext}> Hola! </Text>
            </View>
            );
    }
}


const styles = StyleSheet.create({
    header: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#a5a58d',
        height: constants.height * 1/10,
        width: constants.width,
    },
    headertext: {
        textAlign: "center",
        textAlignVertical:"center",
        color: "white",
    }
});
