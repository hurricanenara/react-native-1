// import React from 'react';
// import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
// import mainPhoto from "../assets/main.png"
// import pizzaPhoto from "../assets/pizza.png"
// import data from '../data.json';
// import Note from '../components/note';


// export default function App() {

//   const tips = data.tips;

//   function oddEven(idx) {
//     const odd = "#f7f7f7";
//     if (!(idx % 2)) return { backgroundColor: odd, borderRadius: 5 }
//   }

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.textContainer}><Text style={styles.textHeader}>&#9816;&#10084;</Text></View>
//       <View style={styles.contentContainer}>
//         <View style={styles.imageContainer}>
//           <Image 
//             source={mainPhoto}
//             // resizeMode="contain"
//             style={styles.image}
//           />
//         </View>
//         <ScrollView contentContainerStyle={styles.categoryContainer} horizontal>
//           <TouchableOpacity style={styles.categoryButtons1}><Text style={styles.categoryText}>Life</Text></TouchableOpacity>
//           <TouchableOpacity style={styles.categoryButtons2}><Text style={styles.categoryText}>Finance</Text></TouchableOpacity>
//           <TouchableOpacity style={styles.categoryButtons3}><Text style={styles.categoryText}>Pets</Text></TouchableOpacity>
//           <TouchableOpacity style={styles.categoryButtons4}><Text style={styles.categoryText}>Saved</Text></TouchableOpacity>
//         </ScrollView>
//         <View style={styles.noteContainer}>
//             {
//               tips.map((content, i) => {
//                 return (
//                   <Note content={content} key={i} />
//                 );
//               })
//             }
//         </View>
//       </View>
//     </ScrollView>
//   );
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
//     // paddingTop: 10,
//     // marginLeft: 10,
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

// import React,{useState,useEffect} from 'react';
// import main from '../assets/main.png';
// import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
// import data from '../data.json';
// import Note from '../components/note';
// import Loading from '../components/loading';


// export default function MainPage() {
//   console.disableYellowBox = true;
//   //return 구문 밖에서는 슬래시 두개 방식으로 주석

//   const [state,setState] = useState([])

// 	//컴포넌트에 상태를 여러개 만들어도 됨
//   //관리할 상태이름과 함수는 자유자재로 정의할 수 있음
//   //초기 상태값으로 리스트, 참거짓형, 딕셔너리, 숫자, 문자 등등 다양하게 들어갈 수 있음.
//   const [ready,setReady] = useState(true)

//   useEffect(()=>{
	   
// 		//뒤의 1000 숫자는 1초를 뜻함
//     //1초 뒤에 실행되는 코드들이 담겨 있는 함수
//     setTimeout(()=>{
//         setState(data)
//         setReady(false)
//     },1000)
 
    
//   },[])

// //   let tip = data.tip;
//   let tips = state.tips;
// 	let todayWeather = 10 + 17;
//   let todayCondition = "흐림"

// 	//처음 ready 상태값은 true 이므로 ? 물음표 바로 뒤에 값이 반환(그려짐)됨
//   //useEffect로 인해 데이터가 준비되고, ready 값이 변경되면 : 콜론 뒤의 값이 반환(그려짐)
//   return ready ? <Loading/> :  (
//     /*
//       return 구문 안에서는 {슬래시 + * 방식으로 주석
//     */
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>나만의 꿀팁</Text>
// 			 <Text style={styles.weather}>오늘의 날씨: {todayWeather + '°C ' + todayCondition} </Text>
//       <Image style={styles.mainImage} source={main}/>
//       <ScrollView style={styles.middleContainer} horizontal indicatorStyle={"white"}>
//         <TouchableOpacity style={styles.middleButton01}><Text style={styles.middleButtonText}>생활</Text></TouchableOpacity>
//         <TouchableOpacity style={styles.middleButton02}><Text style={styles.middleButtonText}>재테크</Text></TouchableOpacity>
//         <TouchableOpacity style={styles.middleButton03}><Text style={styles.middleButtonText}>반려견</Text></TouchableOpacity>
//         <TouchableOpacity style={styles.middleButton04}><Text style={styles.middleButtonText}>꿀팁 찜</Text></TouchableOpacity>
//       </ScrollView>
//       <View style={styles.cardContainer}>
//          {/* 하나의 카드 영역을 나타내는 View */}
//          {
//           tips.map((content,i)=>{
//             return (<Note content={content} key={i}/>)
//           })
//         }
        
