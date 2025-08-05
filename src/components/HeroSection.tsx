import { ButtonTech } from "@/components/ui/button-tech"
import { Card } from "@/components/ui/card"

export const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Clean Background with Subtle Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-electric-teal/5 rounded-full blur-3xl animate-float delay-1000" />
      </div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8 md:space-y-12">
          {/* Logo/Title - Mobile First */}
          <div className="space-y-4">
            <h1 className="text-responsive-xl font-tech font-black bg-gradient-primary bg-clip-text text-transparent">
              XSPY
            </h1>
            <div className="h-1 w-24 md:w-32 bg-gradient-tech mx-auto rounded-full shadow-glow-accent" />
          </div>
          
          {/* Subtitle - Clean Typography */}
          <div className="max-w-4xl space-y-6">
            <h2 className="text-responsive-lg font-tech font-bold text-foreground">
              🔥 O Poder Definitivo em{" "}
              <span className="bg-gradient-secondary bg-clip-text text-transparent">
                Espionagem Digital
              </span>
              ! 🔥
            </h2>
            <p className="text-responsive-md text-muted-foreground max-w-3xl mx-auto leading-relaxed font-mono font-light">
              Você sempre quis controlar o jogo e ter acesso a um sistema avançado de espionagem digital?
              Agora é sua chance de dominar a tecnologia de monitoramento mais estilosa, realista e funcional do mercado!
            </p>
          </div>
          
          {/* Main CTA - Large & Accessible */}
          <div className="space-y-6">
            <ButtonTech 
              variant="tech" 
              size="xl"
              className="font-tech font-bold min-w-[280px]"
              onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              🚀 DOMINAR AGORA
            </ButtonTech>
            
            <p className="text-sm text-warning-amber font-tech font-medium animate-pulse">
              ⚠️ Vagas Limitadas — Garanta Seu Plano Antes que Acabem!
            </p>
          </div>
          
          {/* Tech Cards Preview - Clean Design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mt-16 max-w-4xl w-full">
            <div className="glass-card p-6 hover:shadow-glow-primary transition-all duration-300 hover:scale-105 border-cyber-cyan/20">
              <div className="text-center space-y-4">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl mx-auto flex items-center justify-center shadow-glow-primary">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="font-tech font-bold text-foreground">GPS Ultra Detalhado</h3>
                <p className="text-sm text-muted-foreground font-mono">Localização precisa em tempo real</p>
              </div>
            </div>
            
            <div className="glass-card p-6 hover:shadow-glow-secondary transition-all duration-300 hover:scale-105 border-electric-teal/20">
              <div className="text-center space-y-4">
                <div className="w-14 h-14 bg-gradient-secondary rounded-xl mx-auto flex items-center justify-center shadow-glow-secondary">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="font-tech font-bold text-foreground">8 Painéis Poderosos</h3>
                <p className="text-sm text-muted-foreground font-mono">Monitoramento completo e avançado</p>
              </div>
            </div>
            
            <div className="glass-card p-6 hover:shadow-glow-accent transition-all duration-300 hover:scale-105 border-neon-aqua/20">
              <div className="text-center space-y-4">
                <div className="w-14 h-14 bg-gradient-tech rounded-xl mx-auto flex items-center justify-center shadow-glow-accent">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="font-tech font-bold text-foreground">Vírus Indetectável</h3>
                <p className="text-sm text-muted-foreground font-mono">Segurança e discrição total</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}