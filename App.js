import React from 'react'
import {StyleSheet, Text, View, TextInput} from 'react-native'
import InputCard from './components/InputCard'
import LoanContextProvider from './context/LoanContext'
import JumboTron from './components/JumboTron'
import Signature from './components/Signature'

export default function App() {
  return (
    <View style={styles.container}>
      <LoanContextProvider>
        <JumboTron />
        <InputCard />
      </LoanContextProvider>
      <Signature />
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
