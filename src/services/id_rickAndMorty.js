import api from "../lib/axios";

export async function getCharactersById(id) {
  const response = await api.get(`/character/${id}`);
  return response.data;
}
