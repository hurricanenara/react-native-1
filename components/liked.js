import React,{useState,useEffect} from 'react';
import main from '../assets/main.png';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import data from '../data.json';
import Note from '../components/note';
import Loading from '../components/loading';
import { StatusBar } from 'expo-status-bar';

export default function Liked( { navigation,route } ) {
    return (
        <View>
            <Text>Liked Page</Text>
        </View>
    );
}