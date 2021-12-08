import { styled, Typography } from '@material-ui/core';

const Root = styled('div')({
    display: 'flex',
    flexDirection: 'column',
});

const Label = styled(Typography)({
    marginBottom: '12px'
});

export const Styled = {
    Root,
    Label
};
