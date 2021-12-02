import { styled } from '@material-ui/core';

const Root = styled('div')({
    display: 'flex',
    flexDirection: 'column',
});

const ButtonWrapper = styled('div')({
    display: 'grid',
    marginTop: '12px',
    gridTemplateColumns: '1fr 1fr',
    columnGap: '4px'
});

export const Styled = {
    Root,
    ButtonWrapper
};
