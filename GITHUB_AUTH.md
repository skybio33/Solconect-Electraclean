# 🔐 Autenticação GitHub - Personal Access Token

## Por que preciso de um Token?

GitHub desativou autenticação por senha em 2021. Agora você precisa usar um **Personal Access Token (PAT)** para fazer push via HTTPS.

## Como Gerar um Token

### Passo 1: Acessar Configurações
1. Acesse: https://github.com/settings/tokens
2. Ou vá para: GitHub → Settings → Developer settings → Personal access tokens

### Passo 2: Criar Novo Token
1. Clique em **"Generate new token (classic)"**
2. Preencha:
   - **Note:** `SOLCONECT GitHub Push` (ou qualquer nome)
   - **Expiration:** 90 days (ou conforme sua preferência)

### Passo 3: Selecionar Permissões
Marque apenas:
- ✅ `repo` (Full control of private repositories)

### Passo 4: Gerar e Copiar
1. Clique em **"Generate token"**
2. **COPIE O TOKEN IMEDIATAMENTE** (você não conseguirá vê-lo novamente!)
3. Guarde em um lugar seguro

## Como Usar o Token

### Opção 1: Push via HTTPS (Recomendado)

```bash
cd /home/ubuntu/solconect_interactive_demo

git push -u origin master
```

Quando pedir:
- **Username:** seu usuário GitHub (skybio33)
- **Password:** Cole o token que você copiou

### Opção 2: Configurar Git para Lembrar o Token

```bash
# Ativar armazenamento de credenciais
git config --global credential.helper store

# Fazer o push (vai pedir token uma vez)
git push -u origin master

# Próximos pushes não pedirão credenciais
```

### Opção 3: Usar SSH (Avançado)

Se preferir usar SSH, gere uma chave SSH:

```bash
ssh-keygen -t ed25519 -C "seu-email@example.com"
```

E adicione a chave pública em: https://github.com/settings/keys

## Verificar Conexão

```bash
# Testar conexão HTTPS
git ls-remote https://github.com/skybio33/Solconect-Electraclean.git

# Testar conexão SSH (se configurou)
ssh -T git@github.com
```

## Fazer o Push

```bash
cd /home/ubuntu/solconect_interactive_demo

git push -u origin master
```

## Troubleshooting

### Erro: "Authentication failed"
- Verifique se o token está correto
- Verifique se o token não expirou
- Tente novamente

### Erro: "Permission denied"
- Verifique se o token tem permissão `repo`
- Verifique se o repositório é seu

### Erro: "fatal: not a git repository"
- Execute: `cd /home/ubuntu/solconect_interactive_demo`
- Verifique se existe pasta `.git`

## Segurança

⚠️ **NUNCA compartilhe seu token!**
- Não coloque em arquivos públicos
- Não envie por email
- Se vazar, regenere imediatamente em: https://github.com/settings/tokens

## Próximas Atualizações

Após fazer o push inicial, para atualizar o repositório:

```bash
git add .
git commit -m "Descrição da mudança"
git push origin master
```

Pronto! Seu código estará no GitHub! 🚀

