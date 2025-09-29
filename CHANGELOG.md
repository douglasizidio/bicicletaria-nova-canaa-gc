# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [Unreleased]

### Planejado
- Implementação de sistema de busca de produtos
- Integração com sistema de pagamento online
- Área administrativa para gestão de estoque

---

## [1.0.0] - 2025-09-29

### Adicionado
- **Modularização completa do projeto**
  - Separação de CSS em arquivo externo (`src/css/style.css`)
  - Separação de JavaScript em arquivo externo (`src/js/main.js`)
  - HTML limpo e semântico (`src/index.html`)

- **Estrutura de diretórios organizada**
  - Pasta `src/` para código fonte
  - Pasta `docs/` para documentação
  - Pasta `scripts/` para scripts de automação
  - Pasta `.github/workflows/` para CI/CD

- **Pipeline CI/CD**
  - Workflow de integração contínua (testes e validação)
  - Workflow de deploy automático para GitHub Pages
  - Validação de estrutura HTML, CSS e JavaScript

- **Documentação completa**
  - README.md com instruções de uso
  - CHANGELOG.md para rastreamento de mudanças
  - Documentação ITIL (gestão de serviços)
  - Documentação CMMI (maturidade de processos)

- **Estratégia Git Flow**
  - Branch `main` para produção
  - Branch `develop` para desenvolvimento
  - Feature branches para novas funcionalidades

- **Scripts de automação**
  - Script de build (`scripts/build.sh`)
  - Scripts npm para desenvolvimento

### Melhorado
- **Performance do site**
  - Carregamento otimizado de recursos
  - CSS e JavaScript modularizados para melhor cache

- **Organização do código**
  - Separação de responsabilidades
  - Estrutura escalável e manutenível

### Tecnologias
- HTML5
- CSS3 (tema escuro, design responsivo)
- JavaScript (ES6+)
- Git/GitHub
- GitHub Actions (CI/CD)
- GitHub Pages (hospedagem)

### Funcionalidades
- ✅ Página inicial responsiva
- ✅ Seção de serviços
- ✅ Formulário de contato
- ✅ Integração com WhatsApp
- ✅ Mapa de localização (Google Maps)
- ✅ Links para redes sociais
- ✅ Informações de pagamento (PIX, dinheiro, cartões)
- ✅ Menu mobile responsivo
- ✅ Animações e transições suaves
- ✅ Modal de seleção de telefone

---

## Tipos de Mudanças

- `Adicionado` - para novas funcionalidades
- `Modificado` - para mudanças em funcionalidades existentes
- `Depreciado` - para funcionalidades que serão removidas
- `Removido` - para funcionalidades removidas
- `Corrigido` - para correções de bugs
- `Segurança` - para vulnerabilidades corrigidas

---

## Versionamento

Este projeto segue o **Versionamento Semântico**:

- **MAJOR** (X.0.0): Mudanças incompatíveis na API
- **MINOR** (0.X.0): Funcionalidades adicionadas de forma compatível
- **PATCH** (0.0.X): Correções de bugs compatíveis

---

**Desenvolvido como projeto acadêmico de Gerência de Configuração de Software**