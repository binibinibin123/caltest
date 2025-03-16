import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LifeExpectancyCalculator: React.FC = () => {
  const [gender, setGender] = useState<string>('male')
  const [birthYear, setBirthYear] = useState<string>('')
  const [lifeExpectancy, setLifeExpectancy] = useState<number | null>(null)

  const calculateLifeExpectancy = () => {
    if (birthYear) {
      const parsedBirthYear = parseInt(birthYear, 10)
      let expectancy = 0

      if (gender === 'male') {
        expectancy = 80 // 남성 기대 수명 (예시)
      } else {
        expectancy = 85 // 여성 기대 수명 (예시)
      }

      setLifeExpectancy(expectancy)
    } else {
      setLifeExpectancy(null)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">수명 계산기</h1>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          성별
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">남성</option>
          <option value="female">여성</option>
        </select>
      </div>
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
        onClick={calculateLifeExpectancy}
      >
        계산하기
      </button>
      {lifeExpectancy !== null && (
        <div className="mt-4">
          <p className="text-lg">
            기대 수명: <span className="font-bold">{lifeExpectancy}</span>세
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

export default LifeExpectancyCalculator
