# 🍅 Chronos Pomodoro - React 19 Learning Project

Um aplicativo de **Pomodoro Timer** desenvolvido para aprender e praticar as novas funcionalidades do React 19. Este projeto utiliza a técnica Pomodoro para gerenciamento de tempo, implementada com as mais recentes features do React.

## 🎯 Objetivo do Projeto

Este repositório foi criado com o propósito de:

- **Aprender React 19**: Explorar as novas funcionalidades e melhorias do React 19
- **Praticar conceitos modernos**: Implementar patterns e práticas atuais do desenvolvimento React
- **Técnica Pomodoro**: Criar uma ferramenta útil para produtividade pessoal
- **TypeScript**: Fortalecer conhecimentos em tipagem estática

## 🚀 Tecnologias Utilizadas

- **React 19.1.0** - A mais recente versão do React com novos recursos
- **TypeScript ~5.8.3** - Para tipagem estática e melhor experiência de desenvolvimento
- **Vite 6.3.5** - Build tool moderna e rápida com Hot Module Replacement
- **SWC Plugin** - Compilador super rápido para React via @vitejs/plugin-react-swc
- **ESLint 9.25.0** - Para manter a qualidade e consistência do código
- **CSS Modules** - Para estilização componentizada e escopada
- **Lucide React 0.511.0** - Biblioteca de ícones moderna, leve e customizável

## 📋 Funcionalidades Planejadas

### ✅ Implementadas

- [x] Setup inicial do projeto com React 19 + TypeScript + Vite
- [x] Configuração de ESLint otimizada
- [x] Sistema de cores e tema customizado
- [x] Estrutura base do projeto com arquitetura componentizada
- [x] Sistema de CSS Modules para estilização escopada
- [x] Integração com Lucide React para ícones
- [x] **MainTemplate Component** - Template principal da aplicação
- [x] **Logo Component** - Branding "Chronos" com ícone de timer
- [x] **Menu Component** - Navegação com ícones (Home, History, Settings, Theme)
- [x] **CountDown Component** - Display do timer com tipografia responsiva
- [x] **Form Component** - Formulário completo para cadastro de tarefas
- [x] **Input Component** - Componente reutilizável com tipagem TypeScript
- [x] **Button Component** - Botões estilizados com suporte a ícones e cores (green/red)
- [x] **Cycles Component** - Visualização dos ciclos Pomodoro com indicadores coloridos
- [x] **Container Component** - Wrapper para layout consistente
- [x] **Footer Component** - Rodapé da aplicação
- [x] **GenericHtml Component** - Componente genérico para conteúdo HTML
- [x] Interface base completa da aplicação Pomodoro

### 🔄 Em Desenvolvimento

- [ ] Timer funcional do Pomodoro (25 minutos de foco)
- [ ] Timer de pausa curta (5 minutos)
- [ ] Timer de pausa longa (15 minutos)
- [ ] Lógica de controles play/pause/reset no Button Component
- [ ] Funcionalidade de cadastro e gerenciamento de tarefas
- [ ] Sistema de estado dos ciclos visuais
- [ ] Notificações sonoras e visuais
- [ ] Persistência de dados no localStorage

### 🎯 Futuras Melhorias

- [ ] **Timer Funcional**: Implementar lógica de contagem regressiva
- [ ] **Estado Global**: Gerenciamento de estado para ciclos e tarefas
- [ ] **Audio Feedback**: Notificações sonoras para transições
- [ ] **Local Storage**: Persistência de configurações e histórico
- [ ] **Configurações**: Tempos personalizáveis de trabalho e pausa
- [ ] **Estatísticas**: Relatórios de produtividade e histórico
- [ ] **Temas**: Sistema de temas claro/escuro
- [ ] **PWA**: Progressive Web App para uso offline
- [ ] **Integração**: APIs de tarefas (Todoist, Trello, etc.)
- [ ] **Responsividade**: Otimização para dispositivos móveis

## 📊 Status Atual do Projeto

### ✅ Interface Completa

- Todos os componentes visuais estão implementados
- Layout responsivo e moderno
- Sistema de design consistente
- Tipografia e cores definidas

### 🔄 Próximos Passos Prioritários

