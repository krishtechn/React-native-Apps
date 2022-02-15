import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import React, { useState } from "react";

const bgRandomColors = () => {
  //const [rands, setrands] = useState("fff");
  const [rands, setrands] = useState("rgba(111,82,192)");
  const randomcolor = (colors) => {
    //Linking.openURL("https://www.google.com");
    //let random = Math.floor(Math.random()*256);
    let yellow = Math.floor(Math.random() * 256);
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    // console.log(random);
    //setrands(random);
    let color = `rgb(${red},${yellow},${blue})`;
    setrands(color);
    return colors;
  };
  return (
    <View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => alert(randomcolor(rands))}
      >
        <Text
          style={{
            textAlign: "center",
            letterSpacing: 3,
            color: "#" + rands,
            textTransform: "uppercase",
          }}
        >
          Random color
        </Text>
      </TouchableOpacity>

      <View
        style={{
          backgroundColor: rands,
          width: "100%",
          height: "100%",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            // backgroundColor: "#" + rands,
            // backgroundColor: "rgba(254,71,192)",
            borderRadius: 5,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            marginBottom: 350,
          }}
        >
          color: {rands}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#00b0ff",
    //backgroundColor: "rgba(67,222,35)",
    color: "white",
    padding: 30,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
});

export default bgRandomColors;
