import React, {useState} from 'react'
import {StyleSheet, Text, View, TextInput} from 'react-native'
import FormInput from './FormInput'

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const strToInteger = (numStr) => {
  return parseInt(numStr.replace(/[^0-9]/g, ''))
}

const Card = () => {
  const [loan, setLoan] = useState('')
  const [apr, setApr] = useState('')
  const [years, setYears] = useState('')

  const handleChangeLoan = (str) => {
    const numbers = strToInteger(str)
    !isNaN(numbers) ? setLoan(numberWithCommas(numbers)) : setLoan('')
  }

  const handleChangeApr = (str) => {
    const numberStr = str.replace(/[^0-9\.]/g, '')
    !isNaN(numberStr) && setApr(numberStr)
  }

  const handleChangeYears = (str) => {
    const numbers = strToInteger(str)
    !isNaN(numbers) ? setYears(numbers.toString()) : setYears('')
  }

  return (
    <View style={styles.container}>
      <FormInput
        label="Borrowing Amount [$]"
        keyboardType="numeric"
        placeHolder="400,000"
        value={loan}
        handleChange={handleChangeLoan}
        maxLength={10}
      />
      <FormInput
        label="Loan APR [%]"
        keyboardType="number-pad"
        placeHolder="5.0"
        value={apr}
        handleChange={handleChangeApr}
        maxLength={4}
      />
      <FormInput
        label="Loan Length [years]"
        keyboardType="number-pad"
        placeHolder="30"
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
    // borderColor: 'black',
    // borderWidth: 1,
  },
})

export default Card
