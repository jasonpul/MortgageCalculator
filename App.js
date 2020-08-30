import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {StyleSheet, Text, View, TextInput} from 'react-native'
import Card from './components/Card'

export default function App() {
  return (
    <View style={styles.container}>
      <Card />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
