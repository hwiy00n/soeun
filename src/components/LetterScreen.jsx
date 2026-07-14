import React, { useState } from 'react'
import futureImg from '../assets/future.jpg'

function LetterScreen({ onBack }) {
  const [isOpen, setIsOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showFuture, setShowFuture] = useState(false)

  // 편지 봉투 클릭 시 열림 상태로 전환하고 잠시 후 모달을 띄움
  const handleOpenEnvelope = () => {
    if (isOpen) return
    setIsOpen(true)
    setTimeout(() => {
      setShowModal(true)
    }, 1100) // 봉투가 완전히 열리고 편지가 올라오는 애니메이션 이후 모달 띄우기
  }

  // 휘윤님이 전할 편지 내용
  const letterText = `To 쏘쏘쏘은,

으하하 소으밍 안뇽~! 소으밍이 그동안 계속 편지 써달라고 노래를 불렀는데 이제야 써준다는! 오랜만에 각 잡고 편지 쓸려니 좀 어색하네잉 ㅋ

벌써 우리 만난 지 4년이 다 돼가는데, 소으니를 위해 내 전공을 발휘해 본 적이 한 번도 없는 거 같애서 좀 색다르게 준비해봤는데 어때, 감동이지? 이거 만드는데 꽤나 힘들었다잉 ㅋ

음 우선 요즘 내 제일 큰 걱정은 소은이가 매일 일 끝나구 지쳐서 삶에 의욕도 안 나구 힘들어 보여서 많이 놀러도 다녀주고 싶고 챙겨도 주고 싶은데, 소은이나 나나 미래를 걱정하느라 바빠서 그러지 못하고 있는게 제일 큰 걱정이랄까 

그래서 내 목표는 언능 취직해서 쏘으밍 호강시켜주는 것임. 으하하
꼭 행복하게 해줄게~ (오빠잖아ㅎ)

지금은 지치구 힘들어도 우리가 서로 버팀목이 되면서 응원해주며 지내다 보면 금방 행복할 날이 올거니 너무 걱정은 말구~

이제는 서로에 대해 너무 많은 걸 알게 돼서 소은이 표정만 봐도 오늘은 기분 좋아보이네, 힘들어보이네가 다 느껴진달까 
이젠 진짜 둘도 없는 친구나 가족 같으면서도, 한편으로는 가까울수록 조금 더 조심스럽게 대해야 한다는 걸 많이 느끼는 요즘이얌

평소에 편하게 장난치다가도 갑자기 투닥스러운 상황도 자주 오는 거 같고 으하하 그러므로 나는 소으니 상처받지 않게 내가 더 더 노력하도록 하지

그리고 항상 고마워

소은이는 항상 내 편이 돼주고 별거 아닌 일에도 같이 웃어주고, 내 투정도 받아주는 사람이 쏘으밍이라서 참 다행이라는 생각을 자주 해
(안정형 여친)

나도 완벽한 사람은 아니라 가끔은 서툴고, 괜히 말 한마디로 속상하게 만들 때도 있겠지만 그럴 때마다 그냥 넘기지 않고 더 좋은 사람이 되려고 노력할게

앞으로도 지금처럼 서로 응원해 주고, 힘들 땐 기대고, 좋은 일은 누구보다 크게 같이 웃어주는 그런 서로가 돼자

시간이 더 지나도 "아, 이 사람이랑 함께해서 참 다행이다."라는 생각이 계속 들게 해줄게 으하하

그리고 한 가지 약속하자면

내가 취직하고나면 맛있는 것두 많이 사주고, 좋은 곳도 많이 데려가주고, 소은이 하고 싶은 거 뭐든 다 해주도록 할게, 지금은 조금 바쁘고 힘들어도 나중에 "그때 고생하길 잘했다."라고 웃으면서 이야기할 수 있게 내가 더 열심히 살아볼게

항상 내 여자친구여서 고맙고, 앞으로도 오래오래 내 옆에 있어줘

사랑해 쏘으밍 하트 S2

- 쏘으밍을 가장 사랑하는 휘윤이가 -`

  return (
    <div className="letter-screen">
      <div className="glass-card" style={{ maxWidth: '450px', padding: '2.5rem 1.5rem 1.5rem', gap: '1.2rem' }}>
        {/* 안내 멘트 */}
        {!isOpen && (
          <p style={{
            fontSize: '1.1rem',
            color: '#e04d6e',
            fontWeight: '700',
            animation: 'heartbeat 2s infinite ease-in-out',
            margin: '0 0 0.5rem 0'
          }}>
            편지 봉투를 꾹 눌러봐! 💌
          </p>
        )}

        {/* 3D 편지 봉투 */}
        <div
          className={`envelope-wrapper ${isOpen ? 'open' : ''}`}
          onClick={handleOpenEnvelope}
        >
          {/* 하트 씰링 */}
          <div className="heart-seal"></div>

          {/* 봉투 안에서 살짝 솟아오르는 더미 편지지 (시각 효과용) */}
          <div className="letter-paper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ fontSize: '2rem', animation: 'heartbeat 1.5s infinite' }}>💝</span>
          </div>
        </div>

        {/* 열기 전에 돌아갈 수 있는 뒤로가기 버튼 */}
        {!isOpen && (
          <button
            className="back-link"
            onClick={onBack}
            style={{
              background: 'none',
              border: 'none',
              color: '#8c7e81',
              textDecoration: 'underline',
              cursor: 'pointer',
              fontSize: '0.9rem',
              marginTop: '1rem',
              fontFamily: 'inherit'
            }}
          >
            돌아가기
          </button>
        )}
      </div>

      {/* 화면 전체 딤 레이어 */}
      <div className={`letter-dim-overlay ${showModal || showFuture ? 'active' : ''}`}></div>

      {/* 화면 정중앙에 고정되어 나타나는 실제 모달 편지지 */}
      <div className={`letter-paper-modal ${showModal && !showFuture ? 'active' : ''}`}>
        <h2 className="letter-title">To. 사랑하는 소은이에게 💖</h2>
        <div className="letter-text">
          {letterText}

          {/* 미래 보기 제안 섹션 */}
          <div className="future-prompt-section" style={{
            marginTop: '2.5rem',
            padding: '1.5rem 0 0.5rem',
            borderTop: '2px dashed #ffccd5',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.8rem'
          }}>
            <p style={{
              fontFamily: 'var(--font-romantic)',
              fontSize: '1rem',
              fontWeight: '700',
              color: '#e04d6e',
              wordBreak: 'keep-all'
            }}>
              우리의 미래를 확인해보시겠습니까?
            </p>
            <button
              className="btn"
              style={{
                background: 'linear-gradient(135deg, #ff6b8b, #ff8da6)',
                color: '#fff',
                padding: '0.6rem 2.2rem',
                borderRadius: '50px',
                border: 'none',
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: '1rem',
                fontFamily: 'var(--font-romantic)',
                boxShadow: '0 4px 10px rgba(255, 107, 139, 0.3)',
                animation: 'heartbeat 2s infinite ease-in-out'
              }}
              onClick={() => {
                setShowFuture(true)
              }}
            >
              확인
            </button>
          </div>
        </div>

        <button
          className="btn btn-close"
          style={{ opacity: 0.6, marginTop: '0.8rem', background: '#8c7e81', fontSize: '0.85rem', padding: '0.4rem 1.2rem' }}
          onClick={() => {
            setShowModal(false)
            setIsOpen(false)
            onBack()
          }}
        >
          편지 닫기
        </button>
      </div>

      {/* 미래 확인 모달 */}
      <div className={`future-modal ${showFuture ? 'active' : ''}`}>
        <img src={futureImg} alt="우리의 미래" className="future-image" />
        <p className="future-text">미래를 스포당하셨습니다. 🤵👰💕</p>

        <button
          className="btn"
          style={{
            marginTop: '1.2rem',
            padding: '0.6rem 2rem',
            background: 'var(--primary)',
            color: '#fff',
            borderRadius: '50px',
            border: 'none',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontFamily: 'var(--font-romantic)',
            boxShadow: '0 4px 10px rgba(255, 107, 139, 0.25)'
          }}
          onClick={() => {
            setShowFuture(false)
            setShowModal(false)
            setIsOpen(false)
            onBack()
          }}
        >
          처음으로 돌아가기
        </button>
      </div>
    </div>
  )
}

export default LetterScreen
