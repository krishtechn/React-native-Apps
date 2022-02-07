import { View, Text } from "react-native";
import React, { Component } from "react";
import AwesomeCardWithYoutubeLink from "./components/AwesomeCardWithYoutubeLink";
import BoxModel from "./components/BoxModel";
import MultipleStyles from "./components/MultipleStyles";
import TextUtilsApp from "./components/TextUtilsApp";
import FlexBox from "./components/FlexBox";
import Position from "./components/Position";

export class App extends Component {
  render() {
    return (
      <View>
        {/* <AwesomeCardWithYoutubeLink /> */}

        {/* <BoxModel /> */}

        {/* <MultipleStyles /> */}
        {/* <TextUtilsApp /> */}

        <FlexBox />

        {/* <Position /> */}
      </View>
    );
  }
}

export default App;