//       </View>
   
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     //앱의 배경 색
//     backgroundColor: '#fff',
//   },
//   title: {
//     //폰트 사이즈
//     fontSize: 20,
//     //폰트 두께
//     fontWeight: '700',
//     //위 공간으로 부터 이격
//     marginTop:50,
//     //왼쪽 공간으로 부터 이격
//     marginLeft:20
//   },
// weather:{
//     alignSelf:"flex-end",
//     paddingRight:20
//   },
//   mainImage: {
//     //컨텐츠의 넓이 값
//     width:'90%',
//     //컨텐츠의 높이 값
//     height:200,
//     //컨텐츠의 모서리 구부리기
//     borderRadius:10,
//     marginTop:20,
//     //컨텐츠 자체가 앱에서 어떤 곳에 위치시킬지 결정(정렬기능)
//     //각 속성의 값들은 공식문서에 고대로~ 나와 있음
//     alignSelf:"center"
//   },
//   middleContainer:{
//     marginTop:20,
//     marginLeft:10,
//     height:60
//   },
//   middleButton01: {
//     width:100,
//     height:50,
//     padding:15,
//     backgroundColor:"#fdc453",
//     borderColor:"deeppink",
//     borderRadius:15,
//     margin:7
//   },
//   middleButton02: {
//     width:100,
//     height:50,
//     padding:15,
//     backgroundColor:"#fe8d6f",
//     borderRadius:15,
//     margin:7
//   },
//   middleButton03: {
//     width:100,
//     height:50,
//     padding:15,
//     backgroundColor:"#9adbc5",
//     borderRadius:15,
//     margin:7
//   },
//   middleButtonText: {
//     color:"#fff",
//     fontWeight:"700",
//     //텍스트의 현재 위치에서의 정렬 
//     textAlign:"center"
//   },
//   middleButton04: {
//     width:100,
//     height:50,
//     padding:15,
//     backgroundColor:"#f886a8",
//     borderRadius:15,
//     margin:7
//   },
//   cardContainer: {
//     marginTop:10,
//     marginLeft:10
//   },


// });

// import React,{useState,useEffect} from 'react';
// import main from '../assets/main.png';
// import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
// import data from '../data.json';
// import Note from '../components/note';
// import Loading from '../components/loading';


// export default function MainPage() {
//   console.disableYellowBox = true;
//   //return 구문 밖에서는 슬래시 두개 방식으로 주석

//   //기존 꿀팁을 저장하고 있을 상태
//   const [state,setState] = useState([])
//   //카테고리에 따라 다른 꿀팁을 그때그때 저장관리할 상태
//   const [cateState,setCateState] = useState([])

//   //컴포넌트에 상태를 여러개 만들어도 됨
//   //관리할 상태이름과 함수는 자유자재로 정의할 수 있음
//   //초기 상태값으로 리스트, 참거짓형, 딕셔너리, 숫자, 문자 등등 다양하게 들어갈 수 있음.
//   const [ready,setReady] = useState(true)

//   useEffect(()=>{
	   
//     //뒤의 1000 숫자는 1초를 뜻함
//     //1초 뒤에 실행되는 코드들이 담겨 있는 함수
//     setTimeout(()=>{
//         //꿀팁 데이터로 모두 초기화 준비
//         let tips = data.tips;
//         setState(tips)
//         setCateState(tips)
//         setReady(false)
//     },1000)

    
//   },[])

//     const category = (cate) => {
//         if(cate == "전체보기"){
//             //전체보기면 원래 꿀팁 데이터를 담고 있는 상태값으로 다시 초기화
//             setCateState(state)
//         }else{
//             setCateState(state.filter((d)=>{
//                 return d.category == cate
//             }))
//         }
//     }


// 	let todayWeather = 10 + 17;
//   let todayCondition = "흐림"

