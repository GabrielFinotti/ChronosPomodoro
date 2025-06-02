# 🍅 Chronos Pomodoro - React 19 Learning Project

Um aplicativo de **Pomodoro Timer** desenvolvido para aprender e praticar as novas funcionalidades do React 19. Este projeto utiliza a técnica Pomodoro para gerenciamento de tempo, implementada com as mais recentes features do React.

## 🎯 Objetivo do Projeto

Este repositório foi criado com o propósito de:

- **Aprender React 19**: Explorar as novas funcionalidades e melhorias do React 19
- **Praticar conceitos modernos**: Implementar patterns e práticas atuais do desenvolvimento React
- **Técnica Pomodoro**: Criar uma ferramenta útil para produtividade pessoal
- **TypeScript**: Fortalecer conhecimentos em tipagem estática

## 🚀 Tecnologias Utilizadas

- **React 19.1.0** - A mais recente versão do React
- **TypeScript** - Para tipagem estática e melhor experiência de desenvolvimento
- **Vite** - Build tool moderna e rápida
- **ESLint** - Para manter a qualidade e consistência do código
- **CSS Modules** - Para estilização componentizada e escopada
- **Lucide React** - Biblioteca de ícones moderna e leve

## 📋 Funcionalidades Planejadas

### ✅ Implementadas

- [x] Setup inicial do projeto com React 19 + TypeScript + Vite
- [x] Configuração de ESLint otimizada
- [x] Sistema de cores e tema customizado
- [x] Estrutura base do projeto
- [x] Componentes base (Container e Heading)
- [x] Sistema de CSS Modules para estilização
- [x] Integração com Lucide React para ícones

### 🔄 Em Desenvolvimento

- [ ] Timer do Pomodoro (25 minutos de foco)
- [ ] Timer de pausa curta (5 minutos)
- [ ] Timer de pausa longa (15 minutos)
- [ ] Controles de play/pause/reset
- [ ] Notificações sonoras
- [ ] Contador de sessões completadas
- [ ] Persistência de dados no localStorage

### 🎯 Futuras Melhorias

- [ ] Configurações personalizáveis de tempo
- [ ] Estatísticas de produtividade
- [ ] Temas personalizáveis
- [ ] Progressive Web App (PWA)
- [ ] Integração com APIs de tarefas

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
src/
├── components/          # Componentes reutilizáveis
│   ├── Container/       # Componente de container com CSS Modules
│   └── Heading/         # Componente de cabeçalho
├── styles/             # Arquivos de estilo
│   ├── global.css      # Estilos globais
│   ├── theme.css       # Variáveis de tema
│   └── index.css       # Arquivo principal de estilos
├── assets/             # Recursos estáticos
├── App.tsx             # Componente principal
└── main.tsx            # Ponto de entrada da aplicação
```

## 🎨 Design System

O projeto utiliza um sistema de cores consistente definido em `src/styles/theme.css`:

- **Cores primárias**: Tons de verde para representar produtividade
- **Escala de cinzas**: Interface moderna e clean
- **Estados**: Cores específicas para sucesso, aviso, erro e informação

## 🧠 Conceitos do React 19 Explorados

Este projeto serve como laboratório para explorar:

- **New JSX Transform**: Utilização da nova transformação JSX
- **Automatic Batching**: Melhorias no batching de atualizações
- **Concurrent Features**: Recursos de renderização concorrente
- **Improved TypeScript Support**: Melhor integração com TypeScript
- **Performance Optimizations**: Otimizações de performance nativas

## 📚 Aprendizados e Documentação

### O que é a Técnica Pomodoro?

A Técnica Pomodoro é um método de gerenciamento de tempo desenvolvido por Francesco Cirillo no final dos anos 1980. Consiste em:

1. **25 minutos de foco** em uma tarefa específica
2. **5 minutos de pausa** curta
3. **Repetir o ciclo** 4 vezes
4. **15-30 minutos de pausa** longa após 4 pomodoros

### Benefícios

- ✅ Melhora o foco e concentração
- ✅ Reduz o cansaço mental
- ✅ Aumenta a produtividade
- ✅ Facilita o controle de distrações

## 🤝 Contribuição

Este é um projeto de aprendizado pessoal, mas sugestões e melhorias são bem-vindas! Sinta-se à vontade para:

- Abrir **issues** com sugestões
- Fazer **fork** do projeto
- Enviar **pull requests** com melhorias

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
