import { View, Text } from "react-native";
import React, { Component } from "react";
import AwesomeCardWithYoutubeLink from "./components/AwesomeCardWithYoutubeLink";

export class App extends Component {
  render() {
    return (
      <View>
        <Text>hello world</Text>
        <AwesomeCardWithYoutubeLink />
      </View>
    );
  }
}

export default App;