// 	//처음 ready 상태값은 true 이므로 ? 물음표 바로 뒤에 값이 반환(그려짐)됨
//   //useEffect로 인해 데이터가 준비되고, ready 값이 변경되면 : 콜론 뒤의 값이 반환(그려짐)
//   return ready ? <Loading/> :  (
//     /*
//       return 구문 안에서는 {슬래시 + * 방식으로 주석
//     */
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>나만의 꿀팁</Text>
// 			 <Text style={styles.weather}>오늘의 날씨: {todayWeather + '°C ' + todayCondition} </Text>
//       <Image style={styles.mainImage} source={main}/>
//       <ScrollView style={styles.middleContainer} horizontal indicatorStyle={"white"}>
//         <TouchableOpacity style={styles.middleButtonAll} onPress={()=>{category('전체보기')}}><Text style={styles.middleButtonTextAll}>전체보기</Text></TouchableOpacity>
//         <TouchableOpacity style={styles.middleButton01} onPress={()=>{category('생활')}}><Text style={styles.middleButtonText}>생활</Text></TouchableOpacity>
//         <TouchableOpacity style={styles.middleButton02} onPress={()=>{category('재테크')}}><Text style={styles.middleButtonText}>재테크</Text></TouchableOpacity>
//         <TouchableOpacity style={styles.middleButton03} onPress={()=>{category('반려견')}}><Text style={styles.middleButtonText}>반려견</Text></TouchableOpacity>
//         <TouchableOpacity style={styles.middleButton04} onPress={()=>{category('꿀팁 찜')}}><Text style={styles.middleButtonText}>꿀팁 찜</Text></TouchableOpacity>
//       </ScrollView>
//       <View style={styles.cardContainer}>
//          {/* 하나의 카드 영역을 나타내는 View */}
//          {
//           cateState.map((content,i)=>{
//             return (<Note content={content} key={i}/>)
//           })
//         }
        
//       </View>
   
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     //앱의 배경 색
//     backgroundColor: '#fff',
//   },
//   title: {
//     //폰트 사이즈
//     fontSize: 20,
//     //폰트 두께
//     fontWeight: '700',
//     //위 공간으로 부터 이격
//     marginTop:50,
//     //왼쪽 공간으로 부터 이격
//     marginLeft:20
//   },
// weather:{
//     alignSelf:"flex-end",
//     paddingRight:20
//   },
//   mainImage: {
//     //컨텐츠의 넓이 값
//     width:'90%',
//     //컨텐츠의 높이 값
//     height:200,
//     //컨텐츠의 모서리 구부리기
//     borderRadius:10,
//     marginTop:20,
//     //컨텐츠 자체가 앱에서 어떤 곳에 위치시킬지 결정(정렬기능)
//     //각 속성의 값들은 공식문서에 고대로~ 나와 있음
//     alignSelf:"center"
//   },
//   middleContainer:{
//     marginTop:20,
//     marginLeft:10,
//     height:60
//   },
//   middleButtonAll: {
//     width:100,
//     height:50,
//     padding:15,
//     backgroundColor:"#20b2aa",
//     borderColor:"deeppink",
//     borderRadius:15,
//     margin:7
//   },
//   middleButton01: {
//     width:100,
//     height:50,
//     padding:15,
//     backgroundColor:"#fdc453",
//     borderColor:"deeppink",
//     borderRadius:15,
//     margin:7
//   },
//   middleButton02: {
//     width:100,
//     height:50,
//     padding:15,
//     backgroundColor:"#fe8d6f",
//     borderRadius:15,
//     margin:7
//   },
//   middleButton03: {
//     width:100,
//     height:50,
//     padding:15,
//     backgroundColor:"#9adbc5",
//     borderRadius:15,
//     margin:7
//   },
//   middleButton04: {
//     width:100,
//     height:50,
//     padding:15,
//     backgroundColor:"#f886a8",
//     borderRadius:15,
//     margin:7
//   },
//   middleButtonText: {
//     color:"#fff",
//     fontWeight:"700",
//     //텍스트의 현재 위치에서의 정렬 
//     textAlign:"center"
//   },
//   middleButtonTextAll: {
//     color:"#fff",
//     fontWeight:"700",
//     //텍스트의 현재 위치에서의 정렬 
//     textAlign:"center"
//   },
//   cardContainer: {
//     marginTop:10,
//     marginLeft:10
//   },


// });

import React,{useState,useEffect} from 'react';
import main from '../assets/main.png';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import data from '../data.json';
import Note from '../components/note';
import Loading from '../components/loading';
import { StatusBar } from 'expo-status-bar';

