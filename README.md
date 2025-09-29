# Bicicletaria Nova Canaã - Projeto GC

Website da Bicicletaria Nova Canaã implementado com práticas de Gerência de Configuração.

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como demonstração das práticas de **Gerência de Configuração de Software**, incluindo:

- ✅ Gerência de Versões com Git Flow
- ✅ Gerência de Releases com versionamento semântico
- ✅ Construção de Sistemas com CI/CD
- ✅ Integração com boas práticas ITIL e CMMI

## 🏗️ Estrutura do Projeto

```
bicicletaria-nova-canaa-gc/
├── src/
│   ├── index.html         # Página principal
│   ├── css/
│   │   └── style.css      # Estilos modularizados
│   └── js/
│       └── main.js        # JavaScript organizado
├── .github/workflows/
│   ├── ci.yml             # Pipeline CI/CD
│   └── release.yml        # Automação de releases
├── docs/
│   ├── ITIL_INTEGRATION.md    # Documentação ITIL
│   └── CMMI_PRACTICES.md      # Documentação CMMI
├── scripts/
│   └── build.sh           # Script de build
├── CHANGELOG.md           # Histórico de mudanças
├── package.json           # Configurações e scripts
└── README.md              # Este arquivo
```

## 🚀 Como Executar

### Pré-requisitos

- Python 3 (para servidor local)
- Git
- Navegador web moderno

### Executando localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/bicicletaria-nova-canaa-gc.git

# Entre no diretório
cd bicicletaria-nova-canaa-gc

# Execute o servidor local
npm start
# ou
python3 -m http.server 8000 --directory src

# Acesse no navegador
http://localhost:8000
```

## 📦 Estratégia de Branching (Git Flow)

- **main**: Branch de produção (código estável)
- **develop**: Branch de desenvolvimento
- **feature/***: Branches para novas funcionalidades
- **hotfix/***: Branches para correções urgentes

## 🏷️ Versionamento Semântico

Seguimos o padrão **SemVer** (Semantic Versioning):

- **MAJOR**: Mudanças incompatíveis na API
- **MINOR**: Funcionalidades adicionadas de forma compatível
- **PATCH**: Correções de bugs compatíveis

Exemplo: `v1.2.3`

## 🔄 CI/CD Pipeline

O projeto utiliza **GitHub Actions** para automação:

1. **CI (Continuous Integration)**
   - Executa em cada push/PR
   - Testes automatizados
   - Linting de código
   - Build de validação

2. **CD (Continuous Deployment)**
   - Deploy automático no GitHub Pages
   - Geração de releases
   - Publicação de tags

## 📝 Releases

As releases são criadas seguindo critérios rigorosos:

- ✅ Todos os testes passaram
- ✅ Código revisado e aprovado
- ✅ Documentação atualizada
- ✅ CHANGELOG refletindo as mudanças

Ver [CHANGELOG.md](CHANGELOG.md) para histórico completo.

## 🎯 Boas Práticas Implementadas

### ITIL (Information Technology Infrastructure Library)
- Gestão de mudanças controlada
- Documentação de processos
- Rastreabilidade de alterações

### CMMI (Capability Maturity Model Integration)
- Processos documentados
- Controle de qualidade
- Melhoria contínua

Ver documentação completa em:
- [docs/ITIL_INTEGRATION.md](docs/ITIL_INTEGRATION.md)
- [docs/CMMI_PRACTICES.md](docs/CMMI_PRACTICES.md)

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização moderna e responsiva
- **JavaScript**: Interatividade
- **Git**: Controle de versão
- **GitHub Actions**: CI/CD
- **GitHub Pages**: Hospedagem

## 📧 Contato

**Bicicletaria Nova Canaã**
- Email: regis-bike@hotmail.com
- Telefone: (38) 99993-6825
- Endereço: Av. Júlio Ribeiro dos Santos, Nova Canaã - Unaí/MG

## 📄 Licença

Este projeto está sob a licença MIT. Ver arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido como projeto acadêmico de Gerência de Configuração de Software**