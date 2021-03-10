import React from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, TouchableOpacity, View, StatusBar} from 'react-native';
import ImageComponent from "./Image";
import constants from "./Constants";

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 50;
    return layoutMeasurement.height + contentOffset.y >=
        contentSize.height - paddingToBottom;
};



class Photos extends React.Component {
    state = {imagesList: [], currentpage: 1, fetching: true}

    updateImagesAPI() {
        this.setState({fetching: true})
        this.getimagesAPI().then(
            (returned) => {
                let imageList = returned.photos.map((imageData) => (
                    {
                        "url": imageData.src[constants.imagesize],
                        "bigurl": imageData.src.original,
                        "photographer": imageData.photographer,
                        "avg_color": imageData.avg_color,
                        "ratio": imageData.width / imageData.height
                    }
                ))
                let returnarray = this.state.imagesList.concat(imageList);
                this.setState(
                    {
                        imagesList: returnarray,
                    }
                )
                this.setState(
                    {
                        fetching: false,
                    }
                )
                //console.log(returned)
            }
        )
    }

    componentDidMount() {
        this.updateImagesAPI()
    }

    render() {
        return (<View style={styles.scrollview}>
            {/*Cambiamos el color del status bar a traves de esta funcion!*/}
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
            <ScrollView
                style={{flex: 1, width: constants.width}}
                onScroll={({nativeEvent}) => {
                    if (isCloseToBottom(nativeEvent) && !this.state.fetching) {
                        console.log("final!")
                        this.updateImagesAPI()
                    }
                }}
                scrollEventThrottle={400}
            >
                {this.state.imagesList.map((imagedata, index) =>
                    <View key={index} style={styles.view}>
                        <View style={styles.photoview}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Details', {
                                    imagedata
                                })}>
                                <ImageComponent
                                    url={imagedata.url}
                                    avg_color = {imagedata.avg_color}/>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Details', {
                                    imagedata
                                })}>
                                <ImageComponent
                                    url={imagedata.url}
                                    avg_color = {imagedata.avg_color}/>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Details', {
                                    imagedata
                                })}>
                                <ImageComponent
                                    url={imagedata.url} avg_color = {imagedata.avg_color}/>
                            </TouchableOpacity>
                        </View>

                    </View>)}
                {this.state.fetching ? <ActivityIndicator size="large" style={styles.loadingindicator}/> : <View style={{marginBottom:100}}/>}
            </ScrollView>

        </View>);
    }

    getimagesAPI = async () => {
        try {
            let response = await fetch(
                'https://api.pexels.com/v1/search?query=nature&per_page=7&page=' + this.state.currentpage.toString(),
                {
                    headers: {
                        Authorization: "563492ad6f91700001000001b05a5a74321c42bb9e740b231a3809ea"
                    }
                }
            );
            console.log("PAG:" + this.state.currentpage.toString())
            this.setState({currentpage: this.state.currentpage + 1})
            return await response.json();
        } catch (error) {
            console.error(error);
            return "nada"
        }
    };
}


const styles = StyleSheet.create({
    scrollview: {
        alignItems: 'center',
        justifyContent: "space-around",
        flex: 1,

    },
    view: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    photoview: {},
    loadingindicator: {
        paddingTop: 30,
        paddingBottom: 30
    }
});

export default Photos;
