export const MockupDemo = () => {
  const features = [
    { icon: "📍", title: "GPS ULTRA DETALHADO", desc: "Localização em tempo real" },
    { icon: "📹", title: "CÂMERAS REMOTAS", desc: "Acesso total às câmeras" },
    { icon: "🎤", title: "MICROFONE AMBIENTE", desc: "Escuta 24/7 discreta" },
    { icon: "💬", title: "MENSAGENS INTERCEPTADAS", desc: "WhatsApp, Telegram, SMS" },
    { icon: "📊", title: "LOGS COMPLETOS", desc: "Histórico de atividades" },
    { icon: "🎯", title: "MÚLTIPLOS ALVOS", desc: "Até 6 dispositivos" }
  ]

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-impact text-white mb-4">
            DASHBOARD DE <span className="text-lime-400">CONTROLE TOTAL</span>
          </h2>
          <p className="text-xl text-white/80">
            Interface profissional para espionagem avançada
          </p>
        </div>

        {/* Mockup Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-dark p-6 rounded-2xl hover-scale border border-white/10 hover:border-lime-400/50 transition-all duration-300"
            >
              <div className="text-center space-y-4">
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-lime-400 text-lg">{feature.title}</h3>
                <p className="text-white/70">{feature.desc}</p>
                <div className="w-full h-2 bg-lime-500/20 rounded-full">
                  <div className="w-full h-full bg-gradient-to-r from-lime-500 to-cyan-500 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How it Works */}
        <div className="mt-20 text-center">
          <div className="glass-dark p-8 rounded-2xl border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">COMO FUNCIONA?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="text-4xl">📄</div>
                <h4 className="font-bold text-white">1. ENVIE PDF</h4>
                <p className="text-white/70">Arquivo infectado via WhatsApp</p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl">📱</div>
                <h4 className="font-bold text-white">2. INFECTA DISPOSITIVO</h4>
                <p className="text-white/70">Instalação invisível e silenciosa</p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl">👁️</div>
                <h4 className="font-bold text-white">3. MONITORE TUDO</h4>
                <p className="text-white/70">Acesso total online 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}