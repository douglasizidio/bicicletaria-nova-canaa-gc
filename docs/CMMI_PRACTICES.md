# Práticas CMMI (Capability Maturity Model Integration)

## 📋 Visão Geral

Este documento demonstra como as práticas implementadas neste projeto se alinham com o modelo **CMMI for Development (CMMI-DEV)**, especialmente nas áreas de processo relacionadas à **Gerência de Configuração**.

---

## 🎯 Níveis de Maturidade CMMI

O projeto demonstra práticas dos seguintes níveis:

### 📊 Avaliação de Maturidade do Projeto

| Nível | Nome | Status | Evidências |
|-------|------|--------|-----------|
| 1 | Inicial (Ad-hoc) | ✅ Superado | Processos definidos e documentados |
| 2 | Gerenciado (Managed) | ✅ **ATINGIDO** | CM, PPQA, MA implementados |
| 3 | Definido (Defined) | 🟡 Parcial | Processos padronizados organizacionalmente |
| 4 | Quantitativamente Gerenciado | ⚪ Futuro | Métricas quantitativas |
| 5 | Em Otimização | ⚪ Futuro | Melhoria contínua proativa |

**Conclusão:** O projeto atinge **Nível 2 (Managed)** com práticas do **Nível 3 (Defined)**.

---

## 📚 Áreas de Processo Implementadas

### 1. **CM - Configuration Management (Gerência de Configuração)**

**Nível CMMI:** 2 (Managed)

#### SG 1: Estabelecer Baselines

**SP 1.1 - Identificar Itens de Configuração**

✅ **Implementado:**
- Código fonte (HTML, CSS, JavaScript)
- Arquivos de configuração (package.json, workflows)
- Documentação (README, CHANGELOG, docs/)
- Scripts de automação

**Evidências:**
```
src/
  ├── index.html
  ├── css/style.css
  └── js/main.js
.github/workflows/
  ├── ci.yml
  └── deploy.yml
docs/
  ├── ITIL_INTEGRATION.md
  └── CMMI_PRACTICES.md
```

**SP 1.2 - Estabelecer um Sistema de Gerência de Configuração**

✅ **Implementado:**
- Git como sistema de controle de versão
- GitHub como repositório central
- Estrutura de branches definida (Git Flow)

**Evidências:**
- Repositório GitHub configurado
- Branches: `main`, `develop`, `feature/*`
- Tags de versão: `v1.0.0`, etc.

**SP 1.3 - Criar ou Liberar Baselines**

✅ **Implementado:**
- Tags Git para releases oficiais
- Versionamento semântico (SemVer)
- CHANGELOG.md documentando baselines

**Evidências:**
- Tags: `v1.0.0` (baseline inicial)
- CHANGELOG registrando cada release
- Commits associados a baselines

---

#### SG 2: Rastrear e Controlar Mudanças

**SP 2.1 - Rastrear Requisições de Mudança**

✅ **Implementado:**
- Pull Requests para todas as mudanças
- Issues GitHub para rastreamento
- Commits descritivos (Conventional Commits)

**Evidências:**
- Histórico completo de commits
- PRs documentados
- Mensagens padronizadas: `feat:`, `fix:`, `docs:`

**SP 2.2 - Controlar Itens de Configuração**

✅ **Implementado:**
- Proteção da branch `main`
- Revisão obrigatória via PRs
- CI/CD validando mudanças

**Evidências:**
- Pipeline CI/CD executando testes
- Aprovação necessária para merge
- Rollback facilitado via Git

---

#### SG 3: Estabelecer Integridade

**SP 3.1 - Estabelecer Registros de Gerência de Configuração**

✅ **Implementado:**
- Git log como registro completo
- CHANGELOG.md documentando versões
- GitHub Actions logs

**Evidências:**
- `git log --oneline --graph`
- CHANGELOG atualizado
- Logs de CI/CD preservados

**SP 3.2 - Realizar Auditorias de Configuração**

✅ **Implementado:**
- Validações automáticas de estrutura
- Testes de integridade no CI/CD
- Verificação de dependências

**Evidências:**
```yaml
# Exemplo do workflow CI
- name: Validate HTML structure
- name: Validate CSS structure
- name: Validate JS structure
```

---

### 2. **PPQA - Process and Product Quality Assurance**

**Nível CMMI:** 2 (Managed)

#### SG 1: Avaliar Objetivamente Processos e Produtos

**SP 1.1 - Avaliar Objetivamente Processos**

✅ **Implementado:**
- Pipeline CI/CD automatizado
- Testes padronizados
- Linting de código

**Evidências:**
- Workflow CI executando em cada push
- Validações automáticas
- Critérios de qualidade definidos

**SP 1.2 - Avaliar Objetivamente Produtos**

✅ **Implementado:**
- Validação de HTML, CSS, JavaScript
- Build de validação
- Testes de estrutura

**Evidências:**
```bash
# Script de build validando estrutura
./scripts/build.sh
```

---

#### SG 2: Prover Insight Objetivo

**SP 2.1 - Comunicar e Resolver Não-Conformidades**

✅ **Implementado:**
- Falhas no CI/CD bloqueiam merge
- Logs detalhados de erros
- Issues para rastreamento de problemas

**Evidências:**
- Pipeline falhando em caso de erro
- Notificações automáticas
- Documentação de resolução

**SP 2.2 - Estabelecer Registros**

✅ **Implementado:**
- Histórico completo no Git
- Logs de CI/CD preservados
- CHANGELOG documentando mudanças

