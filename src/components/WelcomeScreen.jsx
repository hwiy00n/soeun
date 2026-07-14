import React, { useState, useRef } from 'react'

function WelcomeScreen({ onAccept }) {
  const [noBtnPos, setNoBtnPos] = useState({ x: 0, y: 0 })
  const [isMoved, setIsMoved] = useState(false)
  const containerRef = useRef(null)

  // '아니오' 버튼이 튕겨나가는 효과
  const handleRunAway = (e) => {
    if (e) {
      e.preventDefault();
    }
    if (!containerRef.current) return

    const btnWidth = 110 // 버튼 가로 크기
    const btnHeight = 48 // 버튼 세로 크기

    // 바탕화면 전체 영역(부모 컨테이너)의 실제 가로/세로 크기 획득
    const rect = containerRef.current.getBoundingClientRect()
    const containerWidth = rect.width
    const containerHeight = rect.height

    // 테두리 밖으로 안 나가게 안전 마진 설정 (화면 테두리 안쪽 5% 영역 여백 보장)
    const marginX = Math.max(30, Math.floor(containerWidth * 0.08))
    const marginY = Math.max(30, Math.floor(containerHeight * 0.08))

    // 도망갈 수 있는 좌표 한계 계산
    const minX = marginX
    const maxX = containerWidth - btnWidth - marginX
    const minY = marginY
    const maxY = containerHeight - btnHeight - marginY

    // 안전 범위 내에서 랜덤 좌표 추출
    const randomX = minX < maxX ? Math.floor(minX + Math.random() * (maxX - minX)) : minX
    const randomY = minY < maxY ? Math.floor(minY + Math.random() * (maxY - minY)) : minY

    setNoBtnPos({ x: randomX, y: randomY })
    setIsMoved(true)
  }

  // absolute 스타일 설정
  const noBtnStyle = isMoved
    ? {
      position: 'absolute',
      left: `${noBtnPos.x}px`,
      top: `${noBtnPos.y}px`,
      zIndex: 9999,
      transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      margin: 0,
    }
    : {}

  return (
    <div
      className="welcome-container"
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      {/* 중앙 질문 카드 */}
      <div className="glass-card">
        <div className="heart-icon" style={{ fontSize: '2.5rem', animation: 'heartbeat 2s infinite ease-in-out' }}>
          💌
        </div>
        <h1 className="title-text">
          오랜만에 휘윤님이 보내신 편지를<br />읽어보시렵니까?
        </h1>
        <div className="btn-container">
          <button className="btn btn-yes" onClick={onAccept}>
            예
          </button>

          {/* 움직이기 전에는 얌전히 원래 카드 내에 버튼 위치함 */}
          {!isMoved && (
            <button
              className="btn btn-no"
              onMouseEnter={handleRunAway}
              onTouchStart={handleRunAway}
              onClick={handleRunAway}
            >
              아니오
            </button>
          )}
        </div>
      </div>

      {/* 움직이기 시작하면 카드의 transform(애니메이션)에 갇히지 않도록 카드 외부 절대좌표 영역에 렌더링 */}
      {isMoved && (
        <button
          className="btn btn-no"
          style={noBtnStyle}
          onMouseEnter={handleRunAway}
          onTouchStart={handleRunAway}
          onClick={handleRunAway}
        >
          아니오
        </button>
      )}
    </div>
  )
}

export default WelcomeScreen
