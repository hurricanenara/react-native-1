import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import mainPhoto from "../assets/main.png"
import pizzaPhoto from "../assets/pizza.png"
import data from '../data.json';


export default function Main() {

  const tips = data.tips;

  function oddEven(idx) {
    const odd = "#f0f0f0";
    if (!(idx % 2)) return { backgroundColor: odd, borderRadius: 5 }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.textContainer}><Text style={styles.textHeader}>&#9816;&#10084;</Text></View>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image 
            source={mainPhoto}
            // resizeMode="contain"
            style={styles.image}
          />
        </View>
        <ScrollView contentContainerStyle={styles.categoryContainer} horizontal>
          <TouchableOpacity style={styles.categoryButtons1}><Text style={styles.categoryText}>Life</Text></TouchableOpacity>
          <TouchableOpacity style={styles.categoryButtons2}><Text style={styles.categoryText}>Finance</Text></TouchableOpacity>
          <TouchableOpacity style={styles.categoryButtons3}><Text style={styles.categoryText}>Pets</Text></TouchableOpacity>
          <TouchableOpacity style={styles.categoryButtons4}><Text style={styles.categoryText}>Saved</Text></TouchableOpacity>
        </ScrollView>
        <View style={styles.noteContainer}>
            {
              tips.map((content, i) => {
                return (
                  <View style={styles.singleNoteContainer} key={i}>
                    <View style={styles.pizzaContainer}>
                      <Image
                        // source={pizzaPhoto}
                        source={{uri: content.image}}
                        resizeMode="cover"
                        style={styles.pizzaImage}
                      />
                    </View>
                    <View style={styles.pizzaTextContainer}>
                      <Text h3 style={styles.pizzaTitle}>{content.title}</Text>
                      <Text numberOfLines={3} style={styles.pizzaDescription}>
                        {content.desc}
                      </Text>
                      <Text style={styles.noteDate}>{content.date}</Text>
                    </View>

                  </View>
                );
              })
            }
        </View>
      </View>
    </ScrollView>
  );
}

function pickColor() {
  const arr = ["#a5b6ee", "#d2a5ee", "#eea7a5", "#baeea5", "#ffedb3", "#adffcb", "#ffadbf", "#cbffad","#ffadad", "#a6a9fc", "#5abfb5"];
  // let randIdx = Math.floor(Math.random() * arr.length);
  return arr[Math.floor(Math.random() * arr.length)];
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor:"#d9818f",
    paddingLeft: 15,
    paddingRight: 15,
  },
  textContainer: {
    // backgroundColor: "gray",
    justifyContent: "flex-end",
  },
  textHeader: {
    fontSize: 50,
    paddingBottom: 5,
    marginTop: 12,
    // paddingLeft: 8,
  },
  contentContainer: {
    // backgroundColor: "#adbae6"
  },
  imageContainer: {
    width: "100%",
    height: 180,
  },
  image: {
    width:"100%",
    height:"100%",
    borderRadius:20,
  },
  categoryContainer: {
    marginTop: 10,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
  },
  categoryButtons1: {
    borderRadius: 15,
    height: 50,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    backgroundColor: pickColor(),
  },
  categoryButtons2: {
    borderRadius: 15,
    height: 50,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    backgroundColor: pickColor(),
  },
  categoryButtons3: {
    borderRadius: 15,
    height: 50,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    backgroundColor: pickColor(),
  },
  categoryButtons4: {
    borderRadius: 15,
    height: 50,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    // marginRight: 50,
    backgroundColor: pickColor(),
  },
  categoryText: {
    color: "white",
    fontWeight: "700"
  },
  noteContainer: {
    flex: 6,
    marginTop: 10,
  },
  singleNoteContainer: {
    flex: 1,
    flexDirection: "row",
  },
  pizzaContainer: {
    flex: 1,
    paddingBottom: 10,
  }, 
  pizzaImage: {
    height:"100%",
    width:"100%",
    borderRadius: 10,
  },
  pizzaTextContainer: {
    flex: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    // paddingTop: 10,
    // marginLeft: 10,
  },
  pizzaText: {
    flex:2,
  },
  pizzaTitle: {
    fontWeight: "800",
    paddingBottom: 5,
  },
  noteDate: {
    color: "#d9d9d9",
    fontSize: 13,
    paddingTop: 5,
  },
});