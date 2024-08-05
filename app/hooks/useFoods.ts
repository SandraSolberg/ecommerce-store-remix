import { useEffect, useMemo, useState } from 'react';
import endpoint from '~/data/constants/endpoints';
import { FoodsType } from '~/types/food';

export const useFoods = () => {
  const [foods, setFoods] = useState<FoodsType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDataForPosts = async () => {
      try {
        const response = await fetch(endpoint.FOODS);
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        const postsData = await response.json();
        setFoods(postsData);
        setError(null);
      } catch (err) {
        setError('Unexpected error');
        setFoods(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDataForPosts();
  }, []);

  return useMemo(
    () => ({
      foods,
      loading,
      error,
    }),
    [foods, loading, error]
  );
};
