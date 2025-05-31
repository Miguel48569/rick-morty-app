import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITE_KEY = "@RickAndMorty:favorites";

export const getFavorites = async () => {
  try {
    const favoritesJson = await AsyncStorage.getItem(FAVORITE_KEY);
    return favoritesJson ? JSON.parse(favoritesJson) : [];
  } catch (error) {
    console.error("Erro ao carregar favoritos:", error);
    return [];
  }
};

export const addFavorite = async (character) => {
  try {
    const currentFavorites = await getFavorites();
    if (!currentFavorites.some((fav) => fav.id === character.id)) {
      const newFavorites = [...currentFavorites, character];
      await AsyncStorage.setItem(FAVORITE_KEY, JSON.stringify(newFavorites));
      return true;
    }
    return false;
  } catch (error) {
    console.error("Erro ao adicionar favorito:", error);
    return false;
  }
};

export const removeFavorite = async (characterId) => {
  try {
    const currentFavorites = await getFavorites();
    const newFavorites = currentFavorites.filter(
      (fav) => fav.id !== characterId
    );
    await AsyncStorage.setItem(FAVORITE_KEY, JSON.stringify(newFavorites));
    return true;
  } catch (error) {
    console.error("Erro ao remover favorito:", error);
    return false;
  }
};

export const isFavorite = async (characterId) => {
  try {
    const currentFavorites = await getFavorites();
    return currentFavorites.some((fav) => fav.id === characterId);
  } catch (error) {
    console.error("Erro ao verificar favorito:", error);
    return false;
  }
};
