"use strict";

import React from "react";
import { StackNavigator } from "react-navigation";
import { 
  Text, 
  View, 
  Button,
  TextInput, 
  LayoutAnimation, 
  StyleSheet 
} from "react-native";

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

class LandingComponent extends React.Component {
  static navigationOptions = {
    title: "Get ready",
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "navy"}}>
        <Text>Choose your color</Text>
      </View>
    );
  }
}

class WelcomeComponent extends React.Component {
  static navigationOptions = {
    title: "Welcome",
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "red"}}>
        <Text>Instant</Text>
        <Button
          onPress = {() => navigate("Landing")}
          title = "Go to choose your color"
        />
      </View>
    );
  }
}

const App = StackNavigator({
  Home: {screen: WelcomeComponent},
  Landing: {screen: LandingComponent}
});

class LogoComponent extends React.Component {
  render() {
    return (
      <View style={{justifyContent: "center", padding: 10, alignItems: "center"}}>
        <Text style={{fontWeight: "bold", fontSize: 24}}>Instant</Text>
      </View>
    );
  }
}

export default App;