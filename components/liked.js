import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import Note from './note';
import Loading from '../components/loading';
import { StatusBar } from 'expo-status-bar';
import {firebase_db} from "../firebaseConfig"
import Constants from 'expo-constants';

export default function Liked( { navigation,route } ) {
    const userId = Constants.installationId;

    const [tip, setTip] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        firebase_db.ref('/like/' + userId).once('value').then((snapshot) => {
            let tips = snapshot.val();
            // console.log(tips, `fecthed ${tips.length} tips`);
            setTip(tips);
            setIsLoading(false);
        });
    });
    
    if (tip === null) {
        console.log(tip)
        return <Text style={styles.addTipsMessage}>No liked tips yet! Like your favorite tips for quicker access here!</Text>
    } else {
        return (
            isLoading ? (
                <Loading />
            ) : (
            <ScrollView contentContainerStyle={styles.container}>
                {
                    tip.map((content, i) => {
                        // console.log(content)
                        return (<Note content={content} key={i} navigation={navigation} />)
                    })
                }
            </ScrollView>
            )
        );
    }
}

const styles = StyleSheet.create({
  container: {
    //앱의 배경
    backgroundColor: '#fff',
  },
  cardContainer: {
    marginTop:10,
    marginLeft:10
  },
  addTipsMessage: {
      alignSelf: "center",
      marginTop: "50%",
  }
});