import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import TeslaClone from "../Components/TeslaClone";

const MainPage = () => {
  return (
    <ScrollView>
          <Pages />
    </ScrollView>
  )
}


const Pages = ()=>{
    return (
        <View>
           <TeslaClone title="Model 3" desc="Order Online for Touchless Delivery" leftbtn="Customer Order" rightbtn="existing investing"/>
        </View>
    )
}

export default MainPage