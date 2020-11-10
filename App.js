// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { LogBox, StyleSheet, Text, View } from 'react-native';

// export default function App() {

//   // console.disableYellowBox = true;
//   LogBox.ignoreAllLogs(true);

//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.subContainerOne}></View>
//       <View style={styles.subContainerTwo}></View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   subContainerOne: {
//     flex:1,
//     backgroundColor:"yellow"
//   },
//   subContainerTwo: {
//     flex:1,
//     backgroundColor:"green"
//   }
// });

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>문자는 Text 태그 사이에 작성!!</Text>
//       <Text>문자는 Text 태그 사이에 작성!!</Text>
//       <Text>문자는 Text 태그 사이에 작성!!</Text>
//       <Text>문자는 Text 태그 사이에 작성!!</Text>
//       <Text>문자는 Text 태그 사이에 작성!!</Text>
//       <Text>문자는 Text 태그 사이에 작성!!</Text>
//       <Text>문자는 Text 태그 사이에 작성!!</Text>
//       <Text>문자는 Text 태그 사이에 작성!!</Text>
//       <Text>문자는 Text 태그 사이에 작성!!</Text>
//       <Text>문자는 Text 태그 사이에 작성!!</Text>
//       <Text>문자는 Text 태그 사이에 작성!!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//                 //각 태그들에는 style이라는 속성을 갖습니다.
//                 //이 속성은 파일 최하단에 작성한 스타일 코드 객체의 키 값을 부여해
//     // 엘리먼트들에 스타일을 줄 수 있습니다.
//     //이는 JSX문법을 배우고 난 다음 더 자세히 다룹니다.
//     <View style={styles.container}>
//                         {/* //보인 영역을 갖는 엘리먼트 7가 반복적으로 쓰였습니다. */}
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </View>
//     </View>
//   );
// }

