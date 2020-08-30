import React from 'react'
import {StyleSheet, Text, View, TextInput} from 'react-native'

const Card = ({
  label,
  keyboardType,
  placeHolder,
  handleChange,
  value,
  maxLength,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputText}
        placeholder={placeHolder}
        keyboardType={keyboardType}
        onChangeText={handleChange}
        value={value}
        maxLength={maxLength}
      />
      <Text style={styles.inputLabel}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // width: '100%',
    // borderColor: 'black',
    // borderWidth: 1,
  },
  inputText: {
    width: '100%',
    borderBottomColor: 'rgba(158, 150, 150, 0.5)',
    borderBottomWidth: 1,
    textAlign: 'right',
  },
  inputLabel: {
    width: '100%',
    textAlign: 'right',
    fontStyle: 'italic',
  },
})

export default Card
