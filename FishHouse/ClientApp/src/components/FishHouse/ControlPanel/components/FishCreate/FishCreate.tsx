import React, {useCallback, useState} from 'react';
import {FishType} from 'common';
import {Button, MenuItem, TextField} from '@material-ui/core';
import {Styled} from './Style';
import {useFishCreateHttpRequest} from './useFishCreateHttpRequest';

export const FishCreate = () => {
    const {call, loading} = useFishCreateHttpRequest();
    const [fishType, setFishType] = useState(FishType.Thread);
    const [fishName, setFishName] = useState('Name');
    const [fishSpeed, setFishSpeed] = useState(5);

    const handleFishTypeChange = useCallback((e: React.ChangeEvent<{ value: unknown }>) => {
        setFishType(e.target.value as FishType);
    }, [setFishType]);

    const handleFishNameChange = useCallback((e: React.ChangeEvent<{ value: string }>) => {
        setFishName(e.target.value);
    }, [setFishName]);

    const handleChangeSpeed = (value: number) => {
        if(value >= 1 && value <= 10) {
            setFishSpeed(value);
        }
    }

    return (
        <Styled.Root>
            <Styled.Label align="center" variant="h6">Создание</Styled.Label>

            <TextField
                label="Имя"
                value={fishName}
                onChange={handleFishNameChange}
                variant="outlined"
                size="small"
            />

            <br/>

            <TextField
                select
                value={fishType}
                label="Тип"
                onChange={handleFishTypeChange}
                variant="outlined"
                size="small"
            >
                <MenuItem value={FishType.Thread}>Thread</MenuItem>
                <MenuItem value={FishType.Task}>Task</MenuItem>
            </TextField>

            <br/>

            <TextField
                type={'number'}
                label="Скорость"
                value={fishSpeed}
                onChange={e => handleChangeSpeed(+e.target.value)}
                variant="outlined"
                size="small"
            />

            <br/>

            <Button
                variant="outlined"
                disabled={loading}
                onClick={() => call(fishType, fishName, fishSpeed)}
            >
                Создать
            </Button>
        </Styled.Root>
    );
};
