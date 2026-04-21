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
├── foodlog/                # Dashboard de food
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

- ✅ Dashboards separados por ambiente (Prod/Food/Stage)
- ✅ Visualização de logs em tempo real
- ✅ Filtros avançados de pesquisa
- ✅ Gráficos e métricas visuais (Chart.js)
- ✅ Tabelas ordenáveis e pesquisáveis (DataTables)
- ✅ Notificações visuais (Alertify)
- ✅ Template reutilizável para novos dashboards
- ✅ Interface responsiva (Bootstrap)

## 💻 Como Usar

### Pré-requisitos

- **Windows** (HTA é tecnologia Microsoft específica)
- **Internet Explorer 9+** (engine nativa do HTA)
- **Acesso à rede** para consultar logs remotos
- **Permissões** adequadas para acessar ambientes

### Opção 1: Executar Diretamente

1. Navegar para a pasta do ambiente desejado:
   - `prodlog/` - Logs de Produção
   - `foodlog/` - Logs de Food
   - `stagelog/` - Logs de Stage

2. Duplo-clique no arquivo `.hta` correspondente

3. A aplicação será executada como programa desktop Windows

### Opção 2: Linha de Comando

```cmd
REM Produção
mshta.exe prodlog\prodlog.hta

REM Food
mshta.exe foodlog\foodlog.hta

REM Stage
mshta.exe stagelog\stagelog.hta
```

### Opção 3: Atalho Desktop

1. Criar atalho para o arquivo `.hta` desejado
2. Customizar ícone (opcional)
3. Definir propriedades de compatibilidade

### Execução com Permissões

```cmd
REM Executar como Administrador (se necessário)
runas /user:Administrator "mshta.exe C:\path\to\prodlog.hta"
```

## 🔐 Ambientes Disponíveis

- **prodlog**: Logs do ambiente de Produção
- **foodlog**: Logs do ambiente de Food/Alimentação
- **stagelog**: Logs do ambiente de Stage/Homologação

## 🔗 Projetos Relacionados

- [reshop-datalog-prod](../reshop-datalog-prod) - Standalone Produção
- [reshop-datalog-food](../reshop-datalog-food) - Standalone Food
- [reshop-datalog-stage](../reshop-datalog-stage) - Standalone Stage
- [reshop-sprint](../reshop-sprint) - Dashboard de Sprints

## 🛠️ Desenvolvimento

### Criar Novo Dashboard

```bash
# 1. Copiar template
cp template.hta meu-dashboard/dashboard.hta

# 2. Editar configurações
# Abrir arquivo HTA e customizar propriedades
```

### Estrutura de um HTA

```html
<html>
<head>
## 💡 Conceitos Demonstrados

- **HTA (HTML Application)**: Aplicações desktop Windows usando HTML/CSS/JS
- **MSHTA.exe**: Motor de execução de HTAs do Windows
- **DataTables**: Tabelas JavaScript interativas
- **Bootstrap**: Framework CSS responsivo
- **Chart.js**: Gráficos e visualizações de dados
- **Alertify.js**: Sistema de notificações
- **jQuery**: Biblioteca JavaScript para manipulação DOM
- **AJAX**: Requisições assíncronas para APIs

## ⚙️ Melhorias Implementadas

### ✅ Configuração
- **EditorConfig** adicionado para encoding UTF-8
- HTA/HTML/JS/CSS configurados
- Line endings Windows (CRLF)

### ✅ Documentação
- README expandido com 3 formas de executar
- Estrutura de HTA documentada
- Exemplos de código JavaScript
- Desenvolvimento de novos dashboards explicado
- Conceitos técnicos listados

## 🚀 Melhorias Futuras

- [ ] Migrar de HTA para Electron (cross-platform)
- [ ] Autenticação integrada (Active Directory)
- [ ] WebSocket para logs em tempo real
- [ ] Exportação para PDF
- [ ] Filtros avançados com regex
- [ ] Alertas configuráveis
- [ ] Dark mode
- [ ] Favoritos e saved searches
- [ ] Multi-tenant support
- [ ] API REST própria

## 🔗 Links Úteis

- [HTA Documentation (Microsoft)](https://docs.microsoft.com/en-us/previous-versions/ms536496(v=vs.85))
- [DataTables](https://datatables.net/)
- [Bootstrap](https://getbootstrap.com/)
- [Chart.js](https://www.chartjs.org/)
- [Alertify.js](https://alertifyjs.com/)
- [Electron](https://www.electronjs.org/) - Alternativa moderna ao HTA

## ⚠️ Limitações do HTA

- ⚠️ Apenas Windows
- ⚠️ Depende do Internet Explorer (obsoleto)
- ⚠️ Sem suporte a ES6+ nativo
- ⚠️ Problemas de segurança (zona de confiança)
- ⚠️ Não funciona em Windows 11 (Edge não suporta HTA)

**Recomendação**: Considere migrar para **Electron** ou aplicação web moderna.

  <!-- Configurações HTA -->
  <HTA:APPLICATION
    ID="ReshopDataLog"
    APPLICATIONNAME="Reshop DataLog"
    BORDER="dialog"
    BORDERSTYLE="normal"
    CAPTION="yes"
    ICON="icons/linx.ico"
    MAXIMIZEBUTTON="yes"
    MINIMIZEBUTTON="yes"
    SHOWINTASKBAR="yes"
    SINGLEINSTANCE="yes"
    SYSMENU="yes"
    VERSION="1.0"
    WINDOWSTATE="maximize"
  />
  
  <!-- Bibliotecas -->
  <link rel="stylesheet" href="../libs/bootstrap/css/bootstrap.min.css">
  <script src="../libs/jquery/jquery.min.js"></script>
  <script src="../libs/alertifyjs/alertify.min.js"></script>
  <script src="../libs/chart.js/Chart.min.js"></script>
  
  <!-- Scripts customizados -->
  <script src="../inc/utils.js"></script>
</head>
<body>
  <!-- Interface do Dashboard -->
  <div class="container-fluid">
    <h1>Dashboard</h1>
    <table id="logTable" class="table table-striped"></table>
  </div>
  
  <script>
    // Inicialização DataTables
    $('#logTable').DataTable({
      paging: true,
      searching: true,
      ordering: true
    });
  </script>
</body>
</html>
```

### Customizar Configurações

Editar arquivos em `config/`:

```javascript
// config/prod.config.js
const CONFIG = {
  environment: 'production',
  apiUrl: 'https://api.reshop.com/logs',
  refreshInterval: 30000, // 30 segundos
  maxRecords: 1000
};
```

### Adicionar Funcionalidades

```javascript
// inc/custom-functions.js
function filtrarLogs(nivel) {
  const rows = document.querySelectorAll('#logTable tbody tr');
  rows.forEach(row => {
    const nivelCell = row.querySelector('.nivel');
    row.style.display = nivelCell.textContent === nivel ? '' : 'none';
  });
}

function exportarCSV() {
  const table = document.getElementById('logTable');
  let csv = [];
  const rows = table.querySelectorAll('tr');
  
  rows.forEach(row => {
    const cols = row.querySelectorAll('td, th');
    const rowData = Array.from(cols).map(col => col.textContent);
    csv.push(rowData.join(','));
  });
  
  const blob = new Blob([csv.join('\n')], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'logs-export.csv';
  a.click();
}
```

## 👨‍💻 Autor

Claudio Almeida

## 📅 Contexto

Ferramenta desenvolvida para suporte interno ao projeto Reshop (Linx).

---
