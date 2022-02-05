import React from 'react';
import { View,Text } from 'react-native';
import FirstPage from './components/FirstPage';
import SecondCom from './components/SecondCom';
    
const Thirdpage = ()=>{
    const text = "hello world";
    const text1= <Text>This is the {text}</Text>
    const bool1 = true;
    const cond =  bool1?text1:false;
    const getFullName=(first,middle,last)=>{
        return(`your name is ${first} and your middle name is ${middle} and your last name is ${last}`);
    }
    const arr = ["krish",1,2,3,4,"kharal"]
    let x;
    const texts =  <Text>{getFullName("krish","prasad","kharal")}</Text>
    const arrs = (arr)=>{
         for(let i=0; i<arr.length; i++){
             x += `your item in ${i} is ${arr[i]}`;
         }
         return x;
    }

    return (
        <View>
            {/* {texts}
           <Text>{cond}{cond}</Text>
           <Text>{getFullName("krish","prasad","kharal")}</Text>
           <Text>{getFullName("krish1","prasad1","kharal2")}</Text>
           <Text>{arrs(arr)}</Text>
            <FirstPage /> */}
            {/* <SecondCom title="hello krish1" /> */}
            {/* <SecondCom titles="hello krish2" /> */}
        </View>
    );
}

export default Thirdpage;