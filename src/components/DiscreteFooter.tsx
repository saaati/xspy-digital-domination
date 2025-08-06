export const DiscreteFooter = () => {
  return (
    <footer className="py-16 bg-black/50 border-t border-white/10 mt-20 mb-24">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <div className="text-3xl font-black text-lime-400">XSPY</div>
        

        <div className="text-white/40 text-xs">
          © 2025 XSPY - Sistema De Vigilância Avançada
        </div>
        
        <div className="flex justify-center gap-6 mt-4">
          <a 
            href="/planos/politicas-privacidade" 
            className="text-xs text-white/60 hover:text-white/80 transition-colors"
          >
            Políticas de Privacidade
          </a>
          <a 
            href="/planos/politicas-reembolso" 
            className="text-xs text-white/60 hover:text-white/80 transition-colors"
          >
            Políticas de Reembolso
          </a>
        </div>
      </div>
    </footer>
  )
}