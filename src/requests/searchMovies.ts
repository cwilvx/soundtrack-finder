import config from "../config";
import useAxios from "../utils/useAxios";

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function getSearchUrl(query: string) {
  return config.urls.tmdb_search + `&api_key=${TMDB_API_KEY}&query=${query}`;
}

export default async function searchMovies(query: string) {
  const url = getSearchUrl(query);
  const { data, error, status } = await useAxios(url);
  return { data, error, status };
}

