import handleUnsplashData from '../utils/handleUnsplashData';

export default async function requestUnsplash(query) {
  const res = await fetch(`https://api.unsplash.com/photos/?${query}`, {
    headers: {
      Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      'Content-Type': 'application/json',
    },
  });

  let data = await res.json();

  data = handleUnsplashData(data);

  return data;
}
