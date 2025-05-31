import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import * as Font from "expo-font";
import styles from "./stylesDescription";
import { getCharactersById } from "../services/id_rickAndMorty";
import { addFavorite, removeFavorite, isFavorite } from "../services/favorites";
import { colors } from "../styles/colors";

const FONT_KEY_RICK_AND_MORTY = "fonteRickAndMorty";

const initialLoadingStyles = {
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.cor.preto,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: colors.cor.branco,
    fontFamily: FONT_KEY_RICK_AND_MORTY,
  },
};

export default function Description({ route }) {
  const { id } = route.params;
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        await Font.loadAsync({
          [FONT_KEY_RICK_AND_MORTY]: require("../assets/fonts/get-schwifty/get_schwifty.ttf"),
        });
        const data = await getCharactersById(id);
        setCharacter(data);
        const favorited = await isFavorite(id);
        setIsFavorited(favorited);
      } catch (err) {
        setError("Erro ao carregar detalhes do personagem.");
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, [id]);

  const handleFavoritePress = async () => {
    try {
      if (isFavorited) {
        await removeFavorite(character.id);
      } else {
        await addFavorite(character);
      }
      setIsFavorited(!isFavorited);
    } catch (error) {
      console.error("Erro ao atualizar favorito:", error);
    }
  };

  if (isLoading) {
    return (
      <SafeAreaView style={initialLoadingStyles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.cor.azul} />
        <Text style={initialLoadingStyles.loadingText}>
          Carregando detalhes...
        </Text>
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
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>{character.name}</Text>
        <Image source={{ uri: character.image }} style={styles.image} />
        <View style={styles.card}>
          <Text style={styles.name}>
            Status:{" "}
            <Text style={{ color: colors.cor.branco }}>{character.status}</Text>
          </Text>
          <Text style={styles.name}>
            Espécie:{" "}
            <Text style={{ color: colors.cor.branco }}>
              {character.species}
            </Text>
          </Text>
          <Text style={styles.name}>
            Gênero:{" "}
            <Text style={{ color: colors.cor.branco }}>{character.gender}</Text>
          </Text>
          <Text style={styles.name}>
            Origem:{" "}
            <Text style={{ color: colors.cor.branco }}>
              {character.origin?.name}
            </Text>
          </Text>
          <Text style={styles.name}>
            Localização:{" "}
            <Text style={{ color: colors.cor.branco }}>
              {character.location?.name}
            </Text>
          </Text>
          <Text style={styles.name}>
            Episódios:{" "}
            <Text style={{ color: colors.cor.branco }}>
              {character.episode?.length}
            </Text>
          </Text>

          <TouchableOpacity
            style={[
              styles.favoriteButton,
              isFavorited && styles.favoriteButtonFavorited,
            ]}
            onPress={handleFavoritePress}
          >
            <MaterialIcons
              name={isFavorited ? "favorite" : "favorite-border"}
              size={24}
              color={colors.cor.branco}
            />
            <Text style={styles.favoriteButtonText}>
              {isFavorited
                ? "Remover dos Favoritos"
                : "Adicionar aos Favoritos"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
