import React from 'react'
import BasicCalculator from './BasicCalculator'

const Calculator: React.FC = () => {
  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
      <div className="bg-gray-800 text-white p-4 text-right text-3xl font-bold">
        0
      </div>
      <BasicCalculator />
    </div>
  )
}

export default Calculator
