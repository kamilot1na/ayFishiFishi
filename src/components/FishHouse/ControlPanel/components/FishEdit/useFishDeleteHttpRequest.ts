import { useCallback, useState } from 'react';

export const useFishDeleteHttpRequest = () => {
  const [loading, setLoading] = useState(false);

  const call = useCallback(async () => {
    setLoading(true);
    await fetch(
      `${window.location.origin}/fish/???`,
      { method: 'POST' }
    );
    setLoading(false);
  }, []);

  return { call, loading };
};
