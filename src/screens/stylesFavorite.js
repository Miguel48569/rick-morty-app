import { StyleSheet } from "react-native";
import { colors } from "../styles/colors";

const FONT_RICK_AND_MORTY = "fonteRickAndMorty";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cor.preto,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 30,
    color: colors.cor.azul,
    marginBottom: 16,
    textAlign: "center",
    marginTop: 32,
    fontFamily: FONT_RICK_AND_MORTY,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  emptyText: {
    fontSize: 18,
    color: colors.cor.branco,
    textAlign: "center",
    fontFamily: FONT_RICK_AND_MORTY,
    marginBottom: 16,
  },
  row: {
    justifyContent: "space-between",
  },
});
