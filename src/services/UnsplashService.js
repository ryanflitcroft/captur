import handleUnsplashData from '../utils/handleUnsplashData';

const url = 'https://api.unsplash.com/photos/random/?';
const headers = {
  headers: {
    Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
    'Content-Type': 'application/json',
  },
};

export default async function requestUnsplash(query, count) {
  const res = await fetch(`${url}count=${count}&query=${query}`, headers);

  let data = await res.json();

  data = handleUnsplashData(data);

  return data;
}
