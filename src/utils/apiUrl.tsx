export default function rapidApi(path: string) {
  return {
    options: {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_API_HOST,
      },
    },
    url: `https://spotify23.p.rapidapi.com/${path}`,
  };
}
