import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, DollarSign, Clock, Droplet } from "lucide-react";

export default function Calculator() {
  const [washesPerMonth, setWashesPerMonth] = useState(20);
  const [timePerWash, setTimePerWash] = useState(45);
  const [costPerWash, setCostPerWash] = useState(120);
  const [waterPerWash, setWaterPerWash] = useState(500);

  // Calculations
  const timeReduction = timePerWash * 0.5; // 50% reduction
  const costReduction = costPerWash * 0.63; // 63% reduction
  const waterReduction = waterPerWash * 0.45; // 45% reduction

  const monthlyTimeSaved = (timePerWash - timeReduction) * washesPerMonth;
  const monthlyCostSaved = (costPerWash - (costPerWash - costReduction)) * washesPerMonth;
  const monthlyWaterSaved = (waterPerWash - (waterPerWash - waterReduction)) * washesPerMonth;

  const annualTimeSaved = monthlyTimeSaved * 12;
  const annualCostSaved = monthlyCostSaved * 12;
  const annualWaterSaved = monthlyWaterSaved * 12;

  const hoursPerYearSaved = (annualTimeSaved / 60).toFixed(0);
  const paybackMonths = (5000 / (monthlyCostSaved || 1)).toFixed(1);

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
          <h1 className="text-4xl font-bold mb-2">Calculadora de ROI</h1>
          <p className="text-orange-50 text-lg">Descubra quanto você pode economizar com FLOWEY®</p>
        </div>
      </div>

      {/* Calculator */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Seus Dados Operacionais</h2>

            {/* Input 1: Washes per Month */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-slate-900 mb-3">
                Lavagens por mês
              </label>
              <input
                type="range"
                min="1"
                max="100"
                value={washesPerMonth}
                onChange={(e) => setWashesPerMonth(Number(e.target.value))}
                className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-slate-600">1 lavagem</span>
                <span className="text-2xl font-bold text-orange-500">{washesPerMonth}</span>
                <span className="text-sm text-slate-600">100 lavagens</span>
              </div>
            </div>

            {/* Input 2: Time per Wash */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-slate-900 mb-3">
                Tempo por lavagem (minutos)
              </label>
              <input
                type="range"
                min="10"
                max="120"
                value={timePerWash}
                onChange={(e) => setTimePerWash(Number(e.target.value))}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-slate-600">10 min</span>
                <span className="text-2xl font-bold text-blue-500">{timePerWash} min</span>
                <span className="text-sm text-slate-600">120 min</span>
              </div>
            </div>

            {/* Input 3: Cost per Wash */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-slate-900 mb-3">
                Custo por lavagem (R$)
              </label>
              <input
                type="range"
                min="20"
                max="300"
                value={costPerWash}
                onChange={(e) => setCostPerWash(Number(e.target.value))}
                className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-slate-600">R$ 20</span>
                <span className="text-2xl font-bold text-green-500">R$ {costPerWash}</span>
                <span className="text-sm text-slate-600">R$ 300</span>
              </div>
            </div>

            {/* Input 4: Water per Wash */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-slate-900 mb-3">
                Consumo de água por lavagem (litros)
              </label>
              <input
                type="range"
                min="100"
                max="1000"
                value={waterPerWash}
                onChange={(e) => setWaterPerWash(Number(e.target.value))}
                className="w-full h-2 bg-cyan-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-slate-600">100 L</span>
                <span className="text-2xl font-bold text-cyan-500">{waterPerWash} L</span>
                <span className="text-sm text-slate-600">1000 L</span>
              </div>
            </div>

            {/* CTA */}
            <Link href="/contato">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 h-12 text-lg">
                Agendar Demonstração Gratuita
              </Button>
            </Link>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 border-2 border-orange-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Economia Mensal</h3>
              
              <div className="space-y-4">
                {/* Time Saved */}
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Clock className="w-6 h-6 text-blue-500" />
                      <div>
                        <p className="text-sm text-slate-600">Tempo economizado</p>
                        <p className="text-2xl font-bold text-blue-600">{monthlyTimeSaved.toFixed(0)} min</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500">por mês</p>
                      <p className="text-lg font-semibold text-blue-600">{(monthlyTimeSaved / 60).toFixed(1)}h</p>
                    </div>
                  </div>
                </div>

                {/* Cost Saved */}
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <DollarSign className="w-6 h-6 text-green-500" />
                      <div>
                        <p className="text-sm text-slate-600">Custo economizado</p>
                        <p className="text-2xl font-bold text-green-600">R$ {monthlyCostSaved.toFixed(0)}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500">por mês</p>
                      <p className="text-lg font-semibold text-green-600">63%</p>
                    </div>
                  </div>
                </div>

                {/* Water Saved */}
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Droplet className="w-6 h-6 text-cyan-500" />
                      <div>
                        <p className="text-sm text-slate-600">Água economizada</p>
                        <p className="text-2xl font-bold text-cyan-600">{monthlyWaterSaved.toFixed(0)} L</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500">por mês</p>
                      <p className="text-lg font-semibold text-cyan-600">45%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Annual Summary */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-8">
              <h3 className="text-lg font-semibold mb-4">Projeção Anual</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                  <span className="text-slate-300">Tempo economizado</span>
                  <span className="text-2xl font-bold">{hoursPerYearSaved}h</span>
                </div>

                <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                  <span className="text-slate-300">Economia de custos</span>
                  <span className="text-2xl font-bold text-green-400">R$ {annualCostSaved.toFixed(0)}</span>
                </div>

                <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                  <span className="text-slate-300">Água economizada</span>
                  <span className="text-2xl font-bold text-cyan-400">{(annualWaterSaved / 1000).toFixed(1)}k L</span>
                </div>

                <div className="flex justify-between items-center pt-4 bg-orange-500/20 px-4 py-3 rounded-lg">
                  <span className="text-slate-200 font-semibold">Payback do investimento</span>
                  <span className="text-2xl font-bold text-orange-400">{paybackMonths} meses</span>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
              <p className="text-sm text-slate-700">
                <strong>💡 Dica:</strong> Estes cálculos são baseados em dados reais de clientes FLOWEY®. 
                Seus resultados podem variar dependendo das condições operacionais específicas. 
                Agende uma demonstração para uma análise personalizada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

