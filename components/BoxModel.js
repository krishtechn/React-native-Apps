import { View, Text, StyleSheet } from "react-native";
import React from "react";

const BoxModel = () => {
  return (
    <View style={styles.box}>
      <Text style={styles.text1}>Hello world</Text>
      <Text style={styles.text2}>Hello world</Text>
      <Text style={styles.text1}>Hello world</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    margin: 30,
    borderColor: "black",
    borderWidth: 2,
    paddingVertical: 30,
  },
  text1: {
    color: "white",
    // marginHorizontal: 30, //inside box outside text space from left and right
    marginVertical: 70, //inside box outside text space from top and bottom
    backgroundColor: "yellow",
    paddingHorizontal: 30, //inside text space from left and right
    paddingVertical: 30, //inside text space from top and bottom
  },
  text2: {
    width: "100%",
    /* paddingTop:30,
    paddingBottom:30,
    paddingLeft:30,
    paddingRight:30,*/
    paddingVertical: 30,
    /* borderBottomColor:"white",
    borderTopColor:"white",
    */
    borderColor: "white",
    borderWidth: 4,
    paddingHorizontal: 30,
    backgroundColor: "green",
  },
});

export default BoxModel;
