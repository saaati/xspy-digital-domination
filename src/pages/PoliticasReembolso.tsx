import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const PoliticasReembolso = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-dark-background text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Button 
            variant="outline" 
            onClick={() => navigate(-1)}
            className="mb-8 bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            ← Voltar
          </Button>
          <h1 className="text-4xl font-black text-white mb-4">
            Políticas de Reembolso
          </h1>
          <p className="text-white/70">
            Confira nossa política de reembolso do XSPY
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Política de Reembolso */}
          <section className="glass-dark p-8 rounded-2xl border border-white/20">
            <h2 className="text-2xl font-bold text-lime-400 mb-6">
              🔄 Política de Reembolso
            </h2>
            <div className="space-y-4 text-white/80">
              <p>
                <strong>Prazo para Reembolso:</strong> Você tem até 7 dias corridos após a compra para solicitar o reembolso, desde que não tenha utilizado mais de 20% dos recursos disponíveis.
              </p>
              <p>
                <strong>Condições para Reembolso:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Solicitação dentro do prazo de 7 dias</li>
                <li>Uso limitado a 20% dos recursos</li>
                <li>Motivo justificado para o cancelamento</li>
                <li>Conta em situação regular</li>
                <li>Produto não deve ter sido totalmente utilizado</li>
              </ul>
              <p>
                <strong>Processamento:</strong> O reembolso será processado em até 5 dias úteis após aprovação da solicitação.
              </p>
              <p>
                <strong>Forma de Reembolso:</strong> O valor será estornado na mesma forma de pagamento utilizada na compra original.
              </p>
            </div>
          </section>

          {/* Exceções */}
          <section className="glass-dark p-8 rounded-2xl border border-white/20">
            <h2 className="text-2xl font-bold text-red-400 mb-6">
              ❌ Exceções ao Reembolso
            </h2>
            <div className="space-y-4 text-white/80">
              <p>
                <strong>Não haverá reembolso nos seguintes casos:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Uso superior a 20% dos recursos disponíveis</li>
                <li>Solicitação após o prazo de 7 dias</li>
                <li>Violação dos termos de uso</li>
                <li>Uso inadequado ou malicioso do sistema</li>
                <li>Tentativa de revenda ou compartilhamento de acesso</li>
              </ul>
            </div>
          </section>

          {/* Como Solicitar */}
          <section className="glass-dark p-8 rounded-2xl border border-white/20">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">
              📝 Como Solicitar Reembolso
            </h2>
            <div className="space-y-4 text-white/80">
              <p>
                <strong>Passo a passo:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Entre em contato através do suporte via chat na plataforma</li>
                <li>Informe o motivo da solicitação de reembolso</li>
                <li>Forneça os dados da compra (data, valor, forma de pagamento)</li>
                <li>Aguarde a análise da solicitação</li>
                <li>Receba a confirmação e processamento do reembolso</li>
              </ol>
              <p className="mt-4">
                <strong>Tempo de resposta:</strong> Analisamos todas as solicitações em até 48 horas.
              </p>
            </div>
          </section>

          {/* Contato */}
          <section className="glass-dark p-8 rounded-2xl border border-white/20">
            <h2 className="text-2xl font-bold text-orange-400 mb-6">
              📞 Contato para Reembolso
            </h2>
            <div className="space-y-4 text-white/80">
              <p>
                Para solicitar reembolso, entre em contato através do nosso suporte via chat na plataforma ou envie um email detalhando sua solicitação.
              </p>
              <p className="text-sm text-white/60">
                <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
              </p>
            </div>
          </section>
        </div>

        {/* Footer Button */}
        <div className="text-center mt-12">
          <Button 
            className="bg-gradient-to-r from-lime-500 to-green-500 text-black font-bold px-8 py-3"
            onClick={() => navigate('/')}
          >
            Voltar ao Início
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PoliticasReembolso