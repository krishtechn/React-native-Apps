import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-web";

const LoginForms = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Form</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati,
        veniam.
      </Text>
      <View style={styles.inputcontainer}>
        <Text style={styles.text}>Enter your Name?</Text>
        <TextInput placeholder="Enter your name" style={styles.textinput} />
      </View>

      <View style={styles.inputcontainer}>
        <Text style={styles.text}>Enter your Email?</Text>
        <TextInput placeholder="Enter your name" style={styles.textinput} />
      </View>

      <View style={styles.inputcontainer}>
        <Text style={styles.text}>Enter your Phone-Number?</Text>
        <TextInput placeholder="Enter your name" style={styles.textinput} />
      </View>

      <TouchableOpacity>
        <Text>Login here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: "bold",
  },
  text: {
    color: "black",
    letterSpacing: 1,
    lineHeight: 20,
    textAlign: "justify",
    fontWeight: "normal",
    textTransform: "capitalize",
  },
  textinput: {
    borderColor: "grey",
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    fontWeight: "normal",
    letterSpacing: 2,
  },
  inputcontainer: {
    marginVertical: 20,
  },
});

export default LoginForms;
