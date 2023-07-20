import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2JkMGY4MzhjODYxOWE0ZDllYTAwZDJkNjZiZWFlOSIsInN1YiI6IjY0YjFhOWI4YTNiNWU2MDBmZjFiMTlmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dhyvt1UUg8l8h1oSDEmsQN9ln3jdkN3R8_OcaCIfA_Y";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });

    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
