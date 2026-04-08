import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Cat {
  id: string;
  url: string;
}

interface FavoritesState {
  favorites: Record<string, Cat>;
  addFavorite: (cat: Cat) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: {},

      addFavorite: (cat) =>
        set((state) => ({
          favorites: {
            ...state.favorites,
            [cat.id]: cat
          }
        })),

      removeFavorite: (id) =>
        set((state) => {
          const newFavorites = { ...state.favorites };
          delete newFavorites[id];
          return { favorites: newFavorites };
        }),

      isFavorite: (id) => {
        return Boolean(get().favorites[id]);
      }
    }),
    {
      name: 'favorite-cats'
    }
  )
);