1. **Implementar lógica do timer** no CountDown Component
2. **Adicionar estado global** para gerenciar ciclos ativos
3. **Conectar formulário** com funcionalidade de tarefas
4. **Implementar controles** de play/pause/reset no Button
5. **Adicionar feedback visual** nos Cycles durante execução

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Passos para execução

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/React19-introduction.git
cd React19-introduction
```

2. **Instale as dependências**

```bash
npm install
```

3. **Execute o projeto em modo de desenvolvimento**

```bash
npm run dev
```

4. **Acesse no navegador**

```text
http://localhost:5173
```

### O que você verá atualmente

Ao executar o projeto, você encontrará uma interface completa e funcional com:

- ✅ **Header com Logo**: Branding "Chronos" estilizado
- ✅ **Menu de Navegação**: 4 botões com ícones (Home, History, Settings, Theme)
- ✅ **Timer Display**: Showing "00:00" (ainda estático)
- ✅ **Formulário de Tarefa**: Campo para inserir nome da tarefa
- ✅ **Visualização de Ciclos**: 8 dots coloridos representando os ciclos Pomodoro
- ✅ **Botão de Início**: Botão verde com ícone de play (ainda não funcional)
- ✅ **Footer**: Informações do desenvolvedor

**Status**: Interface 100% completa, aguardando implementação da lógica de negócio.

### Scripts disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Lint do código
npm run lint
```

## 📁 Estrutura do Projeto

```text
React19-introduction/
├── public/                 # Arquivos públicos servidos pelo Vite
│   └── vite.svg           # Favicon padrão do Vite
├── src/                   # Código fonte principal
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Button/        # Botão estilizado com ícones e cores
│   │   ├── Container/     # Wrapper para layout consistente
│   │   ├── CountDown/     # Display do timer principal (00:00)
│   │   ├── Cycles/        # Visualização dos ciclos Pomodoro
│   │   ├── Footer/        # Rodapé da aplicação
│   │   ├── Form/          # Formulário para cadastro de tarefas
│   │   ├── GenericHtml/   # Componente genérico para conteúdo HTML
│   │   ├── Input/         # Campo de input reutilizável
│   │   ├── Logo/          # Logo "Chronos" com branding
│   │   └── Menu/          # Menu de navegação com ícones
│   ├── pages/             # Páginas da aplicação
│   │   └── Home/          # Página inicial com timer e formulário
│   ├── templates/         # Templates de layout
│   │   └── MainTemplate/  # Template principal da aplicação
│   ├── styles/            # Arquivos de estilo
│   │   ├── global.css     # Estilos globais
│   │   ├── theme.css      # Variáveis de tema e cores
│   │   └── index.css      # Arquivo principal de estilos
│   ├── assets/            # Recursos estáticos
│   │   └── react.svg      # Ícone padrão do React
│   ├── App.tsx            # Componente principal
│   ├── main.tsx           # Ponto de entrada da aplicação
│   └── vite-env.d.ts      # Definições de tipos do Vite
├── .gitignore             # Arquivos ignorados pelo Git
├── .gitattributes         # Configurações de atributos do Git
├── eslint.config.js       # Configuração do ESLint 9.x
├── index.html             # Template HTML principal
├── LICENSE                # Licença MIT do projeto
├── package.json           # Dependências e scripts npm
├── package-lock.json      # Lock file das dependências
├── README.md              # Documentação do projeto
├── tsconfig.json          # Configuração TypeScript principal
├── tsconfig.app.json      # Configuração TypeScript para app
├── tsconfig.node.json     # Configuração TypeScript para Node.js
└── vite.config.ts         # Configuração do Vite
```

## 🎨 Design System e Arquitetura

### Sistema de Cores

O projeto utiliza um sistema de cores consistente definido em `src/styles/theme.css`:

- **Cores primárias**: Tons de verde para representar produtividade e foco
- **Escala de cinzas**: Interface moderna e clean
- **Estados**: Cores específicas para diferentes tipos de ciclos:
  - **Verde**: Tempo de trabalho/foco (25min)
  - **Azul**: Pausa curta (5min)  
  - **Roxo**: Pausa longa (15min)
  - **Vermelho**: Estados de erro ou reset

### Arquitetura de Componentes

O projeto segue uma arquitetura componentizada com:

- **Atomic Design**: Componentes pequenos e reutilizáveis (Button, Input)
- **Template Pattern**: MainTemplate para layout consistente
- **CSS Modules**: Estilização escopada para cada componente
- **TypeScript**: Tipagem forte em todos os componentes
- **Props Interface**: Interfaces bem definidas para comunicação entre componentes

### Componentes Principais

- **MainTemplate**: Layout base com Logo, Menu, conteúdo e Footer
- **CountDown**: Display do timer (atualmente estático: "00:00")
- **Form**: Formulário com Input para tarefas e botão de iniciar
- **Cycles**: Visualização dos 8 ciclos Pomodoro (4 trabalho + 3 pausas curtas + 1 pausa longa)
- **Button**: Botão reutilizável com suporte a ícones Lucide React

### Arquivos de Configuração

O projeto utiliza configurações modernas e otimizadas:

