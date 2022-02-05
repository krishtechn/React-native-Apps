import React, { useState } from "react";
import { Text, View, FlatList,Image,StyleSheet } from "react-native";
import { Button, TextInput, TouchableOpacity } from "react-native-web";
import FlateList from "./components/FlateList";
import TextUtilsApp from "./components/TextUtilsApp";


const TutorialReact = () => {
  const menu = [
    {
      id: "1",
      name: "krish",
    },
    {
      id: "1",
      name: "krish",
    },
    {
      id: "1",
      name: "krish",
    },
    {
      id: "1",
      name: "krish",
    },
  ];
  const [x,setx] = useState(0);
  const [name,setname] = useState("");
   const handlebtn = ()=>{
     setx(x + 1);
     document.title = `${x} message`;
   }

   const handleusername =(e)=> {
     setname(e.target.value);
   }


  return (
    <View>
      {/* <Text>Hello world</Text>
        <TextUtilsApp title="hello world 2" /> */}
      <Text>Hello world 1</Text>
      <Image
        source={require("./assets/icon.png")}
        style={{ width: 300, height: 200 }}
      />
    <TextInput placeholder="Enter your name" onChange={handleusername} value={name}  style={styles.input}/>
      <TouchableOpacity style={styles.button} onPress={handlebtn}>
        <Text>Press Here</Text>
      </TouchableOpacity>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "red",
    padding: 10,
  },
  input:{
    borderColor:'yellow',
    borderWidth:3,
    padding:10,
    fontSize:20,
    fontWeight:'bold',
    marginTop:30,
  }
});

export default TutorialReact;
