import React from 'react'
import {StyleSheet, Text, View, TextInput} from 'react-native'

const FormInput = ({
  label,
  keyboardType,
  placeHolder,
  handleChange,
  value,
  maxLength,
  inputUnit,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder={placeHolder}
          keyboardType={keyboardType}
          onChangeText={handleChange}
          value={value}
          maxLength={maxLength}
        />
        <View style={styles.inputUnit}>
          <Text style={styles.inputUnitText}>{inputUnit}</Text>
        </View>
      </View>
      <Text style={styles.inputLabel}>{label}</Text>
    </View>
  )
}

const unitWidth = 40
const fontSize = 30
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  inputUnit: {
    width: unitWidth,
    textAlign: 'left',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: fontSize,
  },

  inputUnitText: {
    fontSize: fontSize * 0.75,
    color: 'rgb(158, 150, 150)',
  },

  inputText: {
    borderBottomColor: 'rgba(158, 150, 150, 0.5)',
    borderBottomWidth: 1,
    flex: 1,
    textAlign: 'right',
    alignItems: 'stretch',
    marginLeft: unitWidth,
    fontSize: fontSize,
  },

  inputLabel: {
    textAlign: 'right',
    fontStyle: 'italic',
    marginRight: unitWidth,
  },
})

export default FormInput
