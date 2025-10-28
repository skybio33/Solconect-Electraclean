import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle } from "lucide-react";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "FLOWEY® Alcalino Concentrado",
      category: "Limpeza Pesada",
      description: "Produto alcalino de alta performance para limpeza industrial pesada",
      benefits: [
        "Remove incrustações minerais",
        "Descontamina óxido",
        "Base vegetal biodegradável",
        "Seguro para operadores"
      ],
      specs: {
        "Concentração": "Produto concentrado",
        "Rendimento": "1:5 a 1:10",
        "pH": "Alcalino (12-13)",
        "Certificação": "NSF Internacional"
      }
    },
    {
      id: 2,
      name: "FLOWEY® Desengraxante",
      category: "Limpeza de Máquinas",
      description: "Desengraxante potente para peças metálicas e máquinas",
      benefits: [
        "Remove graxas e óleos",
        "Não tóxico",
        "Não inflamável",
        "Compatível com metais"
      ],
      specs: {
        "Tipo": "Desengraxante industrial",
        "Rendimento": "1:3 a 1:5",
        "Aplicação": "Imersão ou pulverização",
        "Segurança": "Livre de VOC"
      }
    },
    {
      id: 3,
      name: "FLOWEY® Lança Espuma K",
      category: "Sistema Inovador",
      description: "Sistema patenteado com válvula Venturi para dosagem econômica",
      benefits: [
        "Reduz tempo em até 50%",
        "Dosagem precisa",
        "Compatível com alta pressão",
        "Mangueira de 15 metros"
      ],
      specs: {
        "Sistema": "HP FOAM SYSTEM K",
        "Válvula": "Venturi",
        "Pressão": "2000-3000 PSI",
        "Vazão": "2-3 Gal/min"
      }
    },
    {
      id: 4,
      name: "FLOWEY® Grau Alimentício",
      category: "Segurança Alimentar",
      description: "Produto certificado NSF para ambientes com alimentos",
      benefits: [
        "Certificação NSF A1",
        "Seguro para alimentos",
        "Biodegradável",
        "Sem resíduos tóxicos"
      ],
      specs: {
        "Certificação": "NSF Internacional",
        "Aplicação": "Indústria alimentar",
        "Concentração": "Concentrado",
        "Segurança": "Grau alimentício"
      }
    },
    {
      id: 5,
      name: "FLOWEY® Detergente Neutro",
      category: "Limpeza Geral",
      description: "Detergente neutro para limpeza geral e manutenção",
      benefits: [
        "pH neutro",
        "Seguro para superfícies",
        "Biodegradável",
        "Aroma agradável"
      ],
      specs: {
        "pH": "Neutro (7-8)",
        "Tipo": "Detergente geral",
        "Rendimento": "1:10 a 1:20",
        "Aplicação": "Limpeza geral"
      }
    },
    {
      id: 6,
      name: "FLOWEY® Removedor de Calcário",
      category: "Limpeza Especializada",
      description: "Remove depósitos de calcário e minerais incrustados",
      benefits: [
        "Remove calcário eficientemente",
        "Não danifica superfícies",
        "Ação rápida",
        "Biodegradável"
      ],
      specs: {
        "Tipo": "Ácido fraco",
        "Aplicação": "Remoção de calcário",
        "Concentração": "Concentrado",
        "Segurança": "Não corrosivo"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" /> Voltar
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-2">Produtos FLOWEY®</h1>
          <p className="text-orange-50 text-lg">Soluções de limpeza profissional para todos os setores</p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              {/* Product Header */}
              <div className="bg-gradient-to-r from-orange-100 to-orange-50 p-6 border-b-2 border-orange-200">
                <div className="text-sm font-semibold text-orange-600 mb-2">{product.category}</div>
                <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <p className="text-slate-600 mb-6">{product.description}</p>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Benefícios:</h4>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specs */}
                <div className="bg-slate-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3 text-sm">Especificações:</h4>
                  <div className="space-y-2">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-slate-600">{key}:</span>
                        <span className="font-medium text-slate-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link href="/contato">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    Solicitar Demonstração
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Todos os produtos FLOWEY® são:</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">✓</div>
              <h3 className="font-bold mb-2">Biodegradáveis</h3>
              <p className="text-slate-300 text-sm">Base vegetal e híbrida, amigos do meio ambiente</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">✓</div>
              <h3 className="font-bold mb-2">Certificados</h3>
              <p className="text-slate-300 text-sm">NSF Internacional e normas de segurança</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">✓</div>
              <h3 className="font-bold mb-2">Seguros</h3>
              <p className="text-slate-300 text-sm">Não tóxicos, não inflamáveis, sem VOC</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">✓</div>
              <h3 className="font-bold mb-2">Eficientes</h3>
              <p className="text-slate-300 text-sm">Concentrados, rendimento 1:5 a 1:20</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

