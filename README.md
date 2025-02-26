# BeTalent - Teste Técnico

Interface de listagem de funcionários desenvolvida com React, TypeScript e Styled Components.

## 🚀 Funcionalidades

- Listagem de funcionários com foto, nome, cargo, data de admissão e telefone
- Busca por nome, cargo ou telefone
- Layout responsivo (desktop e mobile)
- Loading state com skeleton
- Tratamento de erros
- Estado vazio para busca sem resultados
- Timeout para requisições longas

## 🛠️ Tecnologias

- React
- TypeScript
- Styled Components
- Vite
- Phosphor Icons

## 📦 Estrutura do Projeto

```
src/
  ├── components/
  │   ├── common/
  │   │   ├── EmptyState/        # Estado vazio para busca sem resultados
  │   │   ├── ErrorState/        # Tela de erro com retry
  │   │   └── SkeletonLoading/   # Loading state animado
  │   ├── EmployeeCard/          # Card de funcionário
  │   ├── EmployeeTable/         # Tabela principal
  │   ├── Header/               # Cabeçalho com logo
  │   └── SearchInput/          # Input de busca
  ├── constants/
  │   └── api.ts                # Configurações da API
  ├── hooks/
  │   ├── useEmployees.ts       # Hook de dados
  │   └── useWindowSize.ts      # Hook de responsividade
  ├── services/
  │   ├── api.ts               # Cliente HTTP
  │   └── employees.ts         # Serviços de funcionários
  ├── types/
  │   └── Employee.ts          # Tipagens
  └── utils/
      └── formatters.ts        # Formatadores de data/telefone
```

## 🚀 Como executar

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/betalent-teste.git
```

2. Instale as dependências
```bash
npm install
```

3. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

4. Acesse `http://localhost:5173`

## 📱 Responsividade

### Desktop
- Layout em grid
- Todas as informações visíveis
- Hover states nos cards

### Mobile
- Layout em lista
- Informações principais visíveis
- Expansão para ver detalhes
- Touch friendly

## ⚙️ API

### Endpoints
- `GET /employees` - Lista todos os funcionários

### Timeout
- 5 segundos para timeout da requisição
- 800ms de delay artificial para loading state

## 🎨 Design System

### Cores
- Primária: `#0500FF`
- Texto: `#1C1C1C`
- Texto Secundário: `#808080`
- Fundo: `#FFFFFF`
- Borda: `#E9E9E9`

### Tipografia
- Família: "Helvetica Neue", sans-serif
- Tamanhos: 
  - Base: 16px
  - Títulos: 20px

### Componentes
- Botões com hover e active states
- Inputs com estados disabled
- Cards com animações suaves
- Loading states com shimmer effect


#   T e s t e - P r a t i c o - b e T a l e n t  
 