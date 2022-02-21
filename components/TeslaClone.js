import { Image,StyleSheet, View,Text, TouchableOpacity } from 'react-native'
import React from 'react'

const TeslaClone = ({title,desc,leftbtn,rightbtn}) => {
  return (
<View>
<View style={{height:"100%",width:"100%",position:"relative"}}>
       <Image source={require('../images/solar-roof.jpg')} style={{width:"100%",height:940, resizeMode: 'stretch',}}/>
       <View style={{position:"absolute",display:"flex",justifyContent:'space-between',flexDirection:"column",width:"100%",height:"85%",marginVertical:30}}>
           <View style={styled.textitem}>
             <Text style={[styled.commonStyle,styled.title]}>{title}</Text>
             <Text style={[styled.commonStyle,styled.desc]}>{desc}</Text>
           </View>
            <View style={styled.btncontainer}>
                <TouchableOpacity style={styled.btn}>
                    <Text style={styled.desc}>{leftbtn}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styled.btn}>
                    <Text style={styled.desc}>{rightbtn}</Text>
                </TouchableOpacity>
            </View>


       </View>
       {/* <View style={styled.sidebar}>
         <View style={{width:"100%",marginLeft:30}}>
         <Text style={styled.list}>hello</Text>
         <Text style={styled.list}>hello</Text>
         <Text style={styled.list}>hello</Text>
         <Text style={styled.list}>hello</Text>
         <Text style={styled.list}>hello</Text>
         <Text style={styled.list}>hello</Text>
         <Text style={styled.list}>hello</Text>
         </View>
     </View> */}
      </View>
    
</View>
      
  )
}


const styled = StyleSheet.create({
    textitem:{
        marginVertical:60,
    },
    commonStyle:{
        textAlign:"center",
    },
    title:{
        fontSize:30,
        letterSpacing:2,
        color:"black",
        fontWeight:"bold",
        textTransform:"uppercase",
    },
    desc:{
        fontSize:15,
        letterSpacing:1,
        textAlign:"center",
        color:"gray",
        fontWeight:"normal",
        textTransform:"capitalize",
    },
    btncontainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
    },
    btn:{
        backgroundColor:"rgb(58, 61, 66)",
        padding:10,
        width:"45%",
        borderRadius:30,
        fontSize:16,
        fontWeight:"bold",
        letterSpacing:3,
    },
    sidebar:{
        position:"absolute",
        top:0,
        right:0,
        backgroundColor:"white",
        width:"45%",
        height:"100%",
    },
    list:{
        color:"black",
        fontSize:25,
        marginTop:30,
        marginBottom:30,
        letterSpacing:3,
        fontWeight:"bold",
        borderLeftColor:"white",
        borderRightColor:"white",
        borderTopColor:"white",
        borderBottomColor:"gray",
        borderWidth:3,
        width:"80%",
    }
})

export default TeslaClone;