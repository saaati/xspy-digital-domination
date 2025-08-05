import { Card } from "@/components/ui/card"

export const FeaturesSection = () => {
  const features = [
    {
      icon: "📍",
      title: "Localização GPS Ultra Detalhada",
      description: "Rastreamento preciso em tempo real com histórico completo de movimentação",
      gradient: "from-electric-purple to-plasma-pink"
    },
    {
      icon: "📹",
      title: "Câmeras de Segurança",
      description: "Acesso remoto às câmeras do dispositivo com gravação automática",
      gradient: "from-cyber-blue to-neon-green"
    },
    {
      icon: "💬",
      title: "Mensagens Interceptadas",
      description: "Monitoramento completo de WhatsApp, Telegram, SMS e redes sociais",
      gradient: "from-plasma-pink to-warning-orange"
    },
    {
      icon: "🎤",
      title: "Microfone Ambiente",
      description: "Escuta ambiental discreta com gravação de alta qualidade",
      gradient: "from-neon-green to-cyber-blue"
    },
    {
      icon: "📊",
      title: "Logs Completos",
      description: "Histórico detalhado de todas as atividades e aplicativos utilizados",
      gradient: "from-warning-orange to-electric-purple"
    },
    {
      icon: "🎯",
      title: "Lista de Alvos",
      description: "Gerenciamento inteligente de múltiplos dispositivos monitorados",
      gradient: "from-electric-purple to-cyber-blue"
    },
    {
      icon: "📱",
      title: "Interface Moderna",
      description: "Visual futurista com efeitos glow, animações e design responsivo",
      gradient: "from-cyber-blue to-plasma-pink"
    },
    {
      icon: "⚡",
      title: "Controle Total",
      description: "Rapidez, flexibilidade e acesso online via desktop e mobile",
      gradient: "from-plasma-pink to-neon-green"
    }
  ]

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Clean Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-cyber-cyan/3 to-background" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 mb-12 md:mb-20">
          <h2 className="text-responsive-lg font-tech font-black bg-gradient-secondary bg-clip-text text-transparent">
            🚀 O que o XSPY entrega para você?
          </h2>
          <p className="text-responsive-md text-muted-foreground max-w-3xl mx-auto font-mono font-light">
            Monitoramento FULL com 8 painéis poderosos e tecnologia de ponta
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover:border-cyber-cyan/40 transition-all duration-500 hover:scale-105 hover:shadow-glow-primary group relative overflow-hidden"
            >
              {/* Subtle Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-electric-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 space-y-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient.replace('electric-purple', 'cyber-cyan').replace('plasma-pink', 'electric-teal').replace('cyber-blue', 'plasma-blue').replace('neon-green', 'neon-aqua').replace('warning-orange', 'warning-amber')} rounded-xl flex items-center justify-center text-3xl shadow-glow-primary`}>
                  {feature.icon}
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-tech font-bold text-foreground group-hover:text-cyber-cyan transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-mono">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Info - Clean Card */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="glass-card inline-block p-8 border-warning-amber/30 shadow-glow-accent max-w-2xl">
            <div className="space-y-4">
              <h3 className="text-xl font-tech font-bold text-warning-amber">📎 Como Funciona?</h3>
              <p className="text-muted-foreground font-mono leading-relaxed">
                Basta enviar um arquivo PDF de sua escolha, que ele é recriado com um vírus indetectável — 
                podendo ser enviado por WhatsApp e e-mail.
              </p>
              <p className="text-sm text-foreground font-tech font-semibold">
                Vigie sua esposa, marido, filhos, funcionários — com total segurança e discrição.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}