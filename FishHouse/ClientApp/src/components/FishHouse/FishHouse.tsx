import React, { useCallback, useEffect, useRef, useState } from 'react';
import { keyBy } from 'lodash';
import { FishData, FishType, NetworkMode, useInterval, useMessageHandler, useSettings } from 'common';
import moment from 'moment';

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
  threadId: number;
  updateDelay: number;
  type: FishType
};

const predictNextPosition = (
  lastState: FishData | undefined,
  currentState: FishData | undefined,
  prevState: FishData,
  deltaTime: number
): FishData => {
  if(!lastState || !currentState)
    return prevState;

  const deltaX = currentState.x - lastState.x;
  const deltaY = currentState.y - lastState.y;

  const newState = {
    x: prevState.x + deltaX * deltaTime,
    y: prevState.y + deltaY * deltaTime
  }

  return {
    ...prevState,
    ...newState
  };
}

const FISH_DATA_MESSAGE = 'ReceiveMessage';

export const FishHouse = () => {
  const [data, setData] = useState<FishData[]>([/* { x: 500, y: 500, rotation: 0, id: v4() } */]);
  const [lastData, setLastData] = useState<FishData[]>([]);
  const [currentData, setCurrentData] = useState<FishData[]>([]);
  const [selected, setSelected] = useState<FishData | null>(null);
  const { settings } = useSettings();
  const poolRef = useRef<HTMLDivElement>(null);

  const lastUpdateTime = useRef(moment.now());
  const lastDeltaUpdateTime = useRef(settings.updateFrequency);

  const lastPredictiveStepTime = useRef(moment.now());
  const lastDeltaPredictiveStepTime = useRef(10);

  const predictiveStepInterval = useInterval(10);

  useMessageHandler(FISH_DATA_MESSAGE, (dtos: FishDTO[]) => {
    const newData = dtos.map(dto => ({
      id: dto.id,
      x: dto.x,
      y: dto.y,
      rotation: dto.direction === FishDirection.Right ? Math.PI : 0,
      threadId: dto.threadId,
      updateDelay: dto.updateDelay,
      type: dto.type
    }));

    setCurrentData(prevData => {
      setLastData(prevData);
      return newData;
    });

    setData(newData);

    lastDeltaUpdateTime.current = moment.now() - lastUpdateTime.current;
    lastUpdateTime.current = moment.now();

    setSelected(newData.find(fish => fish.id === selected?.id) ?? null);
  });

  useEffect(() => {
    if(settings.networkMode === NetworkMode.Predictive)
      setData(prevState => {
        const lastDataById = keyBy(lastData, 'id');
        const currentDataById = keyBy(currentData, 'id');
        return prevState.map(fish =>
          predictNextPosition(
            lastDataById[fish.id],
            currentDataById[fish.id],
            fish,
            lastDeltaPredictiveStepTime.current / lastDeltaUpdateTime.current
          ));
      });
    lastDeltaPredictiveStepTime.current = moment.now() - lastPredictiveStepTime.current;
    lastPredictiveStepTime.current = moment.now();
  }, [predictiveStepInterval, lastDeltaUpdateTime]);

  // for testing
  /* const currentTime = useInterval(10);

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
