import React from 'react';

import { useFavoritesStore } from '@src/app/store.ts';

import heartStroke from '@src/shared/assets/icons/ui/heart-stroke.svg';
import heartFilled from '@src/shared/assets/icons/ui/heart-filled.svg';

import type { ICat } from '@src/entities/cat/model/types.ts';

import cls from './CatCard.module.scss';


type Props = {
  cat: ICat;
};

export const CatCard: React.FC<Props> = ({ cat }) => {
  const isLiked = useFavoritesStore((state) => !!state.favorites[cat.id]);
  const addFavorite = useFavoritesStore((state) => state.addFavorite);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);

  const handleToggleLike = () => {
    if (isLiked) {
      removeFavorite(cat.id);
    } else {
      addFavorite({ id: cat.id, url: cat.image });
    }
  };

  return (
    <div className={cls.card}>
      <img loading="lazy" src={cat.image} className={cls.cardImage} alt={`Cat ${cat.id}`} />

      <button
        type="button"
        className={`${cls.likeButton} ${isLiked ? cls.active : ''}`}
        onClick={handleToggleLike}
      >
        <img loading="lazy" src={heartStroke} className={cls.iconStroke} alt={'like'} />
        <img loading="lazy" src={heartFilled} className={cls.iconFilled} alt={'like'} />
      </button>
    </div>
  );
};