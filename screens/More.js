import React, { Component } from 'react';
import { Text, View, ImageBackground, Image ,StyleSheet} from 'react-native';

export default class More extends Component {
    render() {
        return (
            <ImageBackground source={require('../assets/azul.png')}
            style={styles.backgroundImage}>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>API</Text>
            </View>
            </ImageBackground >
        )
    }
}
const styles = StyleSheet.create({
    backgroundImage: { flex: 1, resizeMode: 'cover', },
})