// //엑스트가 영역을 갖고, 가운데 정렬도 하며, 테두리 스타일을 갖게 끔 하는 코드입니다.
// //JSX를 마저 배우고 스타일에 대해 자세히 다루니
// //걱정 안해도 좋습니다!
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   textContainer: {
//     height:100,
//     borderColor:'#000',
//     borderWidth:1,
//     borderRadius:10,
//     margin:10,
//   },
//   textStyle: {
//     textAlign:"center"
//   }
// });

// import React from 'react';
// import { StyleSheet, Text, View, ScrollView } from 'react-native';

// export default function App() {
//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   textContainer: {
//     height:100,
//     borderColor:'#000',
//     borderWidth:1,
//     borderRadius:10,
//     margin:10,
//   },
//   textStyle: {
//     textAlign:"center"
//   }
// });

// import React from 'react';
// import { StyleSheet, Text, View, Button, Alert } from 'react-native';

// export default function App() {

//   const customAlert = () => {
//     alert('Aerted!')
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>아래 버튼을 눌러주세요</Text>
//         {/* 버튼 onPress 속성에 일반 함수를 연결 할 수 있습니다. */}
//         <Button 
//           style={styles.buttonStyle} 
//           title="버튼입니다 123"
//           color="#f194ff" 
//           onPress={customAlert}
//         />
//         {/* ES6 문법으로 배웠던 화살표 함수로 연결 할 수도 있습니다. */}
//         <Button 
//             style={styles.buttonStyle} 
//             title="버튼입니다 "
//             color="#FF0000" 
//             onPress={()=>{
//               Alert.alert('팝업 알람입니다!!')
//             }}
//           />
//           </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     margin: 10,
//   },
//   textContainer: {
//     height:100,
//     margin:10,
//   },
//   textStyle: {
//     textAlign:"center"
//   },
// });

// import React from 'react';
// import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';

// export default function App() {
//   const customAlert = () => {
//     Alert.alert("TouchableOpacity에도 onPress 속성이 있습니다")
//   }
//   return (
//     <ScrollView style={styles.container}>
//       <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     margin: 10,
//   },
//   textContainer: {
//     height:100,
//     borderColor:'#000',
//     borderWidth:1,
//     borderRadius:10,
//     margin:10,
//   },
//   textStyle: {
//     textAlign:"center"
//   }
// });

// import React from 'react';
// import { StyleSheet, Text, View, Image } from 'react-native';
// //이렇게 상단에 가져와 사용할 이미지를 불러옵니다
// import favicon from "./assets/favicon.png"

// export default function App() {
//   return (
//     <View style={styles.container}>
// 			{/*이미지 태그 soruce 부분에 가져온 미지 이름을 넣습니다 */}
//       <Image 
//         source={favicon}
// 				// 사용설명서에 나와 있는 resizeMode 속성 값을 그대로 넣어 적용합니다
//         resizeMode={"contain"} //repeat, cover etc
//         style={styles.imageStyle}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     //혹시 미리 궁금하신 분들을 위해 언급하자면,
//     //justifyContent와 alignContent는 영역 안에 있는 콘텐츠들을 정렬합니다
//     justifyContent:"center",
//     alignContent:"center"
//   },
//   imageStyle: {
//     width:"100%",
//     height:"100%",
//     alignItems:"center",
//     justifyContent:"center"
//   }
// });

// import React from 'react';
// import { StyleSheet, Text, View, Image } from 'react-native';
// //이렇게 상단에 가져와 사용할 이미지를 불러옵니다
// import favicon from "./assets/favicon.png"

// export default function App() {
//   return (
//     <View style={styles.container}>
// 			{/*이미지 태그 soruce 부분에 가져온 미지 이름을 넣습니다 */}
//       <Image 
//         source={{uri:'https://images.unsplash.com/photo-1424819827928-55f0c8497861?fit=crop&w=600&h=600%27'}}
// 				// 사용설명서에 나와 있는 resizeMode 속성 값을 그대로 넣어 적용합니다
//         resizeMode={"cover"}
//         style={styles.imageStyle}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     //혹시 미리 궁금하신 분들을 위해 언급하자면,
//     //justifyContent와 alignContent는 영역 안에 있는 콘텐츠들을 정렬합니다
//     justifyContent:"center",
//     alignContent:"center"
//   },
//   imageStyle: {
//     width:"100%",
//     height:"100%",
//     alignItems:"center",
//     justifyContent:"center"
//   }
// });

// import React from 'react';
// import { StyleSheet, Text, View, Image } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>스파르타 코딩클럽!!</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     //영역을 잡는 속성입니다. 따로 자세히 다룹니다.
//     //flex: 1은 전체 화면을 가져간다는 뜻입니다
//     flex: 1,
//     //영역의 배경 색을 결정합니다
//     backgroundColor: '#fff',
//     //아래 두 속성은 영역 안의 컨텐츠들의 배치를 결정합니다. 
//     //flex를 자세히 다룰때 같이 자세히 다룹니다
//     justifyContent:"center",
//     alignContent:"center"
//   },
//   textContainer: {
//     //영역의 바깥 공간 이격을 뜻합니다(하단 이미지 참조)
//     margin:10,
//     //영역 안의 컨텐츠 이격 공간을 뜻합니다(하단 이미지 참조)
//     padding: 10,
//     //테두리의 구부러짐을 결정합니다. 지금 보면 조금 둥글죠?
//     borderRadius:10,
//     //테두리의 두께를 결정합니다
//     borderWidth:2,
//     //테두리 색을 결정합니다
//     borderColor:"#000",
//     //테구리 스타일을 결정합니다. 실선은 solid 입니다
//     borderStyle:"dotted",

//   },
//   textStyle: {
//     //글자 색을 결정합니다. rgb, 값 이름, 색상코드 모두 가능합니다
//     color:"blue",
//     //글자의 크기를 결정합니다
//     fontSize:20,
//     //글자의 두께를 결정합니다
//     fontWeight:"500",
//     //가로기준으로 글자의 위치를 결정합니다
//     textAlign:"center"
//   }
// });

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.containerOne}>

//       </View>
//       <View style={styles.containerTwo}>

//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex:1
//   },
//   containerOne: {
//     flex:2,
//     backgroundColor:"red"
//   },
//   containerTwo:{
//     flex:2,
//     backgroundColor:"yellow"
//   }
// });

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.containerOne}>

//       </View>
//       <View style={styles.containerTwo}>
//         <View style={styles.innerOne}>

