import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

export default function Loading(){
    return (        
        <LinearGradient
            colors={['#0d318c', 'white', "#0d318c"]}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            >
            <View style={styles.container}><Text style={styles.title}>Loading...</Text></View>
        </LinearGradient>
    );
}


const styles = StyleSheet.create({
    container: {
        //앱의 배경 색
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor: '#fdc453',
    },
    title: {
        fontSize:20,
        fontWeight:'700'
    }

})