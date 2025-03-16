import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const BasicCalculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState('0')
  const [operator, setOperator] = useState(null)
  const [firstValue, setFirstValue] = useState(null)

  const handleButtonClick = (buttonValue: string) => {
    if (buttonValue === 'C') {
      clearDisplay()
    } else if (buttonValue === '+/-') {
      toggleSign()
    } else if (buttonValue === '%') {
      calculatePercentage()
    } else if (buttonValue === '=') {
      performCalculation()
    } else if (['/', '*', '-', '+'].includes(buttonValue)) {
      handleOperator(buttonValue)
    } else if (buttonValue === '.') {
      inputDecimal()
    } else {
      inputDigit(buttonValue)
    }
  }

  const clearDisplay = () => {
    setDisplayValue('0')
    setFirstValue(null)
    setOperator(null)
  }

  const toggleSign = () => {
    setDisplayValue((parseFloat(displayValue) * -1).toString())
  }

  const calculatePercentage = () => {
    setDisplayValue((parseFloat(displayValue) / 100).toString())
  }

  const inputDecimal = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.')
    }
  }

  const inputDigit = (digit: string) => {
    if (displayValue === '0') {
      setDisplayValue(digit)
    } else {
      setDisplayValue(displayValue + digit)
    }
  }

  const handleOperator = (nextOperator: string) => {
    const value = parseFloat(displayValue)

    if (firstValue === null) {
      setFirstValue(value)
    } else if (operator) {
      const result = performOperation()
      setDisplayValue(String(result))
      setFirstValue(result)
    }

    setOperator(nextOperator)
    setDisplayValue('0')
  }

  const performCalculation = () => {
    if (firstValue === null) {
      return
    }

    const result = performOperation()
    setDisplayValue(String(result))
    setFirstValue(null)
    setOperator(null)
  }

  const performOperation = () => {
    const currentValue = parseFloat(displayValue)
    const prevValue = firstValue || 0

    switch (operator) {
      case '+':
        return prevValue + currentValue
      case '-':
        return prevValue - currentValue
      case '*':
        return prevValue * currentValue
      case '/':
        return prevValue / currentValue
      default:
        return currentValue
    }
  }

  const buttons = [
    'C', '+/-', '%', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=',
  ]

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">기본 계산기</h1>
      <div className="bg-gray-100 rounded-lg shadow-xl p-4">
        <div className="text-right text-3xl p-2 mb-4 bg-white rounded-lg shadow-inner">{displayValue}</div>
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((button, index) => (
            <button
              key={index}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
              onClick={() => handleButtonClick(button)}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <Link to="/" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          계산기 목록으로 돌아가기
        </Link>
      </div>
    </div>
  )
}

export default BasicCalculator
