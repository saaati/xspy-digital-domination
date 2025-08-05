import { Card } from "@/components/ui/card"

export const DisclaimerSection = () => {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-4xl mx-auto p-8 bg-card/30 border-warning-orange/30 shadow-lg">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3">
              <span className="text-3xl">🔐</span>
              <h2 className="text-2xl font-bold text-warning-orange">Aviso Importante</h2>
            </div>
            
            <div className="space-y-4 text-left max-w-3xl mx-auto">
              <div className="p-4 bg-warning-orange/10 border border-warning-orange/30 rounded-lg">
                <p className="text-foreground font-semibold text-center">
                  XSPY é uma aplicação educacional e demonstrativa com dados simulados.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-neon-green">✓</span>
                    <span>Interface educacional e demonstrativa</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-neon-green">✓</span>
                    <span>Dados completamente simulados</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-neon-green">✓</span>
                    <span>Finalidade educativa e de demonstração</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-destructive">✗</span>
                    <span>Não realiza espionagem real</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-destructive">✗</span>
                    <span>Não coleta informações verdadeiras</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-destructive">✗</span>
                    <span>Não violenta privacidade real</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center pt-4">
                <p className="text-foreground font-semibold">
                  Use com responsabilidade e para fins educacionais.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}