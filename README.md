# SOLCONECT - Demonstração Interativa de Eficiência FLOWEY®

Website interativo profissional para apresentação e demonstração dos produtos FLOWEY® da SOLCONECT em Cachoeiro de Itapemirim.

## 🎯 Funcionalidades

- **Home:** Hero section com navegação e estatísticas principais
- **Produtos:** Galeria de 6 produtos FLOWEY com especificações técnicas
- **Calculadora ROI:** Ferramenta interativa para calcular economia personalizada
- **Comparativo de Eficiência:** Gráficos mostrando antes vs. depois
- **Contato:** Formulário de agendamento de demonstrações

## 🛠️ Tecnologias

- React 19 + TypeScript
- Tailwind CSS 4
- shadcn/ui components
- Chart.js para gráficos
- Vite para build otimizado

## 📦 Instalação

```bash
# Instalar dependências
pnpm install

# Rodar em desenvolvimento
pnpm dev

# Compilar para produção
pnpm build
```

## 🚀 Deploy

### Opção 1: GitHub Pages
1. Fazer push para GitHub
2. Ativar GitHub Pages nas configurações do repositório
3. Selecionar branch `main` e pasta `dist/public`

### Opção 2: FTP (LocalWeb)
1. Compilar: `pnpm build`
2. Enviar conteúdo de `dist/public/` via FTP para `public_html/`
3. Acessar via domínio solconect.com.br

## 📝 Estrutura do Projeto

```
client/
  ├── public/          # Arquivos estáticos
  ├── src/
  │   ├── pages/       # Páginas do site
  │   ├── components/  # Componentes reutilizáveis
  │   ├── App.tsx      # Rotas principais
  │   └── main.tsx     # Entry point
server/
  └── index.ts         # Configuração do servidor
```

## 🎨 Design

- **Paleta de Cores:** Laranja (#f97316), Branco, Cinza
- **Tipografia:** Open Sans
- **Responsivo:** Mobile, Tablet, Desktop

## 📧 Contato

- **Empresa:** Representante da empresa ELECTRACLEAN
- **Telefone:** (28) 3521-XXXX
- **E-mail:** contato@solconect.com.br
- **Website:** www.solconect.com.br

## 📄 Licença

© 2025 SOLCONECT. Todos os direitos reservados. | FLOWEY® é marca registrada.

