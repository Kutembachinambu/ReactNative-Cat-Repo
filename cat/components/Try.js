import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';


export default function Try() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    console.log(data);


    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/breeds", {
             "method": "GET",
             "headers": {
             "x-api-key": "94831cc8-7673-472c-9312-8ac6729d300a"
      }
    })
        
        .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
    {isLoading ? <Text>Loading...</Text> : 
    ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
        <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.name}</Text>
        <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Cats:</Text>
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (

            <Text>{item.name + ' ' + item.image}</Text>
            

    
           
          )}
        />
      </View>
    )}
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