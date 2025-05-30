import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  TextInput,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Font from "expo-font";
import styles from "../app/home/styles"; // Corrigido o caminho
import { getCharacters } from "../services/rickAndMorty"; // Corrigido o caminho

const FONT_KEY_RICK_AND_MORTY = "fonteRickAndMorty";

const initialLoadingStyles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#272b33",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#FFFFFF",
  },
});

export default function Feed() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState("Carregando fonte...");
  const [error, setError] = useState(null); // Novo estado para erro

  useEffect(() => {
    async function loadInitialData() {
      try {
        await Font.loadAsync({
          [FONT_KEY_RICK_AND_MORTY]: require("../assets/fonts/get-schwifty/get_schwifty.ttf"),
        });
        setLoadingMessage("Carregando personagens...");
        const response = await getCharacters();
        if (response && response.results) {
          setCharacters(response.results);
          setFilteredCharacters(response.results);
        } else {
          setError("Resposta da API de personagens inválida.");
        }
      } catch (error) {
        setError("Erro ao carregar dados iniciais.");
      } finally {
        setIsLoading(false);
      }
    }
    loadInitialData();
  }, []);

  const handleSearch = useCallback(
    (text) => {
      setSearch(text);
      if (text) {
        const filtered = characters.filter((char) =>
          char.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredCharacters(filtered);
      } else {
        setFilteredCharacters(characters);
      }
    },
    [characters]
  );

  if (isLoading) {
    return (
      <SafeAreaView style={initialLoadingStyles.loadingContainer}>
        <ActivityIndicator size="large" color="#00ff00" />
        <Text style={initialLoadingStyles.loadingText}>{loadingMessage}</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={initialLoadingStyles.loadingContainer}>
        <Text style={initialLoadingStyles.loadingText}>{error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <Text style={styles.title}>Rick and Morty</Text>
      <View style={styles.searchRow}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar personagem..."
          placeholderTextColor="#ccc"
          value={search}
          onChangeText={handleSearch}
        />
      </View>
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
        <Text style={styles.loadingText}>Nenhum personagem encontrado.</Text>
      )}
    </SafeAreaView>
  );
}
