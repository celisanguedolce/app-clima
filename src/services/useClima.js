import useSWR from "swr";
import { fetcherClima } from "./fetcherClima";

export const useClima = (ciudad) => {
  const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY; //para ocultar la api key y que no se exponga y para eso cree el archivo.env//

  if (!API_KEY) {
    console.warn("VITE_OPENWEATHER_KEY no está configurada en el entorno");
  }

  const endpoint = ciudad ? `/data/2.5/weather?q=${encodeURIComponent(ciudad)}&lang=es&appid=${API_KEY}` : null;

  return useSWR(endpoint, fetcherClima, {
    refreshInterval: 10 * 60 * 1000,
    dedupingInterval: 10 * 60 * 1000,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    shouldRetryOnError: false,
  });
};
