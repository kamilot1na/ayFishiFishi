import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

type FishStyleProps = {
    x: number;
    y: number;
    rotation: number;
    isSelected: boolean
}

export const useClasses = makeStyles<Theme, FishStyleProps>({
    root: ({x, y, rotation, isSelected}) => ({
        transform: `translateX(${x}px) translateY(${y}px) rotate(${rotation}rad)`,
        width: 90,
        height: 40,
        objectFit: 'contain',
        filter: (isSelected ? 'drop-shadow( 0px 0px 6px rgba(255, 255, 255, 0.9) )' : undefined),
        opacity: 0.9,
        cursor: 'pointer',
        userSelect: 'none'
    }),
    nameWrapper: ({x, y, isSelected}) => ({
        transform: `translateX(${x+20}px) translateY(${y-50}px)`,
        padding: '4px',
        backgroundColor: (isSelected ? 'rgba(255,200,0,0.5)' : 'rgba(0,0,0,0.5)'),
        color: 'white',
        display: 'inline',
        position: 'absolute',
        userSelect: 'none'
    })
});
