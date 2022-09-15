/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TMDB_API_KEY: string;
  readonly VITE_SPOTIFY_CLIENT: string;
  readonly VITE_SPOTIFY_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
