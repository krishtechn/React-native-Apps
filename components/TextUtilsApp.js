import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react/cjs/react.development";

const TextUtilsApp = (props) => {
  const [texts, settexts] = useState("hello world i am krish");
  const text = "hello world text";
  const mystyles = {
    color: "red",
    background: "blue",
  };
  const hangletextchange = (event) => {
    settexts(event);
  };
  const handlebutton = () => {
    console.log("btn change");
  };
  let nexttext;
  const handleUpper = () => {
    nexttext = texts.toUpperCase();
    settexts(nexttext);
  };
  const handlelowercase = () => {
    nexttext = texts.toLowerCase();
    settexts(nexttext);
  };

  const resettext = () => {
    nexttext = "";
    settexts(nexttext);
    alert("reset text" + nexttext);
  };

  return (
    <View style={{ margin: 10 }}>
      <Text style={mystyles}>Hello world {props.title}</Text>
      <Text style={styles.mystyle}>{text}</Text>
      <TextInput
        onChangeText={hangletextchange}
        value={texts}
        style={{
          marginTop: 30,
          borderColor: "yellow",
          padding: 10,
          borderRadius: 30,
          fontSize: 20,
          borderWidth: 3,
        }}
        placeholder="Enter your name"
      />
      <Button
        title="click here"
        disabled={texts.length == 0}
        onPress={handlebutton}
        //disabled={True}
        style={{
          marginLeft: 80,
          marginRight: 80,
          marginTop: 30,
        }}
      />

      <Button
        title="uppercase"
        disabled={texts.length == 0}
        style={{ marginTop: 30 }}
        onPress={handleUpper}
      />

      <Button
        title="Lowercase"
        disabled={texts.length === 0}
        onPress={handlelowercase}
      />

      <Button title="Reset" disabled={texts.length === 0} onPress={resettext} />

      <Text>preview</Text>
      <Text>{texts}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mystyle: {
    color: "blue",
    backgroundColor: "red",
  },
});

export default TextUtilsApp;
