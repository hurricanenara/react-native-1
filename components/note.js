// import React from "react"
// import {View,Text,Image,StyleSheet} from "react-native";

// //비구조 할당 방식으로 넘긴 속성 데이터를 꺼내 사용함
// export default function Note({content, navigation}) {

//   function oddEven(idx) {
//     const odd = "#f7f7f7";
//     if (!(idx % 2)) return { backgroundColor: odd, borderRadius: 5 }
//   }

//     return (
//         <View style={Object.assign({}, styles.singleNoteContainer)}>
//             <View style={styles.pizzaContainer}>
//                 <Image
//                 // source={pizzaPhoto}
//                 source={{uri: content.image}}
//                 resizeMode="cover"
//                 style={styles.pizzaImage}
//                 />
//             </View>
//             <View style={styles.pizzaTextContainer}>
//                 <Text h3 style={styles.pizzaTitle}>{content.title}</Text>
//                 <Text numberOfLines={3} style={styles.pizzaDescription}>
//                 {content.desc}
//                 </Text>
//                 <Text style={styles.noteDate}>{content.date}</Text>
//             </View>
//         </View>
//     );
// }



// function pickColor() {
//   const arr = ["#a5b6ee", "#d2a5ee", "#eea7a5", "#baeea5", "#ffedb3", "#adffcb", "#ffadbf", "#cbffad","#ffadad", "#a6a9fc", "#5abfb5"];
//   // let randIdx = Math.floor(Math.random() * arr.length);
//   return arr[Math.floor(Math.random() * arr.length)];
// }

// const styles = StyleSheet.create({
//   container: {
//     // backgroundColor:"#d9818f",
//     paddingLeft: 15,
//     paddingRight: 15,
//   },
//   textContainer: {
//     // backgroundColor: "gray",
//     justifyContent: "flex-end",
//   },
//   textHeader: {
//     fontSize: 50,
//     paddingBottom: 5,
//     marginTop: 12,
//     // paddingLeft: 8,
//   },
//   contentContainer: {
//     // backgroundColor: "#adbae6"
//   },
//   imageContainer: {
//     width: "100%",
//     height: 180,
//   },
//   image: {
//     width:"100%",
//     height:"100%",
//     borderRadius:20,
//   },
//   categoryContainer: {
//     marginTop: 10,
//     height: 60,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   categoryButtons1: {
//     borderRadius: 15,
//     height: 50,
//     width: 100,
//     alignItems: "center",
//     justifyContent: "center",
//     marginRight: 15,
//     backgroundColor: pickColor(),
//   },
//   categoryButtons2: {
//     borderRadius: 15,
//     height: 50,
//     width: 100,
//     alignItems: "center",
//     justifyContent: "center",
//     marginRight: 15,
//     backgroundColor: pickColor(),
//   },
//   categoryButtons3: {
//     borderRadius: 15,
//     height: 50,
//     width: 100,
//     alignItems: "center",
//     justifyContent: "center",
//     marginRight: 15,
//     backgroundColor: pickColor(),
//   },
//   categoryButtons4: {
//     borderRadius: 15,
//     height: 50,
//     width: 100,
//     alignItems: "center",
//     justifyContent: "center",
//     // marginRight: 50,
//     backgroundColor: pickColor(),
//   },
//   categoryText: {
//     color: "white",
//     fontWeight: "700"
//   },
//   noteContainer: {
//     flex: 6,
//     marginTop: 10,
//   },
//   singleNoteContainer: {
//     flex: 1,
//     flexDirection: "row",
//   },
//   pizzaContainer: {
//     flex: 1,
//     paddingBottom: 10,
//   }, 
//   pizzaImage: {
//     height:"100%",
//     width:"100%",
//     borderRadius: 10,
//     marginTop: 5,
//     marginLeft: 5,
//   },
//   pizzaTextContainer: {
//     flex: 2,
//     paddingTop: 5,
//     paddingLeft: 15,
//     paddingRight: 10,
//     paddingBottom: 10,
//   },
//   pizzaText: {
//     flex:2,
//   },
//   pizzaTitle: {
//     fontWeight: "800",
//     paddingBottom: 5,
//   },
//   noteDate: {
//     color: "#d9d9d9",
//     fontSize: 13,
//     paddingTop: 5,
//   },
// });

// import React from 'react';
// import {View, Image, Text, StyleSheet,TouchableOpacity} from 'react-native'

// //MainPage로 부터 navigation 속성을 전달받아 Card 컴포넌트 안에서 사용
// export default function Note({content,navigation}){
//     return(
//         //카드 자체가 버튼역할로써 누르게되면 상세페이지로 넘어가게끔 TouchableOpacity를 사용
//         <TouchableOpacity style={styles.card} onPress={()=>{navigation.navigate('Detail')}}>
//             <Image style={styles.cardImage} source={{uri:content.image}}/>
//             <View style={styles.cardText}>
//                 <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
//                 <Text style={styles.cardDesc} numberOfLines={3}>{content.desc}</Text>
//                 <Text style={styles.cardDate}>{content.date}</Text>
//             </View>
//         </TouchableOpacity>
//     )
// }

