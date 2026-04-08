import type { CatApiImage } from '@src/entities/cat/model/types.ts';

const headers = new Headers({
  'Content-Type': 'application/json',
  'x-api-key': import.meta.env.VITE_CAT_API_KEY
});

export const fetchCats = async (limit = 10, page = 0): Promise<CatApiImage[]> => {
  const requestOptions: RequestInit = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };

  const response = await fetch(
    `https://api.thecatapi.com/v1/images/search` +
    `?limit=${limit}` +
    `&page=${page}` +
    `&order=DESC` +
    `&has_breeds=true`,
    requestOptions
  );

  if (!response.ok) {
    throw new Error(`Cat API error: ${response.status}`);
  }

  return response.json();
};