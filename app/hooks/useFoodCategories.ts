import { useEffect, useMemo, useState } from 'react';
import endpoint from '~/data/constants/endpoints';
import { useGetData } from './useGetData';
import { FoodGroupsType } from '~/types/food';

export const useFoodsCategories = () => {
  const [groups, setGroups] = useState<FoodGroupsType | null>(null);

  const { data, loading, error } = useGetData(endpoint.FOODGROUPS);

  useEffect(() => {
    if (data) {
      setGroups(data);
    }
  }, [data]);

  return useMemo(
    () => ({
      groups,
      loading,
      error,
    }),
    [groups, loading, error]
  );
};
