import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Chart from "chart.js/auto";

export default function Comparison() {
  const timeChartRef = useRef<HTMLCanvasElement>(null);
  const costChartRef = useRef<HTMLCanvasElement>(null);
  const waterChartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Time Comparison Chart
    if (timeChartRef.current) {
      const ctx = timeChartRef.current.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["Método Tradicional", "FLOWEY® Lança Espuma"],
            datasets: [
              {
                label: "Tempo de Lavagem (minutos)",
                data: [45, 15],
                backgroundColor: ["#ef4444", "#f97316"],
                borderRadius: 8,
                borderSkipped: false,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            indexAxis: "y" as const,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                beginAtZero: true,
                max: 50,
              },
            },
          },
        });
      }
    }

    // Cost Comparison Chart
    if (costChartRef.current) {
      const ctx = costChartRef.current.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["Método Tradicional", "FLOWEY® Lança Espuma"],
            datasets: [
              {
                label: "Custo por Lavagem (R$)",
                data: [120, 45],
                backgroundColor: ["#ef4444", "#22c55e"],
                borderRadius: 8,
                borderSkipped: false,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            indexAxis: "y" as const,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                beginAtZero: true,
                max: 140,
              },
            },
          },
        });
      }
    }

    // Water Consumption Chart
    if (waterChartRef.current) {
      const ctx = waterChartRef.current.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["Método Tradicional", "FLOWEY® Lança Espuma"],
            datasets: [
              {
                label: "Consumo de Água (litros)",
                data: [500, 275],
                backgroundColor: ["#ef4444", "#06b6d4"],
                borderRadius: 8,
                borderSkipped: false,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            indexAxis: "y" as const,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                beginAtZero: true,
                max: 600,
              },
            },
          },
        });
      }
    }
  }, []);

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
          <h1 className="text-4xl font-bold mb-2">Comparativo de Eficiência</h1>
          <p className="text-orange-50 text-lg">Veja na prática a diferença que FLOWEY® faz</p>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Intro */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Dados Comparativos Reais</h2>
          <p className="text-slate-600 text-lg mb-6">
            Estes dados foram coletados de operações reais de clientes FLOWEY® em Cachoeiro de Itapemirim 
            e região, comparando o método tradicional com o sistema FLOWEY® Lança Espuma.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">50%</div>
              <p className="text-slate-600">Redução no tempo de lavagem</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">63%</div>
              <p className="text-slate-600">Redução nos custos operacionais</p>
            </div>
            <div className="text-center p-4 bg-cyan-50 rounded-lg">
              <div className="text-3xl font-bold text-cyan-600 mb-2">45%</div>
              <p className="text-slate-600">Redução no consumo de água</p>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Time Chart */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Tempo de Lavagem</h3>
            <div style={{ height: "300px", position: "relative" }}>
              <canvas ref={timeChartRef}></canvas>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-slate-700">
                <strong>Ganho:</strong> 30 minutos por lavagem (67% de redução)
              </p>
            </div>
          </div>

          {/* Cost Chart */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Custo por Lavagem</h3>
            <div style={{ height: "300px", position: "relative" }}>
              <canvas ref={costChartRef}></canvas>
            </div>
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-slate-700">
                <strong>Economia:</strong> R$ 75 por lavagem (63% de redução)
              </p>
            </div>
          </div>

          {/* Water Chart */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Consumo de Água</h3>
            <div style={{ height: "300px", position: "relative" }}>
              <canvas ref={waterChartRef}></canvas>
            </div>
            <div className="mt-6 p-4 bg-cyan-50 rounded-lg">
              <p className="text-sm text-slate-700">
                <strong>Economia:</strong> 225 litros por lavagem (45% de redução)
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6">
            <h3 className="text-2xl font-bold">Análise Detalhada</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-100 border-b-2 border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-slate-900">Métrica</th>
                  <th className="px-6 py-4 text-center font-semibold text-slate-900">Método Tradicional</th>
                  <th className="px-6 py-4 text-center font-semibold text-slate-900">FLOWEY® Lança Espuma</th>
                  <th className="px-6 py-4 text-center font-semibold text-orange-600">Melhoria</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">Tempo por lavagem</td>
                  <td className="px-6 py-4 text-center text-slate-600">45 minutos</td>
                  <td className="px-6 py-4 text-center text-slate-600">15 minutos</td>
                  <td className="px-6 py-4 text-center font-bold text-green-600">67% ↓</td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">Custo por lavagem</td>
                  <td className="px-6 py-4 text-center text-slate-600">R$ 120</td>
                  <td className="px-6 py-4 text-center text-slate-600">R$ 45</td>
                  <td className="px-6 py-4 text-center font-bold text-green-600">63% ↓</td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">Consumo de água</td>
                  <td className="px-6 py-4 text-center text-slate-600">500 litros</td>
                  <td className="px-6 py-4 text-center text-slate-600">275 litros</td>
                  <td className="px-6 py-4 text-center font-bold text-green-600">45% ↓</td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">Lavagens por hora</td>
                  <td className="px-6 py-4 text-center text-slate-600">1,3</td>
                  <td className="px-6 py-4 text-center text-slate-600">4</td>
                  <td className="px-6 py-4 text-center font-bold text-green-600">200% ↑</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">Economia mensal (20 lavagens)</td>
                  <td className="px-6 py-4 text-center text-slate-600">-</td>
                  <td className="px-6 py-4 text-center text-slate-600">-</td>
                  <td className="px-6 py-4 text-center font-bold text-green-600">R$ 1.500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Case Studies */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-8">Casos de Sucesso</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <h4 className="text-lg font-bold mb-2">Indústria de Rochas Ornamentais</h4>
              <p className="text-slate-200 mb-4">
                Empresa com 5 máquinas de corte, realizando 30 lavagens/mês
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Resultado:</strong> Economia de R$ 2.250/mês</p>
                <p><strong>Payback:</strong> 2,2 meses</p>
                <p><strong>Tempo economizado:</strong> 15 horas/mês</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <h4 className="text-lg font-bold mb-2">Empresa de Transporte</h4>
              <p className="text-slate-200 mb-4">
                Frota de 50 caminhões, 100 lavagens/mês
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Resultado:</strong> Economia de R$ 7.500/mês</p>
                <p><strong>Payback:</strong> 0,7 meses</p>
                <p><strong>Tempo economizado:</strong> 50 horas/mês</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/contato">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Agendar Demonstração Gratuita
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

