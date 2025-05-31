import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Font from "expo-font";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import styles from "./stylesFavorite";
import { getFavorites } from "../services/favorites";
import CharacterCard from "./CharacterCard";

const FONT_KEY_RICK_AND_MORTY = "fonteRickAndMorty";

const initialLoadingStyles = {
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
};

export default function Favorite() {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  // Carregar fonte e favoritos iniciais
  useEffect(() => {
    async function loadInitialData() {
      try {
        await Font.loadAsync({
          [FONT_KEY_RICK_AND_MORTY]: require("../assets/fonts/get-schwifty/get_schwifty.ttf"),
        });
        const favoritesData = await getFavorites();
        setFavorites(favoritesData);
      } catch (error) {
        console.error("Erro ao carregar dados iniciais:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadInitialData();
  }, []);

  // Atualizar favoritos quando a tela receber foco
  useFocusEffect(
    React.useCallback(() => {
      const loadFavorites = async () => {
        const favoritesData = await getFavorites();
        setFavorites(favoritesData);
      };
      loadFavorites();
    }, [])
  );

  if (isLoading) {
    return (
      <SafeAreaView style={initialLoadingStyles.loadingContainer}>
        <Text style={initialLoadingStyles.loadingText}>Carregando...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <Text style={styles.title}>Favoritos</Text>
      {favorites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            Você ainda não tem personagens favoritados
          </Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          renderItem={({ item }) => (
            <CharacterCard
              item={item}
              onPressDetails={() =>
                navigation.navigate("Description", { id: item.id })
              }
            />
          )}
          contentContainerStyle={{ paddingBottom: 16 }}
        />
      )}
    </SafeAreaView>
  );
}
