import { StyleSheet } from "react-native";
import { colors } from "../styles/colors";

const FONT_RICK_AND_MORTY = "fonteRickAndMorty";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cor.preto,
    padding: 16,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: colors.cor.branco,
    textAlign: "center",
    fontFamily: FONT_RICK_AND_MORTY,
  },
  title: {
    fontSize: 30,
    color: colors.cor.azul,
    marginBottom: 16,
    textAlign: "center",
    marginTop: 32,
    fontFamily: FONT_RICK_AND_MORTY,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderColor: colors.cor.cinza,
    borderWidth: 2,
    marginBottom: 16,
    alignSelf: "center",
  },
  card: {
    backgroundColor: colors.cor.verdeE,
    borderRadius: 8,
    padding: 20,
    marginBottom: 12,
    width: "100%",
    alignItems: "flex-start",
    borderColor: colors.cor.azul,
    borderWidth: 1,
  },
  name: {
    marginTop: 8,
    fontSize: 16,
    color: colors.cor.azul,
    textAlign: "left",
    fontFamily: FONT_RICK_AND_MORTY,
  },
  favoriteButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.cor.azul,
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    width: "100%",
    justifyContent: "center",
  },
  favoriteButtonFavorited: {
    backgroundColor: colors.cor.vermelho,
  },
  favoriteButtonText: {
    color: colors.cor.branco,
    marginLeft: 8,
    fontSize: 16,
    fontFamily: FONT_RICK_AND_MORTY,
  },
});
