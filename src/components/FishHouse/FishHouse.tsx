import React, { useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';
import { FishData, useMessageHandler, useCurrentTime } from 'common';

import { v4 } from 'uuid';
import { FishComponent } from '../Fish';
import { useClasses } from './Style';
import { ControlPanel } from './ControlPanel';

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

const clampRotation = (current: number) => {
  let result = current;

  while (Math.abs(result) > Math.PI * 2) {
    if (current < 0) result += Math.PI * 2;
    else result -= Math.PI * 2;
  }

  return result;
};

const FISH_DATA_MESSAGE = 'ReceiveMessage';

export const FishHouse = () => {
  const classes = useClasses();
  const [data, setData] = useState<FishData[]>([{ x: 500, y: 500, rotation: 0, id: v4() }]);
  const [selected, setSelected] = useState<FishData | null>(null);
  const { currentTime } = useCurrentTime(10);

  useMessageHandler(FISH_DATA_MESSAGE, (dtos: FishDTO[]) => {
    const newData = dtos.map(dto => ({
      id: dto.id,
      x: dto.x,
      y: dto.y,
      rotation: dto.direction === FishDirection.Left ? Math.PI : 0,
    }));

    setData(newData);
  });

  //TODO: remove
  useEffect(() => {
    setData(prevState =>
      prevState.map(fish => ({
        ...fish,
        x: fish.x - Math.cos(fish.rotation),
        y: fish.y - Math.sin(fish.rotation),
        rotation: clampRotation(fish.rotation + 0.01),
      })),
    );
  }, [currentTime]);

  const handleClickAway = useCallback((e: MouseEvent) => {
    if(e.currentTarget === e.target)
      setSelected(null);
  }, [setSelected]);

  useEffect(() => {
    document.body.addEventListener('click', handleClickAway, true);
    return () => document.body.removeEventListener('click', handleClickAway);
  }, [handleClickAway])

  return (
    <div className={clsx(classes.root)}>
      <div className={clsx(classes.pool)}>
        {data.map(fish => (
          <FishComponent
            x={fish.x}
            y={fish.y}
            rotation={fish.rotation}
            key={fish.id}
            onClick={() => setSelected(fish)}
          />
        ))}
      </div>

      <ControlPanel selected={selected}/>
    </div>
  );
};
