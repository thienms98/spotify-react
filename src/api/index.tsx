import axios from 'axios';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2c37ff9770msh38de50c5a059b0ep1eedebjsn8c2eea331b8b',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
  },
};

const getPlaylist = (id: string) => {
  const playlist = axios
    .get('https://spotify23.p.rapidapi.com/playlist/', {
      ...options,
      params: { id },
    })
    .then((response) => response.data)
    .catch((err) => console.log(err));

  return playlist;
};

const getPlaylistTracks = (id: string, offset: number = 0, limit: number = 100) => {
  return axios
    .get('https://spotify23.p.rapidapi.com/playlist_tracks/', {
      ...options,
      params: {
        id,
        offset,
        limit,
      },
    })
    .then((respond) => respond.data)
    .catch((err) => console.log(err));
};

export { getPlaylist, getPlaylistTracks };
