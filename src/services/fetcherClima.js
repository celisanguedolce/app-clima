// Aca configure la funcion fetcher necesaria para swr para fetchear info
const BASE_URL = "https://api.openweathermap.org";

export const fetcherClima = (endpoint) => fetch(`${BASE_URL}${endpoint}`).then((res) => res.json());
