import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Login from './components/Login/Login'
import Map from './components/Map/Map'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Login></Login>
      {/* <Map></Map> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});