//         </View>
//         <View style={styles.innerTwo}>

//         </View>

//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex:1
//   },
//   containerOne: {
//     flex:1,
//     backgroundColor:"red"
//   },
//   containerTwo:{
//     flex:2,
//     backgroundColor:"yellow"
//   },
//   innerOne: {
//     flex:1,
//     backgroundColor:"blue"
//   },
//   innerTwo: {
//     flex:4,
//     backgroundColor:"orange"
//   }
// });

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.containerOne}>

//       </View>
//       <View style={styles.containerTwo}>
//         <View style={styles.innerOne}>

//         </View>
//         <View style={styles.innerTwo}>

//         </View>

//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex:1
//   },
//   containerOne: {
//     flex:1,
//     backgroundColor:"red"
//   },
//   containerTwo:{
//     flex:2,
//     // flexDirection:"row",
//     backgroundColor:"yellow"
//   },
//   innerOne: {
//     flex:1,
//     backgroundColor:"blue"
//   },
//   innerTwo: {
//     flex:4,
//     backgroundColor:"orange"
//   }
// });

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.containerOne}>

//       </View>
//       <View style={styles.containerTwo}>
//         <View style={styles.innerOne}>
         
//         </View>
//         <View style={styles.innerTwo}>
//           <Text>!!컨텐츠!!</Text>
//         </View>

//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     backgroundColor:"#d9818f",
//   },
// });

import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import mainPhoto from "./assets/main.png"
import pizzaPhoto from "./assets/pizza.png"


export default function App() {
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
          <View style={styles.singleNoteContainer}>
            <View style={styles.pizzaContainer}>
              <Image
                source={pizzaPhoto}
                resizeMode="cover"
                style={styles.pizzaImage}
              />
            </View>
            <View style={styles.pizzaTextContainer}>
              <Text h3 style={styles.pizzaTitle}>먹다 남은 피자를 촉촉하게!</Text>
              <Text numberOfLines={3} style={styles.pizzaDescription}>
                먹다 남은 피자는 수분이 날라가기 때문에 처음처럼 맛있게 먹을 수 없는데요. 이럴 경우 그릇에 물을 받아 전자레인지 안에서 1분 30초에서 2분 정도 함께 돌려주면 촉촉하게 먹을 수 있습니다. 물이 전자레인지 안에서 수증기를 일으키고, 피자에 촉촉함을 더해줍니다.
              </Text>
              <Text style={styles.noteDate}>09-09-2020</Text>
            </View>

          </View>
          <View style={styles.singleNoteContainer}><Text></Text></View>
          <View style={styles.singleNoteContainer}><Text></Text></View>
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
    flex:1,
    // backgroundColor:"#d9818f",
    paddingLeft: 15,
    paddingRight: 15,
  },
  textContainer: {
    flex: 1,
    // backgroundColor: "gray",
    justifyContent: "flex-end",
  },
  textHeader: {
    fontSize: 50,
    paddingBottom: 5,
    // paddingLeft: 8,
  },
  contentContainer: {
    flex: 10,
    // backgroundColor: "#adbae6"
  },
  imageContainer: {
    marginTop:2,
    marginBottom:2,
    flex: 4,
  },
  image: {
    width:"100%",
    height:"100%",
    borderRadius:20,
  },
  categoryContainer: {
    width:"100%",
    backgroundColor: "white",
    flex:1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  categoryButtons1: {
    borderRadius: 15,
    height: 50,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 50,
    backgroundColor: pickColor(),
  },
  categoryButtons2: {
    borderRadius: 15,
    height: 50,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 50,
    backgroundColor: pickColor(),
  },
  categoryButtons3: {
    borderRadius: 15,
    height: 50,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 50,
    backgroundColor: pickColor(),
  },
  categoryButtons4: {
    borderRadius: 15,
    height: 50,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 50,
    backgroundColor: pickColor(),
  },
  categoryText: {
    color: "white",
    fontWeight: "700"
  },
  noteContainer: {
    flex: 6,
    // backgroundColor: "purple",
    // flexDirection: "row",
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
    padding: 10,
    justifyContent: "flex-start"
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