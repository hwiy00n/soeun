import React, { useState, useEffect } from 'react'
import WelcomeScreen from './components/WelcomeScreen'
import LetterScreen from './components/LetterScreen'
import coupleImg from './assets/couple.jpg'

function App() {
  const [screen, setScreen] = useState('welcome') // 'welcome' | 'letter'
  const [hearts, setHearts] = useState([])

  // 하트 파티클 생성 효과 (편지 화면일 때만 활성화)
  useEffect(() => {
    if (screen !== 'letter') {
      setHearts([])
      return
    }

    const interval = setInterval(() => {
      const id = Date.now() + Math.random()
      const left = Math.random() * 100 // 0% ~ 100%
      const duration = 3 + Math.random() * 3 // 3s ~ 6s
      const scale = 0.5 + Math.random() * 0.8 // 0.5 ~ 1.3
      const rotate = Math.random() * 360

      setHearts((prev) => [...prev, { id, left, duration, scale, rotate }])

      // 6초 후 파티클 제거
      setTimeout(() => {
        setHearts((prev) => prev.filter((heart) => heart.id !== id))
      }, 6000)
    }, 450)

    return () => clearInterval(interval)
  }, [screen])

  return (
    <div className="app-outer-container">
      <div className="app-container">
        {/* 배경 이미지 및 블러 오버레이 */}
        <img src={coupleImg} alt="배경" className="background-image" />
        <div className="background-overlay"></div>

        {/* 화면 전환 */}
        {screen === 'welcome' ? (
          <WelcomeScreen onAccept={() => setScreen('letter')} />
        ) : (
          <LetterScreen onBack={() => setScreen('welcome')} />
        )}

        {/* 하트 파티클 렌더링 */}
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="heart-particle"
            style={{
              left: `${heart.left}%`,
              animationDuration: `${heart.duration}s`,
              transform: `rotate(${heart.rotate}deg) scale(${heart.scale})`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
