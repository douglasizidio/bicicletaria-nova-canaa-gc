# Integração com ITIL (Information Technology Infrastructure Library)

## 📋 Visão Geral

Este documento descreve como as práticas de **Gerência de Configuração** implementadas neste projeto se alinham com o framework **ITIL v4**, especialmente nos processos de **Gestão de Mudanças** e **Gestão de Releases**.

---

## 🎯 Processos ITIL Implementados

### 1. **Gestão de Mudanças (Change Management)**

#### Objetivo
Garantir que mudanças no código sejam realizadas de forma controlada, minimizando riscos e impactos negativos.

#### Implementação no Projeto

**📝 Registro de Mudanças:**
- Todas as mudanças são registradas via commits Git com mensagens descritivas
- Padrão de commits seguindo Conventional Commits:
  - `feat:` para novas funcionalidades
  - `fix:` para correções de bugs
  - `docs:` para documentação
  - `refactor:` para refatoração de código

**✅ Aprovação de Mudanças:**
- Pull Requests (PRs) obrigatórios para merge na branch `main`
- Validação automática via CI/CD antes de aprovação
- Revisão de código documentada

**🔍 Avaliação de Impacto:**
- Testes automatizados executados antes de cada merge
- Validação de estrutura HTML, CSS e JavaScript
- Build de validação para garantir integridade

**📊 Rastreabilidade:**
- Histórico completo de mudanças no Git
- CHANGELOG.md documentando todas as versões
- Tags semânticas identificando releases

#### Alinhamento ITIL
| Prática ITIL | Implementação no Projeto |
|--------------|--------------------------|
| Request for Change (RFC) | Pull Request no GitHub |
| Change Advisory Board (CAB) | Revisão de código + CI/CD |
| Change Schedule | Planejamento via branches e milestones |
| Post-Implementation Review | Testes automatizados pós-deploy |

---

### 2. **Gestão de Releases (Release Management)**

#### Objetivo
Planejar, construir, testar e implantar releases de forma consistente e confiável.

#### Implementação no Projeto

**📦 Planejamento de Release:**
- Versionamento semântico (SemVer): MAJOR.MINOR.PATCH
- Release notes automáticas via GitHub Releases
- CHANGELOG.md mantido atualizado

**🏗️ Construção e Teste:**
- Pipeline CI/CD automatizado (GitHub Actions)
- Build script padronizado (`scripts/build.sh`)
- Validações em múltiplas etapas

**🚀 Implantação:**
- Deploy automático no GitHub Pages
- Rollback facilitado via Git tags
- Ambiente de produção separado (branch `main`)

**📋 Documentação:**
- README.md com instruções completas
- Documentação técnica atualizada
- Histórico de versões rastreável

#### Alinhamento ITIL
| Prática ITIL | Implementação no Projeto |
|--------------|--------------------------|
| Release Planning | Milestones e tags Git |
| Build and Test | Pipeline CI/CD automatizado |
| Deployment | GitHub Actions + Pages |
| Release Documentation | CHANGELOG + README |

---

### 3. **Gestão de Configuração (Configuration Management)**

#### Objetivo
Manter informações precisas sobre itens de configuração (CIs) e seus relacionamentos.

#### Implementação no Projeto

**🗂️ Base de Dados de Configuração (CMDB):**
- Repositório Git como CMDB
- Estrutura de diretórios documentada
- Dependências rastreadas via `package.json`

**🔍 Itens de Configuração (CIs):**
- Código fonte (HTML, CSS, JavaScript)
- Configurações de CI/CD (workflows)
- Documentação (README, CHANGELOG, docs/)
- Scripts de automação

**📊 Controle de Versões:**
- Git como sistema de controle de versão
- Branches para diferentes ambientes
- Tags para releases oficiais

**✅ Auditoria e Conformidade:**
- Histórico completo de mudanças
- Rastreabilidade via commits
- Validações automatizadas

#### Alinhamento ITIL
| Prática ITIL | Implementação no Projeto |
|--------------|--------------------------|
| Configuration Item (CI) | Arquivos no repositório Git |
| CMDB | Repositório GitHub |
| Configuration Baseline | Tags de release (v1.0.0, etc.) |
| Configuration Audit | Histórico Git + CI/CD logs |

---

## 🔄 Ciclo de Vida do Serviço (Service Lifecycle)

### Estratégia do Serviço (Service Strategy)
- Definição clara do propósito: website institucional
- Alinhamento com objetivos do negócio

### Desenho do Serviço (Service Design)
- Arquitetura modular e escalável
- Separação de responsabilidades (HTML, CSS, JS)
- Design responsivo e acessível

### Transição do Serviço (Service Transition)
- Pipeline CI/CD para transições suaves
- Testes automatizados antes de deploy
- Rollback facilitado via Git

### Operação do Serviço (Service Operation)
- Monitoramento via GitHub Actions
- Logs de execução disponíveis
- Deploy automático e confiável

### Melhoria Contínua (Continual Service Improvement)
- Feedback via issues GitHub
- Iterações baseadas em métricas
- Documentação evolutiva

---

## 📈 Benefícios da Integração ITIL

### 1. **Redução de Riscos**
- Mudanças controladas e testadas
- Rollback rápido em caso de problemas
- Validações automáticas

### 2. **Maior Previsibilidade**
- Processo estruturado de releases
- Critérios claros de aprovação
- Histórico rastreável

### 3. **Qualidade Consistente**
- Testes automatizados
- Padrões de código definidos
- Revisão obrigatória

### 4. **Transparência e Governança**
- Visibilidade completa de mudanças
- Auditoria facilitada
- Documentação atualizada

### 5. **Eficiência Operacional**
- Automação de processos repetitivos
- Redução de erro humano
- Deploy rápido e confiável

---

## 🎓 Conclusão

A implementação de práticas ITIL neste projeto demonstra como frameworks de governança de TI podem ser aplicados mesmo em projetos de pequeno porte. A integração com Git, GitHub e CI/CD proporciona:

- ✅ Gestão de mudanças estruturada
- ✅ Releases controladas e documentadas
- ✅ Configurações rastreáveis e auditáveis
- ✅ Melhoria contínua facilitada

Essas práticas elevam a maturidade do processo de desenvolvimento e garantem qualidade, previsibilidade e governança.

---

## 📚 Referências

- **ITIL Foundation, ITIL 4 Edition** - AXELOS
- **ITIL Practitioner Guidance** - TSO
- **GitHub Docs**: [About GitHub Actions](https://docs.github.com/en/actions)
- **Conventional Commits**: [conventionalcommits.org](https://www.conventionalcommits.org/)

---

**Documento elaborado como parte do projeto acadêmico de Gerência de Configuração de Software**