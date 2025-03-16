import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const BirthYearCalculator: React.FC = () => {
  const [age, setAge] = useState<string>('')
  const [birthYear, setBirthYear] = useState<number | null>(null)

  const calculateBirthYear = () => {
    if (age) {
      const currentYear = new Date().getFullYear()
      const parsedAge = parseInt(age, 10)
      const calculatedBirthYear = currentYear - parsedAge
      setBirthYear(calculatedBirthYear)
    } else {
      setBirthYear(null)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">출생 연도 계산기</h1>
      <div className="mb-4">
        <label htmlFor="age" className="block text-gray-700 text-sm font-bold mb-2">
          나이
        </label>
        <input
          type="number"
          id="age"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={calculateBirthYear}
      >
        계산하기
      </button>
      {birthYear !== null && (
        <div className="mt-4">
          <p className="text-lg">
            출생 연도: <span className="font-bold">{birthYear}</span>년
          </p>
        </div>
      )}
      <div className="mt-6">
        <Link to="/" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          계산기 목록으로 돌아가기
        </Link>
      </div>
    </div>
  )
}

export default BirthYearCalculator
