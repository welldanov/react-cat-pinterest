import { useCallback, useEffect, useRef, useState } from 'react';

import { fetchCats } from '@src/entities/cat/api/fetchCats.ts';
import { CatCard } from '@src/widgets/cat-card';

import type { ICat } from '@src/entities/cat/model/types.ts';

import cls from '../styles/Feed.module.scss';

export const Feed = () => {
  const [cats, setCats] = useState<ICat[]>([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const observerRef = useRef<HTMLDivElement | null>(null);

  const loadingRef = useRef(false);

  const loadCats = useCallback(async () => {
    if (loadingRef.current) return;

    loadingRef.current = true;
    setIsLoading(true);
    setError(null);

    try {
      const data = await fetchCats(20, page);

      const mapped: ICat[] = data.map((item) => ({
        id: item.id,
        image: item.url
      }));

      setCats((prev) => [...prev, ...mapped]);
      setPage((prev) => prev + 1);
    } catch {
      setError('Ошибка при загрузке котиков');
    } finally {
      loadingRef.current = false;
      setIsLoading(false);
    }
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadCats().then();
        }
      },
      { rootMargin: '200px' }
    );

    const currentRef = observerRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
      observer.disconnect();
    };
  }, [loadCats]);

  return (
    <section className={cls.feed}>
      <div className={cls.container}>
        <div className={cls.items}>
          {cats.map((cat) => (
            <CatCard key={cat.id} cat={cat} />
          ))}
        </div>

        {error && (
          <div className={cls.text}>
            {error}
          </div>
        )}

        <div ref={observerRef} className={cls.text}>
          {isLoading && 'Загружаем еще котиков...'}
        </div>
      </div>
    </section>
  );
};