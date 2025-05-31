# 🌌 Rick and Morty App

Um aplicativo React Native que consome a [Rick and Morty API](https://rickandmortyapi.com/) para exibir informações sobre personagens da série. O app permite visualizar, pesquisar e favoritar personagens.

## 📱 Funcionalidades

- **Lista de Personagens**: Visualize todos os personagens da série
- **Pesquisa**: Busque personagens por nome
- **Detalhes**: Veja informações detalhadas de cada personagem
- **Favoritos**:
  - Favorite seus personagens preferidos
  - Lista de favoritos persistente
  - Gerenciamento de favoritos (adicionar/remover)

## 🛠️ Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Axios](https://axios-http.com/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)

## 🎨 Design

- Tema escuro com cores inspiradas na série
- Fonte personalizada "Get Schwifty"
- Interface intuitiva e responsiva
- Cards com efeitos de sombra
- Ícones do Expo Vector Icons

## 📦 Instalação

```bash
# Clone o repositório
git clone [url-do-repositorio]

# Instale as dependências
npm install

# Execute o projeto
npm start
```

## 📱 Estrutura do Projeto

```
src/
  ├── app/              # Configurações do app
  ├── assets/           # Recursos (fontes, imagens)
  ├── lib/              # Configurações de bibliotecas
  ├── routes/           # Configuração de rotas
  ├── screens/          # Telas do aplicativo
  ├── services/         # Serviços e APIs
  └── styles/           # Estilos globais
```

## 🔍 Principais Arquivos

- `screens/Feed.jsx`: Tela principal com lista de personagens
- `screens/Description.jsx`: Detalhes do personagem
- `screens/Favorite.jsx`: Lista de favoritos
- `services/favorites.js`: Gerenciamento de favoritos com AsyncStorage
- `services/rickAndMorty.js`: Integração com a API

## 🎯 Recursos da API

O app consome a [Rick and Morty API](https://rickandmortyapi.com/) para obter:

- Lista de personagens
- Detalhes individuais
- Imagens
- Status
- Espécie
- Origem
- Localização atual

## 🎨 Paleta de Cores

- Preto Espacial: `#0B0C10` (Fundo principal)
- Verde Portal: `#1F3A2D` (Cartões/Secundário)
- Azul Rick: `#2980B9` (Botões/Destaques)
- Branco: `#D1D5DB` (Texto primário)
- Vermelho: `#C0392B` (Favoritos/Alertas)

## 📝 Licença

Este projeto está sob a licença MIT.
