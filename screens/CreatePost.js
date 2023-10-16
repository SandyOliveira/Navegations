import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    ScrollView,
    TextInput,
    Dimensions,
    Button,
    Alert,ImageBackground
} from "react-native";

import { RFValue } from "react-native-responsive-fontsize";

import { firebaseApp, firebaseAuth } from '../App'
import { getDatabase, ref, onValue} from "firebase/database";


export default class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            light_theme: true,
            dropdownHeight: 40
        };
    }


    componentDidMount() {

        //this.fetchUser();
    }

    async addStory() {
        if (
            this.state.title &&
            this.state.description 
            
        ) {
            let storyData = {
                title: this.state.title,
                description: this.state.description,
                author: 'EEE', //auth.currentUser.displayName,
                created_on: new Date(),
                author_uid: 'asdsar', // auth.currentUser.uid,
                likes: 0
            };
            db = getDatabase()
            const starCountRef = await ref(db, 'posts/' + Math.random().toString(36).slice(2));
            console.log(await starCountRef)
            // await getDatabase()
            //     .ref(
            //         "/posts/" +
            //         Math.random()
            //             .toString(36)
            //             .slice(2)
            //     )
            //     .set(storyData)
            //     .then(function (snapshot) { });
            // this.props.setUpdateToTrue();
            this.props.navigation.navigate("Feed");
        } else {
            alert(
                "Erro",
                "Todos os campos são obrigatórios!",
                [{ text: "OK", onPress: () => console.log("OK Pressionado") }],
                { cancelable: false }
            );
        }
    }

    // fetchUser = () => {
    //     let theme;
    //     firebase
    //         .database()
    //         .ref("/users/" + firebase.auth().currentUser.uid)
    //         .on("value", snapshot => {
    //             theme = snapshot.val().current_theme;
    //             this.setState({ light_theme: theme === "light" });
    //         });
    // };

    render() {


        return (
            <ImageBackground source={require('../assets/rosa.png')}
                style={styles.backgroundImage}>

                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>

                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text
                            style={
                                styles.appTitleText
                            }
                        >
                            Nova Registro
                        </Text>
                    </View>
                </View>
                <View style={styles.fieldsContainer}>
                    <ScrollView>

                        <View style={{ marginHorizontal: RFValue(10) }}>
                            <TextInput
                                style={
                                    styles.inputFont
                                }
                                onChangeText={title => this.setState({ title })}
                                placeholder={"Título"}
                                placeholderTextColor={
                                    this.state.light_theme ? "black" : "white"
                                }
                            />
                            <TextInput
                                style={[
                                    styles.inputFont,
                                    styles.inputFontExtra,
                                    styles.inputTextBig
                                ]}
                                onChangeText={description => this.setState({ description })}
                                placeholder={"Descrição"}
                                multiline={true}
                                numberOfLines={4}
                                placeholderTextColor={
                                    this.state.light_theme ? "black" : "white"
                                }
                            />
                           
                        </View>
                        <View style={styles.submitButton}>
                            <Button
                                onPress={() => this.addStory()}
                                title="Enviar"
                                color="#841584"
                            />
                        </View>
                    </ScrollView>
                </View>
                <View style={{ flex: 0.08 }} />
            </ImageBackground>
        );
    }

}

const styles = StyleSheet.create({
    backgroundImage: { flex: 1, resizeMode: 'cover', },
    container: {
        flex: 1,
        backgroundColor: "#15193c"
    },
    containerLight: {
        flex: 1,
        backgroundColor: "white"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
        flex: 0.07,
        flexDirection: "row"
    },
    appIcon: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center"
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    appTitleTextContainer: {
        flex: 0.7,
        justifyContent: "center"
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(28),
        //fontFamily: "Bubblegum-Sans"
    },
    appTitleTextLight: {
        color: "black",
        fontSize: RFValue(28),
        //fontFamily: "Bubblegum-Sans"
    },
    fieldsContainer: {
        flex: 0.85
    },
    previewImage: {
        width: "93%",
        height: RFValue(250),
        alignSelf: "center",
        borderRadius: RFValue(10),
        marginVertical: RFValue(10),
        resizeMode: "contain"
    },
    inputFont: {
        height: RFValue(40),
        borderColor: "white",
        borderWidth: RFValue(1),
        borderRadius: RFValue(10),
        paddingLeft: RFValue(10),
        color: "white",
//        fontFamily: "Bubblegum-Sans"
    },
    inputFontLight: {
        height: RFValue(40),
        borderColor: "black",
        borderWidth: RFValue(1),
        borderRadius: RFValue(10),
        paddingLeft: RFValue(10),
        color: "black",
//        fontFamily: "Bubblegum-Sans"
    },
    dropdownLabel: {
        color: "white",
//        fontFamily: "Bubblegum-Sans"
    },
    dropdownLabelLight: {
        color: "black",
//        fontFamily: "Bubblegum-Sans"
    },
    inputFontExtra: {
        marginTop: RFValue(15)
    },
    inputTextBig: {
        textAlignVertical: "top",
        padding: RFValue(5)
    },
    submitButton: {
        marginTop: RFValue(20),
        alignItems: "center",
        justifyContent: "center"
    }
});