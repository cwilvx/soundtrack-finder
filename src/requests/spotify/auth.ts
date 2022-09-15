import axios, { AxiosResponse } from "axios";

const { VITE_SPOTIFY_CLIENT: client, VITE_SPOTIFY_SECRET: secret } = import.meta
  .env;

const url = "https://accounts.spotify.com/api/token";

const headers = {
  Authorization: "Basic " + btoa(client + ":" + client),
};

const form = {
  grant_type: "client_credentials",
};

const authOptions = {
  ...form,
  ...headers,
  json: true,
};

export default () => {
  axios
    .post(
      url,
      {
        headers: {
          Accept: "application/json",
          Authorization: "Basic " + btoa(client + ":" + client),
          "Content-Type": "application/x-www-form-urlencoded",
        },
        params: {
          grant_type: "client_credentials",
        }
      }
    )
    .then((res: AxiosResponse) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
