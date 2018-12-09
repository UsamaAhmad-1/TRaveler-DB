/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";

import bgimage from "./images/tour.jpg";
const { width: WIDTH } = Dimensions.get("window");

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ImageBackground source={bgimage} style={styles.background_container}>
        <Text style={styles.tt}>Traveler Exploring Nature..</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.user}
            placeholder={"Username"}
            placeholderTextColor={"rgba(255,255,255,1.0)"}
            underlineColorAndroid="transparent"
            onChangeText={text => this.setState({ text })}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.user}
            placeholder={"Password"}
            secureTextEntry={true}
            placeholderTextColor={"rgba(255,255,255,1.0)"}
            underlineColorAndroid="transparent"
            onChangeText={text => this.setState({ text })}
          />
        </View>
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background_container: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "space-between"
  },
  user: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(128,128,128,0.8)",
    marginHorizontal: 25
  },
  inputContainer: {
    marginTop: 10
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    marginTop: 20,
    justifyContent: "center",
    backgroundColor: "rgba(0,128,0,0.9)"
  },
  btnText: {
    textAlign: "center",
    color: "rgba(255,255,255,1.0)"
  },

  tt: {
    marginBottom: 30,
    textAlign: "center",
    color: "rgba(0,128,0,1.0)",
    fontSize: 30
  }
});
