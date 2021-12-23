import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import { FishType } from '../../common';

type FishStyleProps = {
    x: number;
    y: number;
    rotation: number;
    flipped: boolean;
    isSelected: boolean;
    fishType: FishType;
}

export const useClasses = makeStyles<Theme, FishStyleProps>({
    root: ({x, y, rotation, isSelected, flipped, fishType}) => ({
        transform: `translateX(${x}px) translateY(${y}px) rotate(${rotation}rad) ${flipped ? 'scaleY(-1)' : ''}`,
        width: 90,
        height: 40,
        objectFit: 'contain',
        filter: (isSelected ? 'drop-shadow( 0px 0px 6px rgba(255, 255, 255, 0.9) ) ' : '') +
          (fishType ?
            'invert(8%) sepia(82%) saturate(5851%) hue-rotate(359deg) brightness(63%) contrast(111%)'
            : 'invert(66%) sepia(88%) saturate(1019%) hue-rotate(47deg) brightness(99%) contrast(114%);'
          ),
        opacity: 0.9,
        cursor: 'pointer',
        userSelect: 'none',
        position: 'absolute'
    }),
    nameWrapper: ({x, y, isSelected, flipped}) => ({
        transform: `translateX(${x+(flipped ? 30 : 5)}px) translateY(${y-50}px)`,
        padding: '4px',
        backgroundColor: (isSelected ? 'rgba(255,200,0,0.5)' : 'rgba(0,0,0,0.5)'),
        color: 'white',
        display: 'inline',
        position: 'absolute',
        userSelect: 'none',
        minWidth: 45,
        textAlign: 'center',
        zIndex: 1000
    })
});
