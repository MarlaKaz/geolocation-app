import React, { useState, useEffect, Component } from 'react';
import { Platform, Alert, Button, SafeAreaView, FlatList, StatusBar, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import * as geolib from 'geolib';
import data2 from './pois.json';


export default function Pois() {

 {/* const json_function = () => {
      fetch('https://warply.s3.amazonaws.com/data/test_pois.json ')
      .then(response => response.json() )
      .then(data => console.log(data[1].latitude) )
      .catch(error => console.log(error));
  }
*/}

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({}); 
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
      text = JSON.stringify(location);
    }


{/*let text = 'Waiting...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
      let lat = parseInt(location.latitude)
      let long = parseInt(location.longitude)
      text = geolib.orderByDistance({ latitude: lat, longitude: long }, [
          { latitude: 37.160931, longitude: 22.867281},
          { latitude: 37.919683, longitude: 23.74405 },
        ]);
    }
*/}

  return (
    <View style={{flex: 1, flexDirection: 'column', justifyContent: "center",
        alignItems: "center"}}>
           <Text >
             {text} 
           </Text>
           <FlatList
             data={data2}
             showsVerticalScrollIndicator={false}
             renderItem={({item}) =>
                <View >
                 <Text>{item.address}</Text>
                </View>
             }
             keyExtractor={(item, index) => index.toString()}
           />
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
  },
  Button: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginVertical: 10,
      borderRadius: 5
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  address: {
    fontSize: 32,
  },
}); 

