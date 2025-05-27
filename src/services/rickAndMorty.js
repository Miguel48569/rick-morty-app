import api from "../lib/axios";

export async function getCharacters() {
  const response = await api.get("/character");
  return response.data;
}
