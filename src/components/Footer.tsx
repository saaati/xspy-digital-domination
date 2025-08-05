export const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-to-t from-cyber-cyan/5 to-background border-t border-cyber-cyan/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          {/* Logo */}
          <div className="space-y-2">
            <h3 className="text-3xl font-black bg-gradient-primary bg-clip-text text-transparent">
              XSPY
            </h3>
            <div className="h-0.5 w-16 bg-gradient-tech mx-auto rounded-full" />
          </div>
          
          {/* Description */}
          <p className="text-muted-foreground max-w-2xl mx-auto">
            O sistema de espionagem digital mais avançado e realista para fins educacionais e demonstrativos.
          </p>
          
          {/* Tech Badges */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-3 py-1 bg-electric-purple/10 border border-electric-purple/30 rounded-full text-xs text-electric-purple">
              Sistema Educacional
            </div>
            <div className="px-3 py-1 bg-cyber-blue/10 border border-cyber-blue/30 rounded-full text-xs text-cyber-blue">
              Interface Futurista
            </div>
            <div className="px-3 py-1 bg-plasma-pink/10 border border-plasma-pink/30 rounded-full text-xs text-plasma-pink">
              Dados Simulados
            </div>
          </div>
          
          {/* Copyright */}
          <div className="pt-6 border-t border-electric-purple/10">
            <p className="text-sm text-muted-foreground">
              © 2024 XSPY. Todos os direitos reservados. Desenvolvido para fins educacionais.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}