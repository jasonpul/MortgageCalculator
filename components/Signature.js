import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const Signature = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Loan Calculator</Text>
      <View style={styles.byLine}>
        <Text style={styles.by}>by</Text>
        <Text style={styles.company}>ROx Garage</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 10,
  },

  name: {
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },

  byLine: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  by: {
    fontSize: 10,
    marginRight: 5,
  },

  company: {
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
})

export default Signature
