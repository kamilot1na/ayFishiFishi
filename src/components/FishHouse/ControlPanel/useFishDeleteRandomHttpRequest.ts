import { useCallback, useState } from 'react';

export const useFishDeleteRandomHttpRequest = () => {
  const [loading, setLoading] = useState(false);

  const call = useCallback(async () => {
    setLoading(true);
    await fetch(
      `${window.location.origin}/fish`,
      { method: 'DELETE' }
    );
    setLoading(false);
  }, []);

  return { call, loading };
};
