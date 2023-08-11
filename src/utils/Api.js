import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzUxMzM4Mzc1NDMxNTEzNTE0ZTNiMmQ4ZmEwMTFhOCIsInN1YiI6IjY0YjFhOWI4YTNiNWU2MDBmZjFiMTlmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kQmPa4YV6q6hBT7juBF1luncqsxbAB-zCxVeS9QWgvo";

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
