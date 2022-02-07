import { View, Text } from "react-native";
import React from "react";

const FlexBox = () => {
  return (
    <View
      style={{
        borderColor: "black",
        borderWidth: 3,
        borderRadius: 30,
        marginHorizontal: 30,
        marginVertical: 50,
        display: "flex",
        height: "70%",
        flexDirection: "column-reverse",
        //alignItems: "center",
        //flexWrap:"wrap", //responsive
      }}
    >
      <Text
        style={{
          backgroundColor: "red",
          margin: 30,
          padding: 30,
          flex:1,
          alignSelf: "stretch",
        }}
      >
        Flex 1
      </Text>
      <Text style={{ backgroundColor: "blue", margin: 30, padding: 30,flex:1 }}>
        Flex 2
      </Text>
      <Text style={{ backgroundColor: "green", margin: 30, padding: 30,flex:2 }}>
        Flex 3
      </Text>
    </View>
  );
};

export default FlexBox;
