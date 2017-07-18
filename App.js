"use strict";

import React from "react";
import { Text, View, TextInput, LayoutAnimation, StyleSheet } from "react-native";

class welcome extends React.Component {
  render() {

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  content: {
    flex: 1 
  },
  input: {
    height: 40,
    backgroundColor: "gray"
  }
});

export default class App extends React.Component {
  state = {
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
      <View style={[styles.container]}>
        <View style={styles.content}></View>

        <View style={{justifyContent: "center", padding: 10, alignItems: "center"}}>
          <Text style={{fontWeight: "bold", fontSize: 24}}>Instant</Text>
        </View>
      </View>
    );
  }
}