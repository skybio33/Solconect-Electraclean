import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Zap, Droplet, Shield, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-slate-900">SOLCONECT</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-slate-600 hover:text-slate-900 font-medium">
              Início
            </Link>
            <Link href="/produtos" className="text-slate-600 hover:text-slate-900 font-medium">
              Produtos
            </Link>
            <Link href="/comparativo" className="text-slate-600 hover:text-slate-900 font-medium">
              Eficiência
            </Link>
            <Link href="/calculadora" className="text-slate-600 hover:text-slate-900 font-medium">
              Calculadora ROI
            </Link>
            <Link href="/contato">
              <Button className="bg-orange-500 hover:bg-orange-600">
                Demonstração Gratuita
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 max-w-7xl mx-auto px-4 py-20 flex items-center justify-between gap-12">
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Limpeza Profissional com <span className="text-orange-500">Performance Europeia</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            FLOWEY® - Soluções de limpeza industrial que reduzem tempo em até 50%, custos em 63% e consumo de água em 40%.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/calculadora">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 w-full sm:w-auto">
                Calcular Economia <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contato">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Agendar Demonstração
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16">
            <div>
              <div className="text-3xl font-bold text-orange-500">50%</div>
              <p className="text-sm text-slate-600 mt-1">Menos tempo de lavagem</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500">63%</div>
              <p className="text-sm text-slate-600 mt-1">Redução de custos</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500">40%</div>
              <p className="text-sm text-slate-600 mt-1">Menos água utilizada</p>
            </div>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="hidden lg:block flex-1">
          <div className="w-full aspect-square bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center border-2 border-orange-200">
            <div className="text-center">
              <Zap className="w-24 h-24 text-orange-500 mx-auto mb-4" />
              <p className="text-slate-600 font-medium">Demonstração Interativa</p>
              <p className="text-sm text-slate-500">Imagens dos produtos FLOWEY</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Por que escolher FLOWEY®?</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Performance</h3>
              <p className="text-slate-300">Redução de até 50% no tempo de lavagem com o Sistema Lança Espuma</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Economia</h3>
              <p className="text-slate-300">Redução de 63% nos custos operacionais por lavagem</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <Droplet className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sustentabilidade</h3>
              <p className="text-slate-300">40-50% menos consumo de água e produtos biodegradáveis</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Segurança</h3>
              <p className="text-slate-300">Produtos não tóxicos, não inflamáveis e certificados NSF</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Pronto para transformar sua limpeza?</h2>
          <p className="text-xl mb-8 text-orange-50">
            Agende uma demonstração gratuita e veja na prática como FLOWEY® pode economizar tempo e dinheiro.
          </p>
          <Link href="/contato">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-slate-100">
              Agendar Demonstração Gratuita <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">S</span>
                  </div>
                  <span className="font-bold text-white">SOLCONECT</span>
                </div>
              <p className="text-sm">Representante da empresa ELECTRACLEAN</p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-white">Início</Link></li>
                <li><Link href="/produtos" className="hover:text-white">Produtos</Link></li>
                <li><Link href="/comparativo" className="hover:text-white">Eficiência</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/calculadora" className="hover:text-white">Calculadora ROI</Link></li>
                <li><Link href="/contato" className="hover:text-white">Contato</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Contato</h4>
              <ul className="space-y-2 text-sm">
                <li>📞 (28) 3521-XXXX</li>
                <li>📧 contato@solconect.com.br</li>
                <li>🌐 www.solconect.com.br</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Empresa</h4>
              <p className="text-sm">Representante da empresa ELECTRACLEAN</p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>&copy; 2025 SOLCONECT. Todos os direitos reservados. | FLOWEY® é marca registrada.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

