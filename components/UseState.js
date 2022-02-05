import React, { useState } from "react";
import { View,Text,StyleSheet, TextInput ,Button, ScrollView} from "react-native";

const SecondCom = (props)=>{
     const showname=(first,middle,last)=>{
         return `your name is ${first} ${middle} ${last}`;
     }
  const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
  }

     const [isHungry, setIsHungry] = useState(false)
     const [name,setname] = useState("krish")
     const [text,settext] = useState("")
    // const text = "hello world";
    return(
        <View>
        <Text style={styles.text1}>Hello world</Text>
        <Text style={styles.text1}>hello world</Text>
        {/* <Text>your name is{text}</Text> */}
        <Text>{props.title}</Text>
        <Text>{props.titles}</Text>
        <Text>{showname("krish","prasad","kharal")}</Text>
        <TextInput placeholder="Enter your name?" 
        onChangeText={newtext=>settext(newtext)}
        defaultValue={text}
        style={styles.inputs} />
        <Text>I am {isHungry?"full":"Hungry"}</Text>
        <Text>your name {name}</Text>
        <Text>your name is {text.split(' ').map((word)=>word && 'k').join(' ')}</Text>
        <Button
        title={isHungry?"Thank you":"click here"}
        onPress={
            ()=>{
                setname("krishna")
                // setIsHungry(true)
            }
        }
        disabled={isHungry?true:false}
        />     
        </View>

    );
    
}
const styles = StyleSheet.create({
    text1:{
        color:'red',
        fontSize:30,
        fontWeight:'bold',
    },
    inputs:{
        // backgroundColor:'red',
        borderColor:'white',
        paddingLeft:5,
        paddingTop:5,
        borderColor:'yellow',
        paddingBottom:5,
        borderWidth:3,
        borderRadius:40,
    },
})

export default SecondCom