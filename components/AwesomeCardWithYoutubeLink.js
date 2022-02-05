import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";

const AwesomeCardWithYoutubeLink = () => {
  return (
    <ScrollView style={{ backgroundColor: "#f1f1f1" }}>
      <View style={styles.statusbar}>
        <Text>Learn Programming</Text>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Cards
            title="Learn Html and Css"
            desc="this is Html and css tutorial in this tutorial you are learn about html and css fromm basic to advance with Video."
            btn="Watch video"
            Link="https://www.youtube.com"
          />
          <Cards
            title="Learn Php and Mysqli"
            desc="this is Php and Mysqli tutorial in this tutorial you are learn about Php and Mysqli fromm basic to advance with Video."
            btn="Watch video"
            Link="https://www.Google.com"
          />
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const Cards = (props) => {
  const { title, desc, btn, Link } = props;
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
        style={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          width: "100%",
          height: 250,
          resizeMode: "cover",
        }}
      />
      <View
        style={{
          paddingHorizontal: 30,
          textAlign: "center",
        }}
      >
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {/* there are two type of button :
       - button
        -TouchableOpacity */}

      {/* <Button
        title="click here"
        style={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      /> */}

      <TouchableOpacity
        style={styles.touchbtn}
        onPress={() => Linking.openURL(Link)}
      >
        <Text
          style={
            (styles.desc,
            {
              textAlign: "center",
              textTransform: "capitalize",
              letterSpacing: 3,
            })
          }
        >
          {btn}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 30,
    padding: 40,
  },
  card: {
    borderColor: "yellow",
    borderWidth: 3,
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
    textTransform: "capitalize",
    letterSpacing: 5,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "black",
  },
  desc: {
    color: "black",
    marginVertical: 10,
    textAlign: "justify",
    textTransform: "capitalize",
    fontFamily: "JosefinSans_100Thin",
  },
  touchbtn: {
    padding: 10,
    backgroundColor: "white",
    borderBottomLeftRadius: 20,
    backgroundColor: "blue",
    borderBottomRightRadius: 20,
  },
  statusbar: {
    backgroundColor: "blue",
    padding: 10,
    textAlign: "center",
  },
});

export default AwesomeCardWithYoutubeLink;
