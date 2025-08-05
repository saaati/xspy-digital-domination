export const DiscreteFooter = () => {
  return (
    <footer className="py-12 bg-black/50 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <div className="text-3xl font-black text-lime-400">XSPY</div>
        
        <div className="glass-dark p-6 rounded-xl border border-white/10">
          <p className="text-white/60 text-sm leading-relaxed">
            <strong className="text-white">AVISO LEGAL:</strong> XSPY é uma aplicação educacional e demonstrativa. 
            Não realiza espionagem real. Todos os dados são simulados para fins educativos. 
            Use com responsabilidade respeitando a privacidade.
          </p>
        </div>

        <div className="text-white/40 text-xs">
          © 2024 XSPY - Sistema Educacional • Dados Simulados • Uso Responsável
        </div>
      </div>
    </footer>
  )
}