import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

const RandomColors = () => {
  //const [rands, setrands] = useState("fff");
  const [rands, setrands] = useState([]);
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
    <ScrollView>
      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setrands([...rands, randomcolor()])}
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

        <FlatList
          data={rands}
          keyExtractor={(item) => item.id}
          renderItem={(items) => {
            console.log(items)
            return (
              <View
                style={{
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
                  color: {items}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
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

export default RandomColors;