- **eslint.config.js**: ESLint 9.x com configuração flat config
- **tsconfig.json**: TypeScript com strict mode e configurações React 19
- **vite.config.ts**: Build tool com plugin SWC para performance
- **package.json**: Dependências atualizadas e scripts organizados
- **.gitignore**: Configurado para projetos Node.js/React

### Padrões de Nomenclatura

**CSS Modules:**

- Maioria dos componentes: `styles.module.css` (plural) com import `styles`
- Alguns componentes: `styles.module.css` com import `style` (singular)
- Arquivos CSS sempre nomeados no plural, mas variável de import pode variar

**Componentes:**

- Todos seguem o padrão: `index.tsx` + arquivo CSS Module
- Props tipadas com TypeScript
- Exportação default em todos os componentes

## 🧠 Conceitos do React 19 Explorados

Este projeto serve como laboratório para explorar as novas funcionalidades do React 19:

- **New JSX Transform**: Utilização da nova transformação JSX automática
- **Automatic Batching**: Melhorias no batching de atualizações de estado
- **Concurrent Features**: Preparação para recursos de renderização concorrente
- **Improved TypeScript Support**: Melhor integração e tipagem com TypeScript 5.8+
- **React DOM Client**: Uso da nova API createRoot
- **Modern Build Tools**: Integração otimizada com Vite 6.x e SWC
- **Component Architecture**: Padrões modernos de componentização e props typing

### Principais Recursos Implementados

- **CSS Modules**: Estilização escopada e modular
- **TypeScript Strict Mode**: Tipagem rigorosa em todos os componentes
- **Component Props Interface**: Interfaces bem definidas para todos os componentes
- **Modern React Patterns**: Uso de functional components com hooks (preparado para futuros hooks)

## 📚 Aprendizados e Documentação

### O que é a Técnica Pomodoro?

A Técnica Pomodoro é um método de gerenciamento de tempo desenvolvido por Francesco Cirillo no final dos anos 1980. Consiste em:

1. **25 minutos de foco** em uma tarefa específica
2. **5 minutos de pausa** curta
3. **Repetir o ciclo** 4 vezes
4. **15-30 minutos de pausa** longa após 4 pomodoros

### Benefícios da Implementação Atual

- ✅ **Interface Moderna**: Design clean e intuitivo
- ✅ **Componentização**: Arquitetura escalável e reutilizável  
- ✅ **TypeScript**: Código type-safe e auto-documentado
- ✅ **CSS Modules**: Estilos escopados sem conflitos
- ✅ **Responsive Design**: Layout adaptável para diferentes telas
- ✅ **Accessibility**: Estrutura semântica e navegável
- ✅ **Performance**: Build otimizada com Vite e SWC
- ✅ **Melhora o foco e concentração** (quando funcional)
- ✅ **Reduz o cansaço mental** (quando funcional)
- ✅ **Aumenta a produtividade** (quando funcional)  
- ✅ **Facilita o controle de distrações** (quando funcional)

## 🤝 Contribuição

Este é um projeto de aprendizado focado em React 19, mas contribuições são bem-vindas!

### Como Contribuir

**Para Aprendizado:**

- Fork o projeto para experimentar com React 19
- Implemente a lógica do timer como exercício
- Adicione novos componentes seguindo os padrões estabelecidos

**Para Melhorias:**

- Abra **issues** com sugestões de funcionalidades
- Implemente **features** da lista de "Em Desenvolvimento"  
- Melhore a **acessibilidade** e **responsividade**
- Adicione **testes unitários** com Vitest
- Otimize **performance** e **SEO**

### Áreas Prioritárias para Contribuição

1. **Timer Logic**: Implementar contagem regressiva funcional
2. **State Management**: Adicionar Context API ou Zustand
3. **Local Storage**: Persistência de dados
4. **Audio Feedback**: Notificações sonoras
5. **PWA Features**: Service Worker e manifest
6. **Testing**: Testes com React Testing Library

---

## 🗓️ Roadmap de Desenvolvimento

### Fase 1: Core Functionality (Próximos Passos)

- [ ] Implementar timer funcional no CountDown
- [ ] Adicionar controles play/pause/reset
- [ ] Conectar formulário com estado global
- [ ] Implementar mudança visual de ciclos

### Fase 2: User Experience  

- [ ] Adicionar notificações visuais e sonoras
- [ ] Implementar persistência no localStorage
- [ ] Criar sistema de configurações
- [ ] Melhorar responsividade mobile

### Fase 3: Advanced Features

- [ ] PWA com Service Worker
- [ ] Estatísticas e relatórios
- [ ] Integração com APIs externas
- [ ] Testes automatizados completos

### Fase 4: Polishing

- [ ] Animações e micro-interações
- [ ] Múltiplos temas
- [ ] Acessibilidade avançada
- [ ] Otimizações de performance

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
