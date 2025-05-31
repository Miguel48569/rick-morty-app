import { StyleSheet } from "react-native";
import { colors } from "../styles/colors";

const FONT_RICK_AND_MORTY = "fonteRickAndMorty";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cor.preto,
    paddingHorizontal: 8, // adicionado padding lateral pequeno
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
  searchInput: {
    backgroundColor: colors.cor.verdeE,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 16,
    marginBottom: 16,
    color: colors.cor.branco,
    fontFamily: FONT_RICK_AND_MORTY,
    borderWidth: 1,
    borderColor: colors.cor.azul,
    fontSize: 18,
    flex: 1,
    height: 48,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    gap: 8,
  },
  row: {
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: colors.cor.verdeE,
    borderRadius: 12, // aumentado para ficar mais arredondado
    padding: 12, // aumentado padding interno
    marginBottom: 8, // aumentado espaçamento entre cards
    flex: 0.485,
    alignItems: "center",
    borderColor: colors.cor.azul,
    borderWidth: 1,
    shadowColor: colors.cor.azul,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // adicionado sombra para destacar os cards
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: colors.cor.azul,
    borderWidth: 2,
    marginBottom: 4, // adicionado espaço abaixo da imagem
  },
  name: {
    marginTop: 8,
    fontSize: 16,
    color: colors.cor.branco,
    textAlign: "center",
    fontFamily: FONT_RICK_AND_MORTY,
  },
  species: {
    fontSize: 12,
    color: colors.cor.cinza,
    textAlign: "center",
    fontFamily: FONT_RICK_AND_MORTY,
  },
});