// const styles = StyleSheet.create({
    
//     card:{
//       flex:1,
//       flexDirection:"row",
//       margin:10,
//       borderBottomWidth:0.5,
//       borderBottomColor:"#eee",
//       paddingBottom:10
//     },
//     cardImage: {
//       flex:1,
//       width:100,
//       height:100,
//       borderRadius:10,
//     },
//     cardText: {
//       flex:2,
//       flexDirection:"column",
//       marginLeft:10,
//     },
//     cardTitle: {
//       fontSize:20,
//       fontWeight:"700"
//     },
//     cardDesc: {
//       fontSize:15
//     },
//     cardDate: {
//       fontSize:10,
//       color:"#A6A6A6",
//     }
// });

// import React from 'react';
// import {View, Image, Text, StyleSheet,TouchableOpacity} from 'react-native'

// //MainPage로 부터 navigation 속성을 전달받아 Card 컴포넌트 안에서 사용
// export default function Note({content,navigation}){
//     return(
//         //카드 자체가 버튼역할로써 누르게되면 상세페이지로 넘어가게끔 TouchableOpacity를 사용
//         <TouchableOpacity style={styles.card} onPress={()=>{navigation.navigate('Detail', content)}}>
//             <Image style={styles.cardImage} source={{uri:content.image}}/>
//             <View style={styles.cardText}>
//                 <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
//                 <Text style={styles.cardDesc} numberOfLines={3}>{content.desc}</Text>
//                 <Text style={styles.cardDate}>{content.date}</Text>
//             </View>
//         </TouchableOpacity>
//     )
// }


// const styles = StyleSheet.create({
    
//   card:{
//     flex:1,
//     flexDirection:"row",
//     margin:10,
//     borderBottomWidth:0.5,
//     borderBottomColor:"#eee",
//     paddingBottom:10
//   },
//   cardImage: {
//     flex:1,
//     width:100,
//     height:100,
//     borderRadius:10,
//   },
//   cardText: {
//     flex:2,
//     flexDirection:"column",
//     marginLeft:10,
//   },
//   cardTitle: {
//     fontSize:20,
//     fontWeight:"700"
//   },
//   cardDesc: {
//     fontSize:15
//   },
//   cardDate: {
//     fontSize:10,
//     color:"#A6A6A6",
//   }
// });

import React,{useState,useEffect} from 'react';
import {View, Image, Text, StyleSheet,TouchableOpacity, Alert} from 'react-native'
import {firebase_db} from "../firebaseConfig"
import Constants from 'expo-constants';

//MainPage로 부터 navigation 속성을 전달받아 Card 컴포넌트 안에서 사용
export default function Note({content,navigation, route, contentIdx}){
    const userId = Constants.installationId;

    useEffect(() => {
      // console.log(route, "route")
      console.log(content, "content")
      // console.log(content)
    });

    function handlePress() {
      if (route.name === "Main") {
        navigation.navigate('Detail',{idx:content.idx});
      }
    }

    function handleRemove() {
      firebase_db.ref('/like/' + userId + '/' + contentIdx).remove().then(() => {
        navigation.navigate('Liked');
      })
    }

    return(
        //카드 자체가 버튼역할로써 누르게되면 상세페이지로 넘어가게끔 TouchableOpacity를 사용
        <TouchableOpacity style={styles.card} onPress={() => handlePress()}>
            <Image style={styles.cardImage} source={{uri:content.image}}/>
            <View style={styles.cardText}>
                <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
                <Text style={styles.cardDesc} numberOfLines={3}>{content.desc}</Text>
                <Text style={styles.cardDate}>{content.date}</Text>
                {
                    route.name !== "Main" ? (
                      <View style={styles.infoContainer}>
                        <TouchableOpacity style={styles.infoButton} onPress={()=>{navigation.navigate('Detail',{idx:content.idx})}}><Text style={styles.infoText}>자세히보기</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.infoButton} onPress={() => handleRemove()}><Text style={styles.infoText}>찜 해제 {contentIdx}</Text></TouchableOpacity>
                      </View>
                    ) : null
                }
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
  card:{
    flex:1,
    flexDirection:"row",
    margin:10,
    borderBottomWidth:0.5,
    borderBottomColor:"#eee",
    paddingBottom:10
  },
  cardImage: {
    flex:1,
    width:100,
    height:100,
    borderRadius:10,
  },
  cardText: {
    flex:2,
    flexDirection:"column",
    marginLeft:10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight:"700",
    marginBottom: 6,
    marginTop: 5,
  },
  cardDesc: {
    fontSize:15,
    marginBottom: 6,
  },
  cardDate: {
    fontSize:13,
    color:"#A6A6A6",
  },
  infoContainer: {
    // borderColor: "pink",
    // borderWidth: 1,
    paddingTop: 8,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  infoButton: {
    borderColor: "#dc7a82",
    borderWidth: 1,
    borderRadius: 5,
    width: "40%",
    // marginRight: "20%",
    marginRight: 20,
  },
  infoText: {
    padding: 6,
    alignSelf: "center",
    color: "#dc7a82",
  }
});