import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Phone, Mail, MapPin, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    sector: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        sector: "",
        message: "",
      });
    }, 3000);
  };

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
          <h1 className="text-4xl font-bold mb-2">Fale Conosco</h1>
          <p className="text-orange-50 text-lg">Agende sua demonstração gratuita de FLOWEY</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Informações de Contato</h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Telefone</h3>
                    <p className="text-slate-600">(28) 3521-XXXX</p>
                    <p className="text-sm text-slate-500 mt-1">Seg-Sex: 8h-18h</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">E-mail</h3>
                    <p className="text-slate-600">contato@solconect.com.br</p>
                    <p className="text-sm text-slate-500 mt-1">Resposta em até 2 horas</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Localização</h3>
                    <p className="text-slate-600">Cachoeiro de Itapemirim</p>
                    <p className="text-sm text-slate-500 mt-1">Espírito Santo, Brasil</p>
                  </div>
                </div>

                {/* Company */}
                <div className="flex items-start gap-4 pt-4 border-t border-slate-200">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Empresa</h3>
                    <p className="text-slate-600">Representante da empresa ELECTRACLEAN</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 border-2 border-orange-200">
              <h3 className="font-bold text-slate-900 mb-4">Sua Demonstração Inclui:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  Avaliação gratuita
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  Demonstração prática
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  Cálculo de ROI personalizado
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  Sem compromisso
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Agendar Demonstração</h2>

              {submitted ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-900 mb-2">Obrigado!</h3>
                  <p className="text-green-800 mb-4">
                    Sua solicitação foi recebida com sucesso. Entraremos em contato em breve para confirmar sua demonstração.
                  </p>
                  <p className="text-sm text-green-700">Redirecionando...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-orange-500 transition"
                      placeholder="Seu nome"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-orange-500 transition"
                      placeholder="seu@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-orange-500 transition"
                      placeholder="(28) 99999-9999"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-orange-500 transition"
                      placeholder="Nome da sua empresa"
                    />
                  </div>

                  {/* Sector */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Setor *
                    </label>
                    <select
                      name="sector"
                      value={formData.sector}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-orange-500 transition"
                    >
                      <option value="">Selecione um setor</option>
                      <option value="rochas">Indústria de Rochas Ornamentais</option>
                      <option value="transporte">Transporte e Logística</option>
                      <option value="alimentos">Alimentos e Bebidas</option>
                      <option value="automotivo">Automotivo</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-orange-500 transition"
                      placeholder="Conte-nos sobre suas necessidades..."
                    />
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-orange-500 hover:bg-orange-600 h-12 text-lg"
                  >
                    Agendar Demonstração Gratuita
                  </Button>

                  <p className="text-xs text-slate-500 text-center">
                    Seus dados estão seguros conosco. Nunca compartilhamos informações com terceiros.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

