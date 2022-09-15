export interface TMDB_HTTP_RES {
  results: Movie[];
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
}
