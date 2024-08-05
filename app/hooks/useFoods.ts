import { useEffect, useMemo, useState } from 'react';
import { FoodsType } from '~/types/food';
import { useGetData } from './useGetData';
import endpoint from '~/data/constants/endpoints';

export const useFoods = () => {
  const [foods, setFoods] = useState<FoodsType | null>(null);

  const { data, loading, error } = useGetData(endpoint.FOODS);

  useEffect(() => {
    if (data) {
      setFoods(data);
    }
  }, [data]);

  return useMemo(
    () => ({
      foods,
      loading,
      error,
    }),
    [foods, loading, error]
  );
};
