import { useCallback, useState } from 'react';

export const useFishSaveHttpRequest = () => {
  const [loading, setLoading] = useState(false);

  const call = useCallback(async (guid: string, updateDelay: number) => {
    setLoading(true);
    const data = {
      UpdateDelay: updateDelay
    };

    await fetch(
      `${window.location.origin}/fish/${guid}/edit`,
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    setLoading(false);
  }, []);

  return { call, loading };
};
