import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';


export default function Try() {
  let [quote, setQuote] = React.useState('')
  let [source, setSource] = React.useState('')

  const fetchApiCall = () => {
    fetch("https://api.thecatapi.com/v1/breeds", {
      "method": "GET",
      "headers": {
        "x-api-key": "94831cc8-7673-472c-9312-8ac6729d300a"
      }
    })
      .then(response => response.json())
      .then(response => {
        setQuote(response.content);
        setSource(response.originator.name)
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cats API</Text>
      <Text>Click to fetch records</Text>
      <TouchableHighlight onPress={fetchApiCall}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Load Cats</Text>
        </View>
      </TouchableHighlight>
      <View>
        <Text>{id}</Text>
        <Text>{source}</Text>
     
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AAA',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
  },
  title: {
    fontSize: 35,
    color: '#fff'
  },
  button: {
    padding: 10,
    marginVertical: 15,
    backgroundColor: '#0645AD'
  },
  buttonText: {
    color: '#fff'
  }
});