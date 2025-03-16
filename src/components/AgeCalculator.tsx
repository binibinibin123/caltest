import React, { useState } from 'react'
import { differenceInYears, parseISO } from 'date-fns'
import { ko } from 'date-fns/locale'
import { Link } from 'react-router-dom'

const AgeCalculator: React.FC = () => {
  const [birthDate, setBirthDate] = useState<string>('')
  const [age, setAge] = useState<number | null>(null)

  const calculateAge = () => {
    if (birthDate) {
      const parsedBirthDate = parseISO(birthDate)
      const today = new Date()
      const calculatedAge = differenceInYears(today, parsedBirthDate)
      setAge(calculatedAge)
    } else {
      setAge(null)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">만 나이 계산기</h1>
      <div className="mb-4">
        <label htmlFor="birthDate" className="block text-gray-700 text-sm font-bold mb-2">
          출생일
        </label>
        <input
          type="date"
          id="birthDate"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={calculateAge}
      >
        계산하기
      </button>
      {age !== null && (
        <div className="mt-4">
          <p className="text-lg">
            만 나이: <span className="font-bold">{age}</span>세
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

export default AgeCalculator
