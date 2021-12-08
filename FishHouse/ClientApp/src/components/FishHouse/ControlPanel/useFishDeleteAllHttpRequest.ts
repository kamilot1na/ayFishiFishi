import { useCallback, useState } from 'react';

export const useFishDeleteAllHttpRequest = () => {
  const [loading, setLoading] = useState(false);

  const call = useCallback(async () => {
    setLoading(true);
    await fetch(
      `${window.location.origin}/fish/all`,
      { method: 'DELETE' }
    );
    setLoading(false);
  }, []);

  return { call, loading };
};
