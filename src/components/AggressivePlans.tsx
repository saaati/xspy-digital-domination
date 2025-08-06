import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/CountdownTimer"

export const AggressivePlans = () => {
  const plans = [
    {
      name: "🟢 PLANO INICIAL",
      devices: "1 DISPOSITIVO",
      period: "2 MESES DE ACESSO",
      originalPrice: "R$ 690,00",
      price: "R$ 388,00",
      color: "from-green-500 to-emerald-500",
      glow: "green-500",
      features: [
        "✔️ Monitoramento essencial com acesso rápido",
        "✔️ Compatível com Android",
        "✔️ Instalação via aplicativo direto",
        "✔️ Tecnologia de segurança sem arquivos externos"
      ],
      description: "Ideal para quem precisa de uma solução prática, rápida e sem complicações para monitorar um único dispositivo Android.",
      buttonText: "COMPRAR AGORA",
      link: "https://www.asaas.com/c/fhfuz84psxlqcj66"
    },
    {
      name: "🔵 PLANO INTERMEDIÁRIO",
      devices: "ATÉ 2 DISPOSITIVOS", 
      period: "3 MESES DE ACESSO",
      originalPrice: "R$ 949,00",
      price: "R$ 689,00",
      color: "from-blue-500 to-cyan-500",
      glow: "blue-500",
      inheritedFrom: "✔️ Inclui todos os recursos do Plano Inicial",
      features: [
        "✔️ Compatível com <span class='text-lime-400 font-bold'>ANDROID</span> e <span class='text-cyan-400 font-bold'>IPHONE</span>",
        "✔️ Tecnologia avançada com documentos interativos (.PDF)",
        "✔️ Instalação remota inteligente em até dois dispositivos",
        "✔️ Painel de controle completo com dados em tempo real",
        "✔️ Atendimento via chat incluso"
      ],
      description: "Ideal para quem busca mais flexibilidade, cobertura dupla e recursos de acesso remoto.",
      buttonText: "COMPRAR AGORA",
      link: "https://www.asaas.com/c/jwplviezr8preie4",
      popular: true
    },
    {
      name: "🔴 PLANO AVANÇADO",
      devices: "ATÉ 5 DISPOSITIVOS",
      period: "6 MESES DE ACESSO", 
      originalPrice: "R$ 1.490,00",
      price: "R$ 1.090,00",
      color: "from-red-500 to-pink-500",
      glow: "red-500",
      inheritedFrom: "✔️ Inclui todos os recursos do Plano Intermediário",
      features: [
        "✔️ Tecnologia premium com arquivos dinâmicos (.PDF)",
        "✔️ Desempenho otimizado em servidores dedicados",
        "✔️ Relatórios detalhados e informações em tempo real",
        "✔️ Atualizações automáticas e suporte técnico avançado",
        "✔️ Atendimento prioritário incluso"
      ],
      description: "Ideal para quem precisa de uma solução profissional, robusta e com maior capacidade de monitoramento simultâneo.",
      buttonText: "COMPRAR AGORA",
      link: "https://www.asaas.com/c/s7do2fes7qqj41fn",
      vip: true
    }
  ]

  return (
    <section id="planos" className="py-20 px-4 relative">
      {/* Urgency Banner with Countdown */}
      <div className="max-w-4xl mx-auto mb-12">
        <CountdownTimer />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-impact text-white mb-4">
            ESCOLHA SEU <span className="text-lime-400">PLANO DE DOMINAÇÃO</span>
          </h2>
          <div className="bg-yellow-500/20 border border-yellow-500 rounded-xl p-4 max-w-2xl mx-auto mt-8">
            <p className="text-yellow-300 font-bold text-lg">
              💡 PAGAMENTO ÚNICO - Renovação pelo mesmo valor quando vencer
            </p>
            <p className="text-white/80 text-sm mt-2">
              Sem mensalidades escondidas ou aumentos inesperados
            </p>
          </div>
        </div>

        {/* Plans Grid - Centralizado no Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
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
                <div className="space-y-2 lg:space-y-3 flex-1 text-center">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center gap-2 lg:gap-3">
                      <span 
                        className="text-white/80 text-xs lg:text-sm leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: feature }}
                      />
                    </div>
                  ))}
                </div>

                {/* Description */}
                {plan.description && (
                  <div className="flex-shrink-0 pt-2">
                    <p className="text-white/70 text-xs lg:text-sm leading-relaxed italic border-t border-white/10 pt-3">
                      {plan.description}
                    </p>
                  </div>
                )}

                {/* CTA Button */}
                <div className="flex-shrink-0 mt-auto pt-4">
                  <Button
                    className={`w-full bg-gradient-to-r ${plan.color} text-black font-black text-sm lg:text-base py-4 lg:py-6 h-auto rounded-xl hover-scale`}
                    onClick={() => window.open(plan.link, '_blank')}
                    style={{
                      boxShadow: `0 0 20px ${plan.glow === 'green-500' ? '#10b981' : plan.glow === 'blue-500' ? '#3b82f6' : plan.glow === 'yellow-500' ? '#eab308' : '#ef4444'}/40%`
                    }}
                  >
                    {plan.buttonText || '🚀 GARANTIR ACESSO'}
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