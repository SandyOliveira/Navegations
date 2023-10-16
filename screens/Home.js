import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <ImageBackground source={require('../assets/rosa.png')}
                style={styles.backgroundImage}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>

                    <TouchableOpacity style={styles.routeCard} onPress={() => this.props.navigation.navigate('FoodScreen', {})}>
                        <Text style={styles.routeText}>Alimentação Adequada</Text>

                        <Image source={require("../assets/icon.png")} style={styles.iconImage}></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground >
        )
    }
}
const styles = StyleSheet.create({
    backgroundImage: { flex: 1, resizeMode: 'cover', },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: '#00008B'
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30
    },
    iconImage: {
        position: "absolute",
        height: 52,
        width: 52,
        resizeMode: "contain",
        right: 20,
        top: 20
    }
})