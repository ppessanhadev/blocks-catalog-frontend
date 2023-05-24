import { RefObject, useState, useEffect } from 'react';
import useInfiniteScroll from 'react-easy-infinite-scroll-hook';
import { Family } from '@/types/Family';
import { getFamilies } from '@/services/GetFamilies';

export function useFamilies() {
  const [skip, setSkip] = useState(50);
  const [isLoading, setIsLoading] = useState(true);
  const [families, setFamilies] = useState<Family[]>([]);
  const hasMoreContent = families.length < 1000;

  useEffect(() => {
    getFamilies()
      .then(setFamilies)
      .finally(() => setIsLoading(false));
  }, []);

  const next = async () => {
    setIsLoading(true);
    getFamilies(skip)
      .then((data) => setFamilies((prev) => [...prev, ...data]))
      .finally(() => {
        setSkip((prev) => prev + 50);
        setIsLoading(false);
      });
  };

  const ref = useInfiniteScroll({
    next,
    rowCount: families.length,
    windowScroll: true,
    hasMore: { down: hasMoreContent },
  }) as RefObject<HTMLElement>;

  return { ref, families, isLoading };
}
