import * as firebase from 'firebase/app';

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
    apiKey: "AIzaSyCH4lV5jz21lH8a1GwE8R20W_bkuWCbRIM",
    authDomain: "nara-cooltip.firebaseapp.com",
    databaseURL: "https://nara-cooltip.firebaseio.com",
    projectId: "nara-cooltip",
    storageBucket: "nara-cooltip.appspot.com",
    messagingSenderId: "617131877869",
    appId: "1:617131877869:web:85aeedd9a9f034230ff3e4",
    measurementId: "G-GZ5TEYWCLK"
};

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()