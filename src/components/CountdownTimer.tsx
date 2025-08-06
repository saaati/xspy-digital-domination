import { useState, useEffect } from 'react'

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(0)

  // Function to generate random time between 7-16 minutes (in seconds)
  const getRandomTime = () => {
    const minMinutes = 7
    const maxMinutes = 16
    const randomMinutes = Math.floor(Math.random() * (maxMinutes - minMinutes + 1)) + minMinutes
    return randomMinutes * 60 // Convert to seconds
  }

  // Initialize timer
  useEffect(() => {
    setTimeLeft(getRandomTime())
  }, [])

  // Countdown effect
  useEffect(() => {
    if (timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          // Timer expired, restart with new random time
          return getRandomTime()
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  // Format time to MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 border-2 border-red-500 rounded-2xl p-4 lg:p-6 text-center animate-pulse">
      <h2 className="text-xl lg:text-2xl font-black text-red-400 mb-2">
        ⚠️ ÚLTIMOS ACESSOS DISPONÍVEIS!
      </h2>
      
      <div className="bg-black/40 rounded-xl p-3 lg:p-4 mb-3 border border-red-500/30">
        <div className="text-xs lg:text-sm text-red-300 mb-2 font-semibold">
          ⏰ TEMPO RESTANTE PARA GARANTIR SEU ACESSO:
        </div>
        <div className="text-2xl lg:text-4xl font-black text-white neon-glow">
          <span className="text-red-400">{formatTime(timeLeft)}</span>
        </div>
        <div className="text-xs lg:text-sm text-yellow-300 mt-2 font-bold">
          🔥 APÓS ESTE TEMPO, OS PREÇOS VOLTAM AO NORMAL
        </div>
      </div>

      <p className="text-yellow-300 font-bold text-xs lg:text-sm mb-2">
        💡 PAGAMENTO ÚNICO - Renovação pelo mesmo valor quando vencer
      </p>
      <p className="text-red-300 text-xs lg:text-sm">
        Vagas limitadas - Garante o seu antes que acabe!
      </p>
    </div>
  )
}