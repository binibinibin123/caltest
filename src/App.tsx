import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import BasicCalculator from './components/BasicCalculator'
import AgeCalculator from './components/AgeCalculator'
import KoreanAgeCalculator from './components/KoreanAgeCalculator'
import BirthYearCalculator from './components/BirthYearCalculator'
import ExamYearCalculator from './components/ExamYearCalculator'
import RetirementAgeCalculator from './components/RetirementAgeCalculator'
import LifeExpectancyCalculator from './components/LifeExpectancyCalculator'
import { Cake, Calendar, FileText, Briefcase, Hourglass, User } from 'lucide-react'
import Blog from './components/Blog' // Blog 컴포넌트 import

function Home() {
  const categories = [
    '전체',
    '연령 및 생애',
    '건강 및 신체',
    '재무 및 경제',
    '시간 및 날짜',
    '기타 흥미로운 계산기',
  ]

  const calculators = [
    {
      id: 'age-calculator',
      path: '/age-calculator',
      name: '나이 계산기',
      description: '만 나이 계산기 입니다.',
      icon: <Cake />,
      component: AgeCalculator,
      category: '연령 및 생애',
    },
    {
      id: 'korean-age-calculator',
      path: '/korean-age-calculator',
      name: '한국식 나이 계산기',
      description: '한국식 나이 계산기 입니다.',
      icon: <User />,
      component: KoreanAgeCalculator,
      category: '연령 및 생애',
    },
    {
      id: 'birth-year-calculator',
      path: '/birth-year-calculator',
      name: '출생 연도 계산기',
      description: '출생 연도 계산기 입니다.',
      icon: <Calendar />,
      component: BirthYearCalculator,
      category: '연령 및 생애',
    },
    {
      id: 'exam-year-calculator',
      path: '/exam-year-calculator',
      name: '수능 연도 계산기',
      description: '수능 연도 계산기 입니다.',
      icon: <FileText />,
      component: ExamYearCalculator,
      category: '연령 및 생애',
    },
    {
      id: 'retirement-age-calculator',
      path: '/retirement-age-calculator',
      name: '퇴직 연령 계산기',
      description: '퇴직 연령 계산기 입니다.',
      icon: <Briefcase />,
      component: RetirementAgeCalculator,
      category: '연령 및 생애',
    },
    {
      id: 'life-expectancy-calculator',
      path: '/life-expectancy-calculator',
      name: '수명 계산기',
      description: '수명 계산기 입니다.',
      icon: <Hourglass />,
      component: LifeExpectancyCalculator,
      category: '연령 및 생애',
    },
    {
      id: 'basic-calculator',
      path: '/basic',
      name: '기본 계산기',
      description: '기본 사칙연산 계산기 입니다.',
      icon: null,
      component: BasicCalculator,
      category: '전체',
    },
  ]

  return (
    <div className="container mx-auto mt-8 px-4">
      <nav className="mb-4">
        <ul className="flex space-x-4 overflow-x-auto">
          {categories.map((category, index) => (
            <li
              key={index}
              className="px-4 py-2 bg-gray-200 rounded-full text-sm cursor-pointer hover:bg-gray-300"
            >
              {category}
            </li>
          ))}
        </ul>
      </nav>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {calculators.map((calculator) => (
          <li
            key={calculator.id}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <Link
              to={calculator.path}
              className="block text-center"
            >
              <div className="mb-4 h-10 flex items-center justify-center">
                {calculator.icon}
              </div>
              <h2 className="text-xl font-bold mb-2">{calculator.name}</h2>
              <p className="text-gray-600 mb-4">{calculator.description}</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                바로 가기
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="text-lg font-bold">Modern Calculator</div>
            <div className="flex items-center space-x-4">
              <input
                type="search"
                placeholder="계산기 이름으로 검색하세요"
                className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
              />
              <nav>
                <ul className="flex space-x-4">
                  <li>
                    <a href="#" className="hover:text-blue-500">
                      계산기
                    </a>
                  </li>
                  <li>
                    <Link to="/blog" className="hover:text-blue-500"> {/* Blog 링크 추가 */}
                      블로그
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basic" element={<BasicCalculator />} />
          <Route path="/age-calculator" element={<AgeCalculator />} />
          <Route path="/korean-age-calculator" element={<KoreanAgeCalculator />} />
          <Route path="/birth-year-calculator" element={<BirthYearCalculator />} />
          <Route path="/exam-year-calculator" element={<ExamYearCalculator />} />
          <Route path="/retirement-age-calculator" element={<RetirementAgeCalculator />} />
          <Route path="/life-expectancy-calculator" element={<LifeExpectancyCalculator />} />
          <Route path="/blog" element={<Blog />} /> {/* Blog 라우트 추가 */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
