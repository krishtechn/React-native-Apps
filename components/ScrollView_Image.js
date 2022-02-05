import React from "react";
import { View,Text,StyleSheet, TextInput, ScrollView,Image } from "react-native";

const FirstPage = ()=>{
    const text = "hello world hello world";
  
  const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 100,
  height: 100,
  };
  
return (
  <>
    <View>
<Text style={{color:'red',backgroundColor:'orange',borderBottomRightRadius:10,borderBottomLeftRadius:10,textAlign:'center',marginBottom:9,padding:34,fontSize:30}}>{text}</Text>
 </View>
<ScrollView>
 <ScrollView style={{padding:10,display:"flex",textAlign:'center',color:'red',backgroundColor:'#000',textAlign:'center',shadowColor:'black',}}>
     <View style={{backgroundColor:'#F1F1F1',marginTop:30,borderRadius:10,display:'flex',justifyContent:'center',alignItems:'center'}}>
         <View style={{width:300,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
             <Image source={logo} style={{marginTop:30}} />
             <Image source={logo} style={{marginTop:30}} />
         </View>
         <Text style={{color:'white',fontSize:30,fontWeight:'bold',textAlign:'center',padding:70}}>Hello world</Text>
     </View>
       <View style={{backgroundColor:'#F1F1F1',marginTop:30,borderRadius:10,display:'flex',justifyContent:'center',alignItems:'center'}}>
         <Image source={logo} style={{marginTop:30,}} />
         <Text style={{color:'white',fontSize:30,fontWeight:'bold',textAlign:'center',padding:100}}>Hello world</Text>
     </View>     
     <View style={{backgroundColor:'#F1F1F1',marginTop:30,borderRadius:10,display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Image source={logo} style={{marginTop:30,}} />
         <Text style={{color:'white',fontSize:30,fontWeight:'bold',textAlign:'center',padding:100}}>Hello world</Text>
     </View>  
        <View style={{backgroundColor:'#f1f1f1',marginTop:30,marginBottom:100,borderRadius:10,display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Image source={logo} style={{marginTop:30,}} />
         <Text style={{color:'white',fontSize:30,fontWeight:'bold',textAlign:'center',padding:100}}>Hello world</Text>
     </View>
</ScrollView>    
</ScrollView>
</>
);
}
  
export default FirstPage