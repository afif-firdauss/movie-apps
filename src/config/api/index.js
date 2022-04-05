import axios from 'axios';

const API_URL = 'https://swapi.dev/api/';

export const getAllFilms = async () => {
  return await axios.get(`${API_URL}/films`);
}

export const getAllCharacters = async () => {
  return await axios.get(`${API_URL}/people`);
}

export const getCharacterDetail = async (id) => {
  return await axios.get(`${API_URL}/people/${id}`);
}