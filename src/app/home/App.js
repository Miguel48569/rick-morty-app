import React, { useState, useEffect, useCallback } from "react"; // Adicionado useCallback
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  TextInput,
  StyleSheet,
} from "react-native";
import * as Font from "expo-font";
import styles from "./styles"; // Seus estilos principais para este componente
import { getCharacters } from "../../services/rickAndMorty"; // Verifique se este caminho está correto

// Defina a chave da fonte como uma constante para evitar erros de digitação
const FONT_KEY_RICK_AND_MORTY = "fonteRickAndMorty";

// Estilos específicos para o estado de carregamento inicial da fonte
// É bom mantê-los separados ou aqui, pois 'styles.js' pode ainda não ser ideal
// se a fonte customizada for usada nos estilos de loading de 'styles.js'.
const initialLoadingStyles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#272b33", // Cor de fundo genérica
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#FFFFFF", // Cor genérica
  },
});

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [search, setSearch] = useState("");

  // Estado de carregamento unificado
  const [isLoading, setIsLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState("Carregando fonte...");

  // Carregamento inicial (fontes e dados)
  useEffect(() => {
    async function loadInitialData() {
      try {
        // 1. Carregar a fonte
        await Font.loadAsync({
          [FONT_KEY_RICK_AND_MORTY]: require("../../assets/fonts/get-schwifty/get_schwifty.ttf"),
        });
        console.log("Fonte carregada!"); // Log para confirmar

        // 2. Mudar mensagem e buscar personagens
        setLoadingMessage("Carregando personagens...");
        const response = await getCharacters();
        if (response && response.results) {
          setCharacters(response.results);
          setFilteredCharacters(response.results);
        } else {
          console.error("Resposta da API de personagens inválida:", response);
          // Você pode querer definir um estado de erro aqui
        }
      } catch (error) {
        console.error("Erro ao carregar dados iniciais:", error);
        setLoadingMessage("Falha ao carregar dados.");
        // Você pode querer definir um estado de erro aqui para mostrar na UI
      } finally {
        setIsLoading(false);
      }
    }
    loadInitialData();
  }, []); // Array de dependências vazio, executa apenas uma vez

  // Filtrar personagens ao digitar na busca
  // useCallback para otimizar, embora não crítico para esta aplicação
  const handleSearch = useCallback(
    (text) => {
      setSearch(text);
      if (text) {
        const filtered = characters.filter((char) =>
          char.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredCharacters(filtered);
      } else {
        // Se a busca estiver vazia, mostrar todos os personagens novamente
        setFilteredCharacters(characters);
      }
    },
    [characters]
  ); // Recria a função se 'characters' mudar

  // Renderização do estado de carregamento
  if (isLoading) {
    return (
      <View style={initialLoadingStyles.loadingContainer}>
        <ActivityIndicator size="large" color="#00ff00" />
        <Text style={initialLoadingStyles.loadingText}>{loadingMessage}</Text>
      </View>
    );
  }

  // Renderização principal após carregamento
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rick and Morty</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar personagem..."
        placeholderTextColor="#ccc"
        value={search}
        onChangeText={handleSearch}
      />
      {filteredCharacters.length > 0 ? (
        <FlatList
          data={filteredCharacters}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.species}>{item.species}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.loadingText}>Nenhum personagem encontrado.</Text> // Mensagem para busca sem resultados
      )}
    </View>
  );
}
