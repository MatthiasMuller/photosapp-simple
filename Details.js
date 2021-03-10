import {StyleSheet, View, Text, Image, ActivityIndicator} from "react-native";
import Constants from 'expo-constants';
import React from 'react';
import constants from "./Constants";


export default class Details extends React.Component {
    state = {imageloaded:false}
    render() {
        return (<View style={styles.main}>
                <Image
                    source={{uri: this.props.route.params.imagedata.bigurl}}
                    style={{
                        width: constants.width,
                        height: constants.width * this.props.route.params.imagedata.ratio,
                        backgroundColor: this.props.route.params.imagedata.avg_color
                    }}
                    onLoad = {()=> this.setState({imageloaded:true})}
                />
                <Text style={styles.text}>
                    {this.props.route.params.imagedata.photographer}
                </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    main: {
        backgroundColor: '#a5a58d',
        height: constants.height,
        width: constants.width,
    },
    text: {
        fontSize: 40,
        backgroundColor: "white"
    }
});
