import { View, Text,Image,StyleSheet, TouchableOpacity ,Alert,Linking} from 'react-native'
import React from 'react'
import { 
  RobotoSlab_100Thin,
  RobotoSlab_200ExtraLight,
  RobotoSlab_300Light,
  RobotoSlab_400Regular,
  RobotoSlab_500Medium,
  RobotoSlab_600SemiBold,
  RobotoSlab_700Bold,
  RobotoSlab_800ExtraBold,
  RobotoSlab_900Black 
} from '@expo-google-fonts/roboto-slab';
import AppLoading from 'expo-app-loading';
import { useFonts } from "@expo-google-fonts/roboto-slab";


const Home = (props) => {
    const {title,subtitle,link1,link2,btn1,btn2,desc} = props;
  function showalert(title,subtitle,Link){
    Alert.alert(
      title,
      subtitle,
      [
        {
        text:"Cancle",
        onPress:()=>console.log("cancle"),
        style:"cancel"
      },
      {
       text:"Ok",
       onPress:()=>{
         Linking.openURL(Link);
       },
       style:"destructive",
     }
     ]
    )
  }


  let [fontsLoaded] = useFonts({
    RobotoSlab_100Thin,
    RobotoSlab_200ExtraLight,
    RobotoSlab_300Light,
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
    RobotoSlab_600SemiBold,
    RobotoSlab_700Bold,
    RobotoSlab_800ExtraBold,
    RobotoSlab_900Black 
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const description = desc;
  return (
    <View style={styled.container}>
       <View style={styled.centerview}>
         <Image source={require("../images/profile.jpg")} style={styled.img}/>
          <View style={styled.itemtext}>
          
          <Text style={[styled.title,{color:"blue",fontSize:33,fontWeight:"100"}]}>{title}</Text>
          <Text style={[styled.title,{color:"#4c5dab",letterSpacing:2,fontWeight:"900"}]}>{subtitle}</Text>

          </View>
           <Text style={styled.desc}>{description}</Text>
          </View>
          <TouchableOpacity style={{color:"black",borderColor:"black",borderWidth:2,padding:20,borderRadius:20,marginTop:20}} onPress={()=>{
            showalert("FACEBOOK","Are you join with me on facebook",link1);
          }}>
            <Text style={{fontSize:15,fontWeight:"800",textTransform:"uppercase",letterSpacing:2,fontFamily:"RobotoSlab_500Medium"}}>{btn2}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{color:"black",borderColor:"black",borderWidth:2,padding:20,borderRadius:20,marginTop:20}} onPress={()=>{
             showalert("YOUTUBE CHANNEL","Are you visit my youtube channel",link2);
          }}>
            <Text style={{fontSize:15,fontWeight:"800",textTransform:"uppercase",letterSpacing:2,fontFamily:"RobotoSlab_500Medium"}}>{btn1}</Text>
          </TouchableOpacity>
    </View>
  )
    }
    
    
    const styled = StyleSheet.create({
      container:{
        width:"100%",
        height:"100%",
        display:"flex",
        alignItems:"center",
        marginVertical:30,
      },
      centerview:{
        alignItems:"center",
        width:"100%",
        textAlign:"center",
        marginTop:50,
      },
      img:{
        height:undefined,
        width:"110%",
        aspectRatio:2,
        borderRadius:10,
        resizeMode:"contain",
      },
      itemtext:{
        width:"100%",
        marginTop:30,
        lineHeight:260,
        padding:15,
      },
      title:{
        fontSize:29,
        fontWeight:"bold",
        textAlign:"center",
        textTransform:"capitalize",
        fontFamily:"RobotoSlab_200ExtraLight",
      },
      desc:{
      textAlign:"center",
      fontSize:18,
      fontWeight:"normal",
      color:"#7d7d7d",
      margin:10,
      textTransform:"capitalize",
      fontFamily:"RobotoSlab_200ExtraLight",
      }
     
    });
    

export default Home