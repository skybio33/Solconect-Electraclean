# 🚀 Guia de Deploy no GitHub

## Pré-requisitos

- Conta GitHub (você já tem: skybio33)
- Git instalado
- Terminal/CMD aberto na pasta do projeto

## Passo 1: Criar Repositório no GitHub

1. Acesse: https://github.com/new
2. Preencha:
   - **Repository name:** `solconect-website`
   - **Description:** Website interativo para demonstração de produtos FLOWEY
   - **Visibility:** Public
3. **Não** adicione README, .gitignore ou LICENSE
4. Clique em "Create repository"

## Passo 2: Conectar ao GitHub

Execute os comandos abaixo no terminal:

```bash
cd /home/ubuntu/solconect_interactive_demo

git branch -M main

git remote add origin https://github.com/skybio33/solconect-website.git

git push -u origin main
```

Se pedir autenticação, use seu token do GitHub como senha.

## Passo 3: Verificar Upload

Acesse: https://github.com/skybio33/solconect-website

Você verá todos os arquivos do projeto!

## Opção: Deploy com GitHub Pages

Para publicar o site automaticamente:

1. No GitHub, vá para **Settings → Pages**
2. Em "Build and deployment":
   - **Source:** Deploy from a branch
   - **Branch:** main
   - **Folder:** /(root)
3. Salve

O site ficará disponível em: `https://skybio33.github.io/solconect-website/`

## Opção: Deploy com Vercel (Recomendado)

Para melhor performance:

1. Acesse: https://vercel.com
2. Clique em "New Project"
3. Selecione o repositório `solconect-website`
4. Clique em "Deploy"

O site ficará disponível em um URL Vercel (ex: `solconect-website.vercel.app`)

## Atualizações Futuras

Para atualizar o site após fazer mudanças:

```bash
git add .
git commit -m "Descrição da mudança"
git push origin main
```

O deploy será automático!

## Suporte

Para mais informações, consulte:
- [Documentação GitHub](https://docs.github.com)
- [Documentação Vercel](https://vercel.com/docs)

