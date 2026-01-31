import { create } from "zustand";

export const useFavStore = create((set, get) => ({
  // ESTADO
  favorites: [],

  //FUNCIONES QUE ME MODIFIQUEN EL ESTADO

  //1
  agregarFav: (ciudad) =>
    set((state) => ({
      favorites: [...state.favorites, ciudad],
    })),

  //2
  eliminarFav: (ciudad) =>
    set((state) => ({
      favorites: state.favorites.filter((c) => c !== ciudad),
    })),

  isFavorite: (ciudad) => {
    return get().favorites.includes(ciudad);
  },
}));
