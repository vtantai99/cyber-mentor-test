import { fetchJSON } from "apis/method";
import { stringify } from "qs";
const API = "https://pokeapi.co/api/v2";
const ListImage = {
  API_IMAGE_GIF: (id, front) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated${
      front ? "" : "/back"
    }/${id}.gif`,
  API_IMAGE_PNG: (id) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`,
  API_IMAGE_SVG: (id) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
};
const ListAPI = {
  getListPokemonScroll: (offset, limit) => {
    const params = {
      offset: offset || 0,
      limit: limit || 20,
    };
    const link = `${API}/pokemon?${stringify(params)}`;
    return fetchJSON(link);
  },
  getDetailPokemon: (info) => {
    const link = `${API}/pokemon/${info}`;
    return fetchJSON(link);
  },
};
export { ListAPI, ListImage };
