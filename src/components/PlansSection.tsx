import { ButtonTech } from "@/components/ui/button-tech"
import { Card } from "@/components/ui/card"

export const PlansSection = () => {
  const plans = [
    {
      name: "Plano Inicial",
      icon: "🥉",
      devices: "2 Celulares",
      duration: "3 Meses",
      features: [
        "Acesso a todas as funções básicas",
        "Suporte via chat",
        "Interface completa",
        "Perfeito para testar o XSPY"
      ],
      link: "https://www.asaas.com/c/fhfuz84psxlqcj66",
      buttonText: "Quero começar agora",
      variant: "cyber" as const,
      popular: false
    },
    {
      name: "Plano Intermediário", 
      icon: "🥈",
      devices: "4 Celulares",
      duration: "4 Meses",
      features: [
        "Acesso completo às funções essenciais",
        "Suporte prioritário",
        "Relatórios avançados",
        "Ideal para começar com tudo"
      ],
      link: "https://www.asaas.com/c/jwplviezr8preie4",
      buttonText: "Garanta seu plano agora",
      variant: "neon" as const,
      popular: true
    },
    {
      name: "Pacote VIP COMPLETO",
      icon: "🥇",
      devices: "6 Celulares",
      duration: "12 Meses",
      features: [
        "Atendimento Prioritário VIP",
        "Todas as Funções Liberadas",
        "Suporte 24/7 exclusivo",
        "Atualizações gratuitas",
        "Acesso a recursos beta"
      ],
      link: "https://www.asaas.com/c/s7do2fes7qqj41fn",
      buttonText: "Clique aqui e garanta seu acesso VIP",
      variant: "vip" as const,
      popular: false
    }
  ]

  return (
    <section id="planos" className="py-20 bg-gradient-to-b from-background to-electric-purple/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-electric-purple/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-plasma-pink/5 rounded-full blur-3xl animate-float delay-1000" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-6xl font-black bg-gradient-primary bg-clip-text text-transparent">
            💎 Planos Exclusivos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha o Seu Agora e Assuma o Controle!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative p-8 bg-card/50 transition-all duration-500 hover:scale-105 group overflow-hidden ${
                plan.popular 
                  ? "border-2 border-plasma-pink/50 shadow-glow-accent" 
                  : "border border-electric-purple/30 hover:border-electric-purple/50 hover:shadow-glow-primary"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary px-6 py-2 rounded-full text-black font-bold text-sm shadow-lg">
                  MAIS POPULAR
                </div>
              )}
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-purple/5 to-cyber-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 space-y-6">
                {/* Header */}
                <div className="text-center space-y-3">
                  <div className="text-4xl">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                  <div className="space-y-1">
                    <div className="text-3xl font-black bg-gradient-secondary bg-clip-text text-transparent">
                      {plan.devices}
                    </div>
                    <div className="text-lg text-muted-foreground">
                      + {plan.duration} de Acesso
                    </div>
                  </div>
                </div>
                
                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-electric-purple rounded-full" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <div className="pt-4">
                  <ButtonTech 
                    variant={plan.variant}
                    size="lg"
                    className="w-full text-center"
                    onClick={() => window.open(plan.link, '_blank')}
                  >
                    👉 {plan.buttonText}
                  </ButtonTech>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-6">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              🔐 Entre para o grupo seleto que usa o XSPY
            </h3>
            <p className="text-muted-foreground">
              Não perca tempo! Domine a espionagem digital simulada com estilo e eficiência.
            </p>
          </div>
          
          <ButtonTech 
            variant="plasma" 
            size="xl"
            className="text-xl px-16 py-8"
            onClick={() => window.open('https://www.asaas.com/c/s7do2fes7qqj41fn', '_blank')}
          >
            👑 TORNAR-SE VIP AGORA
          </ButtonTech>
        </div>
      </div>
    </section>
  )
}