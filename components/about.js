import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient'
import { LinearGradient } from "expo-linear-gradient";
import { Animated } from "react-native";

export default function About( { navigation, route } ) {

    useEffect(() => {
        console.log(route)
        navigation.setOptions({
            title: route.name,
            headerTransparent: true,
            headerStyle: {
            }
        })
    }, []);

    return (
        <View style={styles.container}>
            <LinearGradient
               colors={['#0d318c', 'white', "#0d318c"]}
                style={styles.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <View style={styles.headerContainer}><Text style={styles.headerText}>Hi! 스파르타코딩 앱개발 반에 오신것을 환영합니다</Text></View> 
                <View style={styles.cardContainer}>
                    <Image 
                        source={{uri: "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4"}}
                        style={styles.cardImage}
                    />
                    <Text style={styles.cardTitle}>많은 내용을 간결하게 담아내려 노력했습니다!</Text>
                    <Text style={styles.cardContent}>꼭 완주 하셔서 꼭 여러분것으로 만들어가시길 바랍니다</Text>
                    <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>여러분의 인스타계정</Text></TouchableOpacity>
                </View> 

            </LinearGradient>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "#0d318c",
        flex: 1,
    },
    headerContainer: {
        margin: 30,
        marginTop: 70,
        alignSelf: "center",
        width: "85%"
    },
    headerText: {
        color: "white",
        fontWeight: "800",
        fontSize: 42
    },
    cardContainer: {
        backgroundColor: "rgba(232, 238, 253, 0.5)",
        height: "60%",
        width: "85%",
        alignSelf: "center",
        borderRadius: 30,
        marginTop: 20,
    },
    cardImage: {
        width: "50%",
        height: "30%",
        borderRadius: 20,
        alignSelf: "center",
        marginTop: 50,
    },
    cardTitle: {
        fontWeight: "700",
        fontSize: 30,
        alignSelf: "center",
        textAlign: "center",
        marginTop: 20,
        width: "90%"
    },
    cardContent: {
        fontSize: 20,
        fontWeight: "600",
        alignSelf: "center",
        textAlign: "center",
        width: "80%",
        marginTop: 17
    },
    button: {
        backgroundColor: "orange",
        width: "45%",
        alignSelf: "center",
        marginTop: 28,
        borderRadius: 10
    },
    buttonText: {
        color: "white",
        fontWeight: "600",
        fontSize: 18,
        paddingRight: 8,
        paddingLeft: 8,
        paddingTop: 15,
        paddingBottom: 15,
        textAlign: "center"
    }
});