import React from "react"
import {View,Text,Image,StyleSheet} from "react-native";

//비구조 할당 방식으로 넘긴 속성 데이터를 꺼내 사용함
export default function Note({content}) {

  function oddEven(idx) {
    const odd = "#f7f7f7";
    if (!(idx % 2)) return { backgroundColor: odd, borderRadius: 5 }
  }

    return (
        <View style={Object.assign({}, styles.singleNoteContainer)}>
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
    marginTop: 5,
    marginLeft: 5,
  },
  pizzaTextContainer: {
    flex: 2,
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 10,
    paddingBottom: 10,
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