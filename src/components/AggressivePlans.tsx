import { Button } from "@/components/ui/button"

export const AggressivePlans = () => {
  const plans = [
    {
      name: "INICIAL",
      devices: "2 CELULARES",
      period: "3 MESES DE ACESSO",
      price: "R$ 449,00",
      renewalPrice: "R$ 314,70",
      color: "from-cyan-500 to-blue-500",
      glow: "cyan-500",
      features: ["Acesso básico", "Suporte chat", "Interface completa", "Renovação 40% mais barata"],
      link: "https://www.asaas.com/c/fhfuz84psxlqcj66"
    },
    {
      name: "INTERMEDIÁRIO",
      devices: "4 CELULARES", 
      period: "3 MESES DE ACESSO",
      price: "R$ 690,00",
      renewalPrice: "R$ 414,00",
      color: "from-lime-500 to-green-500",
      glow: "lime-500",
      features: ["Funções completas", "Suporte prioritário", "Relatórios avançados", "Renovação 40% mais barata"],
      link: "https://www.asaas.com/c/jwplviezr8preie4",
      popular: true
    },
    {
      name: "VIP TOTAL",
      devices: "6 CELULARES",
      period: "3 MESES DE ACESSO", 
      price: "R$ 1.690,00",
      renewalPrice: "R$ 1.014,00",
      color: "from-yellow-500 to-orange-500",
      glow: "yellow-500",
      features: ["ACESSO TOTAL", "Suporte VIP 24/7", "Recursos exclusivos", "Updates gratuitos", "Renovação 40% mais barata"],
      link: "https://www.asaas.com/c/s7do2fes7qqj41fn"
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

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative glass-dark p-8 rounded-2xl border-2 transition-all duration-300 hover-scale ${
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

              <div className="text-center space-y-6">
                {/* Plan Header */}
                <div>
                  <h3 className="text-2xl font-black text-white mb-2">{plan.name}</h3>
                  <div className={`text-4xl font-black bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                    {plan.devices}
                  </div>
                  <p className="text-white/70 text-lg font-bold">{plan.period}</p>
                  <div className="mt-4">
                    <div className={`text-3xl font-black bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                      {plan.price}
                    </div>
                    <p className="text-white/60 text-sm mt-1">
                      Renovação: {plan.renewalPrice} (40% OFF)
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-lime-400 rounded-full" />
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full bg-gradient-to-r ${plan.color} text-black font-black text-lg py-6 h-auto rounded-xl hover-scale`}
                  onClick={() => window.open(plan.link, '_blank')}
                  style={{
                    boxShadow: `0 0 20px hsl(var(--${plan.glow}) / 0.4)`
                  }}
                >
                  🚀 GARANTIR ACESSO - {plan.price}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-black text-2xl px-16 py-8 h-auto rounded-2xl pulse-glow hover-scale"
            onClick={() => window.open('https://www.asaas.com/c/s7do2fes7qqj41fn', '_blank')}
          >
            💀 DOMINAR AGORA - ACESSO VIP TOTAL
          </Button>
        </div>
      </div>
    </section>
  )
}