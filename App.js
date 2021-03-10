import React from 'react';
import {StyleSheet, Text, View, ScrollView, Button, StatusBar} from 'react-native';
import ImageComponent from "./Image";
import constants from "./Constants";
import Header from "./Header";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Photos from "./Photos";
import Details from "./Details";

const Stack = createStackNavigator();

class App extends React.Component {
    render() {

        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Photos} options={{
                        headerRight: () => (
                            <Button
                                onPress={() => alert('This is a button!')}
                                title="Info"
                                color="black"
                            />
                        ),
                        headerLeft: () => (
                            <Button
                                onPress={() => alert('This is a button!')}
                                title="Settings"
                                color="black"
                            />
                        )
                    }}/>
                    <Stack.Screen name="Details" component={Details} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default App;
