export default function rapidApi(path: string) {
  return {
    options: {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '2c37ff9770msh38de50c5a059b0ep1eedebjsn8c2eea331b8b',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
      },
    },
    url: `https://spotify23.p.rapidapi.com/${path}`,
  };
}
