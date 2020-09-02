import React, {useContext} from 'react'
import {StyleSheet, View} from 'react-native'
import FormInput from './FormInput'
import {LoanContext} from '../context/LoanContext'

const InputCard = () => {
  const {
    loan,
    apr,
    years,
    handleChangeLoan,
    handleChangeApr,
    handleChangeYears,
  } = useContext(LoanContext)
  return (
    <View style={styles.container}>
      <FormInput
        label="Borrowing Amount"
        keyboardType="numeric"
        placeHolder="400,000"
        inputUnit="$"
        value={loan}
        handleChange={handleChangeLoan}
        maxLength={11}
      />
      <FormInput
        label="Loan APR"
        keyboardType="number-pad"
        placeHolder="5.0"
        inputUnit="%"
        value={apr}
        handleChange={handleChangeApr}
        maxLength={5}
      />
      <FormInput
        label="Loan Length"
        keyboardType="number-pad"
        placeHolder="30"
        inputUnit="yrs"
        value={years}
        handleChange={handleChangeYears}
        maxLength={2}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '80%',
    padding: 20,
    borderColor: 'rgba(158, 150, 150, 0.5)',
    borderWidth: 1,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 0,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: 'white',
    margin: 50,
  },
})

export default InputCard
