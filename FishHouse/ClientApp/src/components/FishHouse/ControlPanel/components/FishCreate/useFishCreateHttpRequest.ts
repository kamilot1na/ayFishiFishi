import { useCallback, useState } from 'react';
import { FishType } from 'common';

export const useFishCreateHttpRequest = () => {
  const [loading, setLoading] = useState(false);

  const call = useCallback(async (fishType: FishType, fishUpdateDelay: number) => {
    setLoading(true);
    const data = {
      Type: fishType,
      UpdateDelay: fishUpdateDelay
    };

    await fetch(
      `${window.location.origin}/fish/create`,
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
