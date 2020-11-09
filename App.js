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

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>스파르타 코딩클럽!!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //영역을 잡는 속성입니다. 따로 자세히 다룹니다.
    //flex: 1은 전체 화면을 가져간다는 뜻입니다
    flex: 1,
    //영역의 배경 색을 결정합니다
    backgroundColor: '#fff',
    //아래 두 속성은 영역 안의 컨텐츠들의 배치를 결정합니다. 
    //flex를 자세히 다룰때 같이 자세히 다룹니다
    justifyContent:"center",
    alignContent:"center"
  },
  textContainer: {
    //영역의 바깥 공간 이격을 뜻합니다(하단 이미지 참조)
    margin:10,
    //영역 안의 컨텐츠 이격 공간을 뜻합니다(하단 이미지 참조)
    padding: 10,
    //테두리의 구부러짐을 결정합니다. 지금 보면 조금 둥글죠?
    borderRadius:10,
    //테두리의 두께를 결정합니다
    borderWidth:2,
    //테두리 색을 결정합니다
    borderColor:"#000",
    //테구리 스타일을 결정합니다. 실선은 solid 입니다
    borderStyle:"dotted",

  },
  textStyle: {
    //글자 색을 결정합니다. rgb, 값 이름, 색상코드 모두 가능합니다
    color:"blue",
    //글자의 크기를 결정합니다
    fontSize:20,
    //글자의 두께를 결정합니다
    fontWeight:"500",
    //가로기준으로 글자의 위치를 결정합니다
    textAlign:"center"
  }
});