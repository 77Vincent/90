"use strict";

import React from "react";
import { Text, View, TextInput, LayoutAnimation } from "react-native";
import globalStyles from "./src/globalStyles.js";

export default class App extends React.Component {
  state = {
  }

  styles = {
    pickContainer: {
      flex: 4
    },
  }

  randomColor(min, max) {
    var arr = [];

    for (var i = 0; i < 3; i++) {
      var result = (Math.floor(Math.random() * (max - min + 1)) + min).toString(16);
      arr.push(result);
    }
    
    return `#${arr.join("")}`;
  }

  render() {
    return (
      <View style={[globalStyles.container]}>
        <View style={globalStyles.content}></View>

        <Text style={globalStyles.logo}>Instant</Text>
      </View>
    );
  }
}