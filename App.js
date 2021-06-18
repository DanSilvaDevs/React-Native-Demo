import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, Button, View, Alert, TextInput, TouchableOpacity } from 'react-native';

const image = { uri: "https://reactjs.org/logo-og.png" };
const titleText = "Hi, I'm Daniel, it's nice to meet you";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/Back.jpeg')} style={styles.image}>
        <Text style={styles.text}>
          {titleText}
        </Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="grey" 
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="grey"  
      />
      <TouchableOpacity onPress={() => Alert.alert('Thank you for submitting your data')} style={styles.button} activeOpacity={.7}>
        <Text style={styles.appButtonText}>Submit</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 8,
    borderWidth: 2,
    backgroundColor: '#fff',
    borderRadius: 10, 
    borderColor: 'black'
  },
  button: {
    elevation: 8,
    backgroundColor: "#000",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 250,
    alignSelf: "center",
    marginBottom: 50
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});