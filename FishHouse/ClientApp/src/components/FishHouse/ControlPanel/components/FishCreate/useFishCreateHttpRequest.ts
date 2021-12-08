import { useCallback, useState } from 'react';
import { FishType } from 'common';

export const useFishCreateHttpRequest = () => {
  const [loading, setLoading] = useState(false);

  const call = useCallback(async (fishType: FishType, name: string) => {
    setLoading(true);
    await fetch(
      `${window.location.origin}/fish/${fishType === FishType.Thread ? 'thread' : 'task'}`,
      {
        method: 'POST',
        body: JSON.stringify({ name }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    setLoading(false);
  }, []);

    return { call, loading };
};
