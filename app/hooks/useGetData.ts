import { useEffect, useMemo, useState } from 'react';
import { defaultApiCallError } from '~/utils/defaultValues';

export const useGetData = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        const postsData = await response.json();
        setData(postsData);
        setError(null);
      } catch (err) {
        setError(defaultApiCallError.generic);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return useMemo(
    () => ({
      data,
      isLoading: loading,
      error,
    }),
    [data, loading, error]
  );
};
