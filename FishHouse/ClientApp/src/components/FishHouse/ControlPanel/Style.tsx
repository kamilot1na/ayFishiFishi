import { styled } from '@material-ui/core';

const Root = styled('div')({
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '12px',
    height: '60%'
});

const ButtonWrapper = styled('div')({
    marginTop: '12px',
    '& > *': {
        width: '100%'
    },
    '& > *:nth-child(n+2)': {
        marginTop: '12px'
    }
})

export const Styled = {
    Root,
    ButtonWrapper
};
