import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const PoliticasPrivacidade = () => {
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
            Políticas de Privacidade e Reembolso
          </h1>
          <p className="text-white/70">
            Confira nossas políticas para uso do XSPY
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
              </ul>
              <p>
                <strong>Processamento:</strong> O reembolso será processado em até 5 dias úteis após aprovação da solicitação.
              </p>
            </div>
          </section>

          {/* Política de Privacidade */}
          <section className="glass-dark p-8 rounded-2xl border border-white/20">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">
              🛡️ Política de Privacidade
            </h2>
            <div className="space-y-4 text-white/80">
              <p>
                <strong>Coleta de Dados:</strong> Coletamos apenas informações necessárias para o funcionamento do serviço, incluindo dados de cadastro e uso da plataforma.
              </p>
              <p>
                <strong>Uso dos Dados:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fornecimento e melhoria dos serviços</li>
                <li>Comunicação com usuários</li>
                <li>Suporte técnico</li>
                <li>Cumprimento de obrigações legais</li>
              </ul>
              <p>
                <strong>Proteção:</strong> Utilizamos medidas de segurança adequadas para proteger seus dados pessoais contra acesso não autorizado.
              </p>
              <p>
                <strong>Compartilhamento:</strong> Não compartilhamos seus dados com terceiros, exceto quando exigido por lei.
              </p>
            </div>
          </section>

          {/* Termos de Uso */}
          <section className="glass-dark p-8 rounded-2xl border border-white/20">
            <h2 className="text-2xl font-bold text-purple-400 mb-6">
              📋 Termos de Uso
            </h2>
            <div className="space-y-4 text-white/80">
              <p>
                <strong>Finalidade Educacional:</strong> O XSPY é destinado exclusivamente para fins educacionais e demonstrativos de tecnologias de monitoramento.
              </p>
              <p>
                <strong>Responsabilidade do Usuário:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Usar o sistema de forma ética e legal</li>
                <li>Não utilizar para fins maliciosos</li>
                <li>Respeitar a privacidade de terceiros</li>
                <li>Cumprir todas as leis aplicáveis</li>
              </ul>
              <p>
                <strong>Limitações:</strong> O uso inadequado pode resultar no cancelamento imediato do acesso sem direito a reembolso.
              </p>
            </div>
          </section>

          {/* Contato */}
          <section className="glass-dark p-8 rounded-2xl border border-white/20">
            <h2 className="text-2xl font-bold text-orange-400 mb-6">
              📞 Contato
            </h2>
            <div className="space-y-4 text-white/80">
              <p>
                Para dúvidas sobre estas políticas ou solicitações de reembolso, entre em contato através do nosso suporte via chat na plataforma.
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

export default PoliticasPrivacidade