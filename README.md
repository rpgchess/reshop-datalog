# Reshop DataLog - Dashboard Central 📊

## 📌 Sobre o Projeto

Dashboard centralizado HTA (HTML Application) para visualização e monitoramento de logs do Reshop. Ferramenta interna que consolida acesso aos ambientes de Produção e Stage.

## 🎯 Objetivo

Fornecer uma interface unificada para consulta, filtro e análise de logs do Reshop em diferentes ambientes, facilitando troubleshooting e monitoramento centralizado de operações.

## 🚀 Tecnologias Utilizadas

- **HTA** (HTML Application) - Interface desktop Windows
- **HTML5 + CSS3 + JavaScript**
- **Bootstrap** - Framework UI
- **DataTables** - Tabelas interativas
- **Alertify.js** - Notificações e alertas
- **Chart.js** - Gráficos e visualizações
- **jQuery** - Manipulação DOM e AJAX

## 📁 Estrutura do Projeto

```
reshop-datalog/
├── template.hta            # Template base para dashboards
├── prodlog/                # Dashboard de produção
├── stagelog/               # Dashboard de stage
├── libs/                   # Bibliotecas externas
│   ├── bootstrap/
│   ├── jquery/
│   ├── alertifyjs/
│   └── chart.js/
├── inc/                    # Includes e utilitários
└── config/                 # Configurações
```

## 🔧 Funcionalidades

- ✅ Dashboards separados por ambiente (Prod/Stage)
- ✅ Visualização de logs em tempo real
- ✅ Filtros avançados de pesquisa
- ✅ Gráficos e métricas visuais (Chart.js)
- ✅ Tabelas ordenáveis e pesquisáveis (DataTables)
- ✅ Notificações visuais (Alertify)
- ✅ Template reutilizável para novos dashboards
- ✅ Interface responsiva (Bootstrap)

## 💻 Como Usar

### Pré-requisitos

- **Windows** (HTA é tecnologia Microsoft)
- **Internet Explorer 9+** (engine do HTA)

### Execução

1. Navegar para a pasta do ambiente desejado (`prodlog/` ou `stagelog/`)
2. Abrir o arquivo `.hta` correspondente
3. A aplicação será executada como programa desktop

## 🔐 Ambientes Disponíveis

- **prodlog**: Logs do ambiente de Produção
- **stagelog**: Logs do ambiente de Stage/Homologação

## 🔗 Projetos Relacionados

- [reshop-datalog-prod](../reshop-datalog-prod) - Standalone Produção
- [reshop-datalog-stage](../reshop-datalog-stage) - Standalone Stage
- [reshop-sprint](../reshop-sprint) - Dashboard de Sprints

## 🛠️ Desenvolvimento

Para criar novos dashboards:

1. Copiar `template.hta` como base
2. Customizar configurações em `config/`
3. Ajustar scripts JavaScript em `inc/`
4. Adicionar bibliotecas necessárias em `libs/`

## 👨‍💻 Autor

Claudio Almeida

## 📅 Contexto

Ferramenta desenvolvida para suporte interno ao projeto Reshop (Linx).

---

> **Nota**: Esta é uma ferramenta interna de desenvolvimento e suporte. Não é destinada a uso externo.
