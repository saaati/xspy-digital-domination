import { Button } from "@/components/ui/button"

export const AggressivePlans = () => {
  const plans = [
    {
      name: "🟢 INICIAL",
      devices: "1 CELULAR",
      period: "2 MESES DE ACESSO",
      originalPrice: "R$ 690,00",
      price: "R$ 349,00",
      color: "from-green-500 to-emerald-500",
      glow: "green-500",
      features: ["✅ Acesso básico", "✅ Monitoramento leve", "🚫 Sem recursos de invasão com .PDF"],
      link: "https://www.asaas.com/c/fhfuz84psxlqcj66"
    },
    {
      name: "🔵 INTERMEDIÁRIO",
      devices: "2 CELULARES", 
      period: "3 MESES DE ACESSO",
      originalPrice: "R$ 949,00",
      price: "R$ 449,00",
      color: "from-blue-500 to-cyan-500",
      glow: "blue-500",
      inheritedFrom: "Todas as funções do Plano Inicial +",
      features: ["✅ Inclui método de infecção via .PDF", "✅ Acesso completo ao painel de controle", "✅ Suporte padrão via chat"],
      link: "https://www.asaas.com/c/jwplviezr8preie4",
      popular: true
    },
    {
      name: "🟡 AVANÇADO",
      devices: "4 CELULARES",
      period: "6 MESES DE ACESSO", 
      originalPrice: "R$ 1.390,00",
      price: "R$ 690,00",
      color: "from-yellow-500 to-orange-500",
      glow: "yellow-500",
      inheritedFrom: "Todas as funções do Plano Intermediário +",
      features: ["✅ Método completo com .PDF infectável", "✅ Atendimento prioritário", "✅ Servidores robustos — sem delay", "✅ Informações em tempo real", "✅ Relatórios detalhados e atualizações"],
      link: "https://www.asaas.com/c/s7do2fes7qqj41fn"
    },
    {
      name: "🔴 ACESSO VIP TOTAL",
      devices: "8 CELULARES",
      period: "12 MESES DE ACESSO", 
      originalPrice: "R$ 3.490,00",
      price: "R$ 1.690,00",
      color: "from-red-500 to-pink-500",
      glow: "red-500",
      inheritedFrom: "Todas as funções do Plano Avançado +",
      features: ["🔥 Pacote mais completo e poderoso", "✅ Infecção avançada (PDF + Weblink + Spoofing)", "✅ Acesso instantâneo com servidores dedicados", "✅ Painel com inteligência artificial de análise", "✅ Suporte VIP 24h via WhatsApp", "✅ Relatórios forenses + backups automáticos", "✅ Atualizações gratuitas incluídas", "✅ Assistência técnica remota"],
      link: "https://www.asaas.com/c/s7do2fes7qqj41fn",
      vip: true
    }
  ]

  return (
    <section id="planos" className="py-20 px-4 relative">
      {/* Urgency Banner */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 border-2 border-red-500 rounded-2xl p-6 text-center animate-pulse">
          <h2 className="text-2xl font-black text-red-400 mb-2">
            ⚠️ ÚLTIMOS ACESSOS DISPONÍVEIS HOJE!
          </h2>
          <p className="text-red-300">Vagas limitadas - Garante o seu antes que acabe!</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-impact text-white mb-4">
            ESCOLHA SEU <span className="text-lime-400">PLANO DE DOMINAÇÃO</span>
          </h2>
        </div>

        {/* Plans Grid - Melhor para Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative glass-dark p-6 lg:p-8 rounded-2xl border-2 transition-all duration-300 hover-scale flex flex-col h-full ${
                plan.popular 
                  ? "border-lime-500 shadow-2xl shadow-lime-500/20" 
                  : "border-white/20 hover:border-lime-400/50"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-lime-500 to-green-500 text-black font-black px-6 py-2 rounded-full text-sm">
                  MAIS ESCOLHIDO
                </div>
              )}

              <div className="text-center space-y-4 lg:space-y-6 flex-1 flex flex-col">
                {/* Plan Header */}
                <div className="flex-shrink-0">
                  <h3 className="text-xl lg:text-2xl font-black text-white mb-2">{plan.name}</h3>
                  <div className={`text-3xl lg:text-4xl font-black bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                    {plan.devices}
                  </div>
                  <p className="text-white/70 text-base lg:text-lg font-bold">{plan.period}</p>
                  <div className="mt-4">
                    <p className="text-white/60 text-sm line-through">De: {plan.originalPrice}</p>
                    <div className="text-2xl lg:text-3xl font-black text-white">
                      Por: {plan.price}
                    </div>
                  </div>
                </div>

                {/* Inherited Features */}
                {plan.inheritedFrom && (
                  <div className="flex-shrink-0">
                    <p className="text-white/60 text-xs lg:text-sm font-semibold border-b border-white/20 pb-2 mb-3">
                      {plan.inheritedFrom}
                    </p>
                  </div>
                )}

                {/* Features */}
                <div className="space-y-2 lg:space-y-3 flex-1 text-left">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 lg:gap-3">
                      <span className="text-white/80 text-xs lg:text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="flex-shrink-0 mt-auto pt-4">
                  <Button
                    className={`w-full bg-gradient-to-r ${plan.color} text-black font-black text-base lg:text-lg py-4 lg:py-6 h-auto rounded-xl hover-scale`}
                    onClick={() => window.open(plan.link, '_blank')}
                    style={{
                      boxShadow: `0 0 20px ${plan.glow === 'green-500' ? '#10b981' : plan.glow === 'blue-500' ? '#3b82f6' : plan.glow === 'yellow-500' ? '#eab308' : '#ef4444'}/40%`
                    }}
                  >
                    🚀 GARANTIR ACESSO
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}