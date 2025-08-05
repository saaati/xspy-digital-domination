import { Button } from "@/components/ui/button"

export const AggressiveHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-lime-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="text-center space-y-8 max-w-4xl relative z-10">
        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="text-explosive text-lime-400 neon-glow">
            INFECTE QUALQUER
          </h1>
          <h1 className="text-explosive text-cyan-400 neon-glow">
            DISPOSITIVO VIA PDF
          </h1>
        </div>

        {/* Subheading */}
        <p className="text-impact text-white/90 max-w-2xl mx-auto">
          🔥 CONTROLE TOTAL • ESPIONAGEM AVANÇADA • ACESSO REMOTO 🔥
        </p>

        {/* Power Statement */}
        <div className="bg-gradient-to-r from-lime-500/10 to-cyan-500/10 border border-lime-500/30 rounded-2xl p-6 glass-dark">
          <p className="text-xl font-bold text-white">
            Monitore <span className="text-lime-400">TUDO</span> • 
            Veja <span className="text-cyan-400">TUDO</span> • 
            Controle <span className="text-red-400">TUDO</span>
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-6">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-lime-500 to-cyan-500 text-black font-black text-xl px-12 py-6 h-auto rounded-xl pulse-glow hover-scale border-2 border-lime-400/50"
            onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            🚀 INFECTAR AGORA - GARANTIR ACESSO
          </Button>
        </div>

        {/* Urgency */}
        <div className="bg-red-500/20 border border-red-500 rounded-xl p-4 animate-pulse">
          <p className="text-red-400 font-bold text-lg">
            ⚠️ APENAS 47 VAGAS RESTANTES HOJE!
          </p>
        </div>
      </div>
    </section>
  )
}