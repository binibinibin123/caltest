import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RetirementAgeCalculator: React.FC = () => {
  const [birthYear, setBirthYear] = useState<string>('')
  const [retirementAge, setRetirementAge] = useState<number | null>(null)

  const calculateRetirementAge = () => {
    if (birthYear) {
      const parsedBirthYear = parseInt(birthYear, 10)
      const calculatedRetirementAge = parsedBirthYear + 65 // 예시: 65세 퇴직
      setRetirementAge(calculatedRetirementAge)
    } else {
      setRetirementAge(null)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">퇴직 연령 계산기</h1>
      <div className="mb-4">
        <label htmlFor="birthYear" className="block text-gray-700 text-sm font-bold mb-2">
          출생 연도
        </label>
        <input
          type="number"
          id="birthYear"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={birthYear}
          onChange={(e) => setBirthYear(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={calculateRetirementAge}
      >
        계산하기
      </button>
      {retirementAge !== null && (
        <div className="mt-4">
          <p className="text-lg">
            퇴직 연령: <span className="font-bold">{retirementAge}</span>세 (출생 연도 기준)
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

export default RetirementAgeCalculator
