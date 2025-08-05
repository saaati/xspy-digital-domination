import { Button } from "@/components/ui/button"

export const FixedCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/90 backdrop-blur-lg border-t border-lime-500/30">
      <div className="max-w-sm mx-auto">
        <Button
          className="w-full bg-gradient-to-r from-lime-500 to-cyan-500 text-black font-black text-lg py-4 h-auto rounded-xl pulse-glow hover-scale"
          onClick={() => window.open('https://www.asaas.com/c/s7do2fes7qqj41fn', '_blank')}
        >
          🚀 INFECTAR AGORA
        </Button>
      </div>
    </div>
  )
}