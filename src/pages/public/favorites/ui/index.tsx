import { useFavoritesStore } from '@src/app/store.ts';
import { CatCard } from '@src/widgets/cat-card';

import type { ICat } from '@src/entities/cat/model/types.ts';

import cls from '../styles/Favorites.module.scss';


export const Favorites = () => {
  const favorites = useFavoritesStore((state) => state.favorites);

  const favoriteCats: ICat[] = Object.values(favorites).map((cat) => ({
    id: cat.id,
    image: cat.url
  }));

  return (
    <section className={cls.feed}>
      <div className={cls.container}>
        {favoriteCats.length > 0 ?
          <div className={cls.items}>
            {favoriteCats.map((cat) => (
              <CatCard key={cat.id} cat={cat} />
            ))}
          </div> :
          <p className={cls.empty}>Вы еще не добавили ни одного котика в избранное :(</p>
        }
      </div>
    </section>
  );
};