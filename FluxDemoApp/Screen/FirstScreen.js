import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';
import { Actions } from 'react-native-router-flux';
const FirstScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome} onPress={() => Actions.secondscreen()}>
        Welcome to the Demo!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default FirstScreen;
