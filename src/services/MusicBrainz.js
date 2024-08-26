// src/services/musicBrainz.js
import axios from 'axios';

const BASE_URL = 'https://musicbrainz.org/ws/2/';

const searchArtist = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}artist`, {
      params: {
        query,
        fmt: 'json',
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data from MusicBrainz:", error);
    throw error;
  }
};

export { searchArtist };
