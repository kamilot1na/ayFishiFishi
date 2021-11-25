import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

type FishStyleProps = {
    x: number;
    y: number;
    rotation: number;
}

export const useClasses = makeStyles<Theme, FishStyleProps>({
    root: ({x, y, rotation}) => ({
        transform: `translateX(${x}px) translateY(${y}px) rotate(${rotation}rad)`
    })
});