**Evidências:**
- GitHub Actions history
- Git history
- CHANGELOG.md

---

### 3. **MA - Measurement and Analysis**

**Nível CMMI:** 2 (Managed)

#### SG 1: Alinhar Atividades de Medição e Análise

**SP 1.1 - Estabelecer Objetivos de Medição**

🟡 **Parcialmente Implementado:**
- Métricas básicas coletadas
- Linhas de código contadas
- Tempo de build medido

**Evidências:**
```bash
# Exemplo no build.sh
css_lines=$(wc -l < src/css/style.css)
js_lines=$(wc -l < src/js/main.js)
```

**SP 1.2 - Especificar Medidas**

🟡 **Parcialmente Implementado:**
- Métricas de pipeline (tempo de execução)
- Métricas de código (tamanho, complexidade)
- Taxa de sucesso de builds

---

### 4. **PI - Product Integration (Integração de Produto)**

**Nível CMMI:** 3 (Defined)

#### SG 1: Preparar para Integração de Produto

**SP 1.1 - Determinar Sequência de Integração**

✅ **Implementado:**
- Pipeline CI/CD define ordem de integração
- Build → Test → Deploy

**Evidências:**
```yaml
steps:
  - Checkout
  - Setup
  - Install
  - Lint
  - Test
  - Build
  - Deploy
```

**SP 1.2 - Estabelecer Ambiente de Integração**

✅ **Implementado:**
- Ambiente de CI (GitHub Actions)
- Ambiente de produção (GitHub Pages)
- Separação clara de ambientes

---

#### SG 2: Garantir Compatibilidade de Interface

**SP 2.1 - Revisar Completude de Interface**

✅ **Implementado:**
- Validação de links entre HTML/CSS/JS
- Verificação de dependências
- Testes de integração

---

#### SG 3: Montar Produto e Entregar

**SP 3.1 - Confirmar Prontidão de Componentes**

✅ **Implementado:**
- Testes de validação antes de deploy
- Build script verificando todos os arquivos
- CI/CD garantindo integridade

**SP 3.2 - Montar Componentes**

✅ **Implementado:**
```bash
# Build script montando produto final
mkdir -p dist
cp -r src/* dist/
```

**SP 3.3 - Avaliar Componentes Montados**

✅ **Implementado:**
- Validações pós-build
- Testes de integração
- Deploy condicional (só se tudo passar)

**SP 3.4 - Empacotar e Entregar Produto**

✅ **Implementado:**
- Deploy automático via GitHub Actions
- Entrega no GitHub Pages
- Release notes via GitHub Releases

---

## 📊 Mapeamento de Práticas vs. Implementação

| Área de Processo | Nível CMMI | Implementação | Completude |
|------------------|-----------|---------------|------------|
| CM - Configuration Management | 2 | ✅ Completo | 100% |
| PPQA - Quality Assurance | 2 | ✅ Completo | 100% |
| MA - Measurement & Analysis | 2 | 🟡 Parcial | 60% |
| PI - Product Integration | 3 | ✅ Completo | 90% |

---

## 🎯 Benefícios da Implementação CMMI

### 1. **Processos Repetíveis**
- Mesmo fluxo para todas as mudanças
- Automação garantindo consistência
- Menos dependência de indivíduos

### 2. **Qualidade Previsível**
- Critérios claros de aceitação
- Validações automáticas
- Defeitos detectados cedo

### 3. **Rastreabilidade Completa**
- Histórico detalhado de mudanças
- Auditoria facilitada
- Conformidade garantida

### 4. **Melhoria Contínua**
- Métricas orientando decisões
- Feedback estruturado
- Evolução documentada

### 5. **Redução de Custos**
- Menos retrabalho
- Automação reduzindo esforço manual
- Problemas identificados cedo

---

## 📈 Caminho para Níveis Superiores

### Para atingir Nível 3 (Defined):
- [ ] Definir processo organizacional padrão
- [ ] Criar biblioteca de ativos de processo
- [ ] Implementar programa de treinamento
- [ ] Estabelecer processo de melhoria formal

### Para atingir Nível 4 (Quantitatively Managed):
- [ ] Estabelecer objetivos quantitativos de qualidade
- [ ] Coletar métricas estatísticas
- [ ] Controle estatístico de processos
- [ ] Análise de desempenho quantitativa

### Para atingir Nível 5 (Optimizing):
- [ ] Análise de causas raiz automatizada
- [ ] Inovação e deployment de melhorias
- [ ] Otimização contínua baseada em dados
- [ ] Prevenção proativa de defeitos

---

## 🎓 Conclusão

Este projeto demonstra implementação sólida de práticas **CMMI Nível 2**, com elementos do **Nível 3**, através de:

✅ **Gerência de Configuração robusta** (CM)
✅ **Garantia de Qualidade automatizada** (PPQA)
✅ **Integração de Produto estruturada** (PI)
🟡 **Medição e Análise básica** (MA)

A combinação de Git, GitHub, CI/CD e documentação estruturada proporciona:
- Processos gerenciados e repetíveis
- Qualidade consistente e previsível
- Rastreabilidade completa
- Base sólida para evolução de maturidade

---

## 📚 Referências

- **CMMI for Development, Version 2.0** - CMMI Institute
- **CMMI: Guidelines for Process Integration and Product Improvement** - SEI
- **Interpreting the CMMI** - Margaret K. Kulpa, Kent A. Johnson
- **Git Documentation**: [git-scm.com](https://git-scm.com/doc)

---

**Documento elaborado como parte do projeto acadêmico de Gerência de Configuração de Software**