import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FishData, useMessageHandler } from 'common';

import { Styled } from './Style';
import { ControlPanel } from './ControlPanel';
import { Pool } from './Pool/Pool';

enum FishDirection {
  Right,
  Left,
}

type FishDTO = {
  id: string;
  x: number;
  y: number;
  direction: FishDirection;
};

const FISH_DATA_MESSAGE = 'ReceiveMessage';

export const FishHouse = () => {
  const [data, setData] = useState<FishData[]>([/* { x: 500, y: 500, rotation: 0, id: v4() } */]);
  const [selected, setSelected] = useState<FishData | null>(null);
  const poolRef = useRef<HTMLDivElement>(null);

  useMessageHandler(FISH_DATA_MESSAGE, (dtos: FishDTO[]) => {
    const newData = dtos.map(dto => ({
      id: dto.id,
      x: dto.x,
      y: dto.y,
      rotation: dto.direction === FishDirection.Left ? Math.PI : 0,
    }));

    setData(newData);
  });

  // for testing
  /* const { currentTime } = useCurrentTime(10);

  useEffect(() => {
    setData(prevState =>
      prevState.map(fish => ({
        ...fish,
        x: fish.x - Math.cos(fish.rotation),
        y: fish.y - Math.sin(fish.rotation),
        rotation: clampRotation(fish.rotation + 0.01),
      })),
    );
  }, [currentTime]); */

  const handleClickAway = useCallback(() => {
    setSelected(null);
  }, [setSelected]);

  useEffect(() => {
    if(poolRef.current)
      poolRef.current.addEventListener('click', handleClickAway, true);
    return () => {
      if(poolRef.current)
        poolRef.current.removeEventListener('click', handleClickAway, true);
    }
  }, [poolRef.current, handleClickAway]);

  return (
    <Styled.Root>
      <Pool
        divRef={poolRef}
        onClick={handleClickAway}
        fishes={data}
        onFishClick={(fish) => setSelected(fish)}
        selected={selected}
      />
      <ControlPanel selected={selected}/>
    </Styled.Root>
  );
};
