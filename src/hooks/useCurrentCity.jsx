// generar un custom hook que consiga las coordenadas del navegado, llame a useCityByCoords y me devuelva la ciudad actual.

import { useEffect, useState } from "react";

export const useCurrentCity = () => {
  // ciudad: contiene la ciudad donde está el usuario //
  const [ciudad, setCiudad] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
          const data = await res.json();

          setCiudad(data.address.city || data.address.town || data.address.village);
        } catch {
          setError("No se pudo obtener la ciudad");
        } finally {
          setIsLoading(false);
        }
      },
      () => setError("Permiso de geolocalizacion: Denegado"),
    );
  }, []);

  return { ciudad, error, isLoading };
};
