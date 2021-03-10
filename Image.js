import {Image, PixelRatio, TouchableOpacity} from "react-native";
import React from 'react';
import constants from "./Constants";


export default class ImageComponent extends React.Component {
    state = {isloaded: false}
    render() {
        return (
            <Image
                source={{uri: this.props.url}}
                style={{
                    flex: 1,
                    width: constants.width /3,
                    height: constants.width / 3,
                    borderColor: "black",
                    borderWidth: 2,
                    // SI EL COLOR DA ERROR, NOS RETORNA ROJO PARA ASI IDENTIFICARLO.
                    // https://stackoverflow.com/questions/8027423/how-to-check-if-a-string-is-a-valid-hex-color-representation/8027444
                    // Aplicamos transparencia del 20% con replace #32
                    backgroundColor: /^#[0-9A-F]{6}$/i.test(this.props.avg_color)? this.props.avg_color.replace("#", "#32"): "red",
                }}
                onLoad = {()=>this.setState({isloaded:true})}
            />
        );
    }
}

