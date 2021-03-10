import {Dimensions} from "react-native";

const constants = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    imagesize: Dimensions.get('window').width > 700? "large":"medium"
}

console.log(constants)

export default constants;
