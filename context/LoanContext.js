import React, {createContext, useState, useEffect} from 'react'

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const strToInteger = (numStr) => {
  return parseInt(numStr.replace(/[^0-9]/g, ''))
}

const monthlyPayment = (loan, apr, years) => {
  const interest = parseFloat(apr) / 100 / 12
  const n = parseInt(years) * 12
  const principal = parseInt(loan.replace(/,/g, ''))
  const a = Math.pow(1 + interest, n)
  return Math.round((principal * (interest * a)) / (a - 1))
}

export const LoanContext = createContext()

const LoanContextProvider = (props) => {
  const [loan, setLoan] = useState('')
  const [apr, setApr] = useState('')
  const [years, setYears] = useState('')
  const [payment, setPayment] = useState('$0')

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

  useEffect(() => {
    if (loan && apr && years) {
      setPayment(`$${monthlyPayment(loan, apr, years)}`)
    } else {
      setPayment('$0')
    }
  }, [loan, apr, years])

  return (
    <LoanContext.Provider
      value={{
        loan,
        apr,
        years,
        payment,
        handleChangeLoan,
        handleChangeApr,
        handleChangeYears,
      }}>
      {props.children}
    </LoanContext.Provider>
  )
}

export default LoanContextProvider
