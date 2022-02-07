import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Position = () => {
  return (
    <View
      style={{
        borderWidth: 3,
        borderColor: "black",
        marginHorizontal: 20,
        marginVertical: 20,
        marginBottom:20,
        height: "90%",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Text style={[styles.Box1, styles.common]}>Box1</Text>
      </View>
      <Text style={[styles.Box2, styles.common]}>Box2</Text>
      <Text style={[styles.Box3, styles.common]}>Box3</Text>
      <Text style={[styles.Box4, styles.common]}>Box4</Text>
      <Text style={[styles.Box5, styles.common]}>Box5</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Box1: {
    backgroundColor: "red",
    alignSelf: "center", //we can used alignself in child element
    //justifyContent:"center",//we can not used justifyContent in child element
  },
  Box2: {
    backgroundColor: "blue",
    position: "absolute",
    right: 0,
  },
  Box3: {
    backgroundColor: "grey",
    position: "absolute",
    left: 0,
    bottom: 0,
  },
  Box4: {
    backgroundColor: "yellow",
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  Box5: {
    backgroundColor: "orange",
    position: "absolute",
  },
  common: {
    padding: 30,
    width: 200,
    height: 100,
  },
});

export default Position;
