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
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-electric-purple/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-6xl font-black bg-gradient-secondary bg-clip-text text-transparent">
            🚀 O que o XSPY entrega para você?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Monitoramento FULL com 8 painéis poderosos e tecnologia de ponta
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 border-border/50 hover:border-electric-purple/50 transition-all duration-500 hover:scale-105 hover:shadow-glow-primary group relative overflow-hidden"
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" 
                   style={{ backgroundImage: `linear-gradient(135deg, hsl(var(--electric-purple)), hsl(var(--cyber-blue)))` }} />
              
              <div className="relative z-10 space-y-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center text-3xl shadow-lg`}>
                  {feature.icon}
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-electric-purple transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="inline-block p-6 bg-card/30 border-warning-orange/30 shadow-lg">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-warning-orange">📎 Como Funciona?</h3>
              <p className="text-muted-foreground max-w-2xl">
                Basta enviar um arquivo PDF de sua escolha, que ele é recriado com um vírus indetectável — 
                podendo ser enviado por WhatsApp e e-mail.
              </p>
              <p className="text-sm text-foreground font-semibold">
                Vigie sua esposa, marido, filhos, funcionários — com total segurança e discrição.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}