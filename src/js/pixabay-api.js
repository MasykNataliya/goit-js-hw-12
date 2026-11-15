import axios from 'axios';

const API_KEY = '58634550-4af4a99041819fe6024758e1d';

export function getImagesByQuery(query) {
  const BASE_URL = 'https://pixabay.com/api/';

  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}
