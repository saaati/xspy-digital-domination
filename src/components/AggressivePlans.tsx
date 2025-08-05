import { Button } from "@/components/ui/button"

export const AggressivePlans = () => {
  const plans = [
    {
      name: "🟢 INICIAL",
      devices: "1 CELULAR",
      period: "2 MESES DE ACESSO",
      originalPrice: "R$ 690,00",
      price: "R$ 349,00",
      color: "bg-gradient-to-r from-neon-lime to-cyber-cyan",
      features: ["✅ Acesso básico", "✅ Monitoramento leve", "🚫 Sem recursos de invasão com .PDF"],
      link: "https://www.asaas.com/c/fhfuz84psxlqcj66"
    },
    {
      name: "🔵 INTERMEDIÁRIO",
      devices: "2 CELULARES", 
      period: "3 MESES DE ACESSO",
      originalPrice: "R$ 949,00",
      price: "R$ 449,00",
      color: "bg-gradient-to-r from-cyber-cyan to-neon-lime",
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
      color: "bg-gradient-to-r from-gold-vip to-neon-lime",
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
      color: "bg-gradient-to-r from-alert-red to-plasma-purple",
      inheritedFrom: "Todas as funções do Plano Avançado +",
      features: ["🔥 Pacote mais completo e poderoso", "✅ Infecção avançada (PDF + Weblink + Spoofing)", "✅ Acesso instantâneo com servidores dedicados", "✅ Painel com inteligência artificial de análise", "✅ Suporte VIP 24h via WhatsApp", "✅ Relatórios forenses + backups automáticos", "✅ Atualizações gratuitas incluídas", "✅ Assistência técnica remota"],
      link: "https://www.asaas.com/c/s7do2fes7qqj41fn",
      vip: true
    }
  ]

  return (
    <section id="planos" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-cyber-cyan/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-neon-lime/5 rounded-full blur-3xl animate-float delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Urgency Banner */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glass-dark border-2 border-alert-red/50 rounded-2xl p-6 text-center animate-pulse">
            <h2 className="text-2xl font-black text-alert-red mb-2">
              ⚠️ ÚLTIMOS ACESSOS DISPONÍVEIS HOJE!
            </h2>
            <p className="text-muted-foreground">Vagas limitadas - Garante o seu antes que acabe!</p>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-responsive-lg font-tech font-black bg-gradient-primary bg-clip-text text-transparent mb-4">
            ESCOLHA SEU <span className="bg-gradient-secondary bg-clip-text text-transparent">PLANO DE DOMINAÇÃO</span>
          </h2>
        </div>

        {/* Plans Grid - Responsive and aligned */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative glass-dark p-6 lg:p-8 rounded-2xl border-2 transition-all duration-500 hover:scale-105 group flex flex-col h-full ${
                plan.popular 
                  ? "border-cyber-cyan/50 shadow-glow-primary" 
                  : "border-border hover:border-cyber-cyan/50 hover:shadow-glow-primary"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary px-6 py-2 rounded-full text-primary-foreground font-tech font-bold text-sm shadow-glow-primary">
                  MAIS ESCOLHIDO
                </div>
              )}

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-neon-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative z-10 text-center space-y-4 lg:space-y-6 flex-1 flex flex-col">
                {/* Plan Header */}
                <div className="flex-shrink-0">
                  <h3 className="text-xl lg:text-2xl font-tech font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className={`text-3xl lg:text-4xl font-tech font-black ${plan.color} bg-clip-text text-transparent`}>
                    {plan.devices}
                  </div>
                  <p className="text-muted-foreground text-base lg:text-lg font-mono">{plan.period}</p>
                  <div className="mt-4 space-y-1">
                    <p className="text-muted-foreground text-sm line-through">De: {plan.originalPrice}</p>
                    <div className={`text-2xl lg:text-3xl font-tech font-black ${plan.color} bg-clip-text text-transparent`}>
                      Por: {plan.price}
                    </div>
                  </div>
                </div>

                {/* Inherited Features */}
                {plan.inheritedFrom && (
                  <div className="flex-shrink-0">
                    <p className="text-muted-foreground text-xs lg:text-sm font-semibold border-b border-border pb-2 mb-3">
                      {plan.inheritedFrom}
                    </p>
                  </div>
                )}

                {/* Features */}
                <div className="space-y-2 lg:space-y-3 flex-1 text-left">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 lg:gap-3">
                      <div className="w-2 h-2 bg-cyber-cyan rounded-full flex-shrink-0 mt-2" />
                      <span className="text-muted-foreground text-xs lg:text-sm leading-relaxed font-mono">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="flex-shrink-0 mt-auto pt-4">
                  <Button
                    className={`w-full ${plan.color} text-black font-tech font-bold text-base lg:text-lg py-4 lg:py-6 h-auto rounded-xl transition-all duration-300 hover:scale-105 shadow-glow-primary`}
                    onClick={() => window.open(plan.link, '_blank')}
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