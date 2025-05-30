import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

//Defina o nome da fonte que você usou como chave no Font.loadAsync
const FONT_RICK_AND_MORTY = "fonteRickAndMorty";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cor.preto,
    padding: 16,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: colors.cor.branco,
    textAlign: "center",
    fontFamily: FONT_RICK_AND_MORTY, // Aplicando a fonte
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
    backgroundColor: colors.cor.roxo,
    paddingVertical: 12,
    paddingHorizontal: 20, // mais espaçamento lateral
    borderRadius: 16, // mais arredondado
    marginBottom: 16,
    color: colors.cor.branco,
    fontFamily: FONT_RICK_AND_MORTY,
    borderWidth: 1,
    borderColor: colors.cor.branco,
    fontSize: 18,
    flex: 1,
    height: 48,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4, // sombra Android
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 8, // se não funcionar, use marginRight no input ou marginLeft no ícone
  },
  row: {
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: colors.cor.verdeE,
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    flex: 0.48,
    alignItems: "center",
    borderColor: colors.cor.azul,
    borderWidth: 1,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: colors.cor.cinza,
    borderWidth: 2,
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

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  favoriteIcon: {
    color: colors.cor.branco,
    backgroundColor: colors.cor.azul,
    borderRadius: 8,
    padding: 8,
    marginLeft: 5,
    alignSelf: "center",
    borderColor: colors.cor.branco,
    borderWidth: 1,
    height: 48, // igual ao input
    width: 48, // largura igual para manter proporção
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginBottom: 16,
  },
});
