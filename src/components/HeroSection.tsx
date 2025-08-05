import { ButtonTech } from "@/components/ui/button-tech"
import { Card } from "@/components/ui/card"

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-electric-purple/5" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-electric-purple rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-cyber-blue rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-plasma-pink rounded-full animate-pulse delay-700" />
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-neon-green rounded-full animate-pulse delay-1000" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8">
          {/* Logo/Title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-black bg-gradient-primary bg-clip-text text-transparent animate-pulse-glow">
              XSPY
            </h1>
            <div className="h-1 w-32 bg-gradient-tech mx-auto rounded-full shadow-glow-accent" />
          </div>
          
          {/* Subtitle */}
          <div className="max-w-4xl space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground">
              🔥 O Poder Definitivo em{" "}
              <span className="bg-gradient-secondary bg-clip-text text-transparent">
                Espionagem Digital
              </span>
              ! 🔥
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Você sempre quis controlar o jogo e ter acesso a um sistema avançado de espionagem digital?
              Agora é sua chance de dominar a tecnologia de monitoramento mais estilosa, realista e funcional do mercado!
            </p>
          </div>
          
          {/* Main CTA */}
          <div className="space-y-6">
            <ButtonTech 
              variant="plasma" 
              size="xl"
              className="text-lg px-12 py-6"
              onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              🚀 DOMINAR AGORA
            </ButtonTech>
            
            <p className="text-sm text-warning-orange font-semibold animate-pulse">
              ⚠️ Vagas Limitadas — Garanta Seu Plano Antes que Acabem!
            </p>
          </div>
          
          {/* Tech Cards Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl">
            <Card className="p-6 bg-card/50 border-electric-purple/30 hover:shadow-glow-primary transition-all duration-300 hover:scale-105">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto flex items-center justify-center">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="font-bold text-foreground">GPS Ultra Detalhado</h3>
                <p className="text-sm text-muted-foreground">Localização precisa em tempo real</p>
              </div>
            </Card>
            
            <Card className="p-6 bg-card/50 border-cyber-blue/30 hover:shadow-glow-secondary transition-all duration-300 hover:scale-105">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg mx-auto flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="font-bold text-foreground">8 Painéis Poderosos</h3>
                <p className="text-sm text-muted-foreground">Monitoramento completo e avançado</p>
              </div>
            </Card>
            
            <Card className="p-6 bg-card/50 border-plasma-pink/30 hover:shadow-glow-accent transition-all duration-300 hover:scale-105">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-gradient-tech rounded-lg mx-auto flex items-center justify-center">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="font-bold text-foreground">Vírus Indetectável</h3>
                <p className="text-sm text-muted-foreground">Segurança e discrição total</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}