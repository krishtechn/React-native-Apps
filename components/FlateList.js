import React from 'react';
import {View,Text} from "react-native";

const FlateList = () =>{
    const names = [
      {
        name: "krish",
      },
      {
        name: "nabin",
      },
      {
        name :"krishna",
      },
      {
                  name :"krishna",
      }
    ];

    return (
        <View>
            {/* <Text style={{color:'black',fontSize:30,fontWeight:'bold',fontFamily:'sanse-serif'}}>{
                names.map(function(item){
                    return item.name;
                })
                }</Text> */}
               
        </View>
    );
}

export default FlateList