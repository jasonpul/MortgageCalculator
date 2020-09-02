import React, {useContext} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {LoanContext} from '../context/LoanContext'

const JumboTron = ({}) => {
  const {payment} = useContext(LoanContext)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{payment}</Text>
      <Text style={styles.label}>per month</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // borderWidth: 1,
    margin: 50,
  },
  text: {
    fontSize: 90,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  label: {
    fontSize: 30,
    textAlign: 'center',
    fontStyle: 'italic',
    color: 'rgb(100, 100, 100)',
  },
})

export default JumboTron