export default function MainPage() {
  console.disableYellowBox = true;
  //return 구문 밖에서는 슬래시 두개 방식으로 주석

  //기존 꿀팁을 저장하고 있을 상태
  const [state,setState] = useState([])
  //카테고리에 따라 다른 꿀팁을 그때그때 저장관리할 상태
  const [cateState,setCateState] = useState([])

  //컴포넌트에 상태를 여러개 만들어도 됨
  //관리할 상태이름과 함수는 자유자재로 정의할 수 있음
  //초기 상태값으로 리스트, 참거짓형, 딕셔너리, 숫자, 문자 등등 다양하게 들어갈 수 있음.
  const [ready,setReady] = useState(true)

  useEffect(()=>{
	   
    //뒤의 1000 숫자는 1초를 뜻함
    //1초 뒤에 실행되는 코드들이 담겨 있는 함수
    setTimeout(()=>{
        //꿀팁 데이터로 모두 초기화 준비
        let tips = data.tips;
        setState(tips)
        setCateState(tips)
        setReady(false)
    }, 2000)

    
  },[])

    const category = (cate) => {
        if(cate == "전체보기"){
            //전체보기면 원래 꿀팁 데이터를 담고 있는 상태값으로 다시 초기화
            setCateState(state)
        }else{
            setCateState(state.filter((d)=>{
                return d.category == cate
            }))
        }
    }


	let todayWeather = 10 + 17;
    let todayCondition = "흐림"

	//처음 ready 상태값은 true 이므로 ? 물음표 바로 뒤에 값이 반환(그려짐)됨
  //useEffect로 인해 데이터가 준비되고, ready 값이 변경되면 : 콜론 뒤의 값이 반환(그려짐)
  return ready ? <Loading/> :  (
    /*
      return 구문 안에서는 {슬래시 + * 방식으로 주석
    */
    <ScrollView style={styles.container}>
        <StatusBar style="inverted" translucent />
        <Text style={styles.title}>나만의 꿀팁</Text>
        <Text style={styles.weather}>오늘의 날씨: {todayWeather + '°C ' + todayCondition} </Text>
        <Image style={styles.mainImage} source={main}/>
        <ScrollView style={styles.middleContainer} horizontal indicatorStyle={"white"}>
            <TouchableOpacity style={styles.middleButtonAll} onPress={()=>{category('전체보기')}}><Text style={styles.middleButtonTextAll}>전체보기</Text></TouchableOpacity>
            <TouchableOpacity style={styles.middleButton01} onPress={()=>{category('생활')}}><Text style={styles.middleButtonText}>생활</Text></TouchableOpacity>
            <TouchableOpacity style={styles.middleButton02} onPress={()=>{category('재테크')}}><Text style={styles.middleButtonText}>재테크</Text></TouchableOpacity>
            <TouchableOpacity style={styles.middleButton03} onPress={()=>{category('반려견')}}><Text style={styles.middleButtonText}>반려견</Text></TouchableOpacity>
            <TouchableOpacity style={styles.middleButton04} onPress={()=>{category('꿀팁 찜')}}><Text style={styles.middleButtonText}>꿀팁 찜</Text></TouchableOpacity>
        </ScrollView>
        <View style={styles.cardContainer}>
            {/* 하나의 카드 영역을 나타내는 View */}
            {
            cateState.map((content,i)=>{
                return (<Note content={content} key={i}/>)
            })
            }
            
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    //앱의 배경 색
    backgroundColor: '#fff',
  },
  title: {
    //폰트 사이즈
    fontSize: 20,
    //폰트 두께
    fontWeight: '700',
    //위 공간으로 부터 이격
    marginTop:50,
    //왼쪽 공간으로 부터 이격
    marginLeft:20
  },
weather:{
    alignSelf:"flex-end",
    paddingRight:20
  },
  mainImage: {
    //컨텐츠의 넓이 값
    width:'90%',
    //컨텐츠의 높이 값
    height:200,
    //컨텐츠의 모서리 구부리기
    borderRadius:10,
    marginTop:20,
    //컨텐츠 자체가 앱에서 어떤 곳에 위치시킬지 결정(정렬기능)
    //각 속성의 값들은 공식문서에 고대로~ 나와 있음
    alignSelf:"center"
  },
  middleContainer:{
    marginTop:20,
    marginLeft:10,
    height:60
  },
  middleButtonAll: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#20b2aa",
    borderColor:"deeppink",
    borderRadius:15,
    margin:7
  },
  middleButton01: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#fdc453",
    borderColor:"deeppink",
    borderRadius:15,
    margin:7
  },
  middleButton02: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#fe8d6f",
    borderRadius:15,
    margin:7
  },
  middleButton03: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#9adbc5",
    borderRadius:15,
    margin:7
  },
  middleButton04: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#f886a8",
    borderRadius:15,
    margin:7
  },
  middleButtonText: {
    color:"#fff",
    fontWeight:"700",
    //텍스트의 현재 위치에서의 정렬 
    textAlign:"center"
  },
  middleButtonTextAll: {
    color:"#fff",
    fontWeight:"700",
    //텍스트의 현재 위치에서의 정렬 
    textAlign:"center"
  },
  cardContainer: {
    marginTop:10,
    marginLeft:10
  },


});