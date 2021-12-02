import { styled } from '@material-ui/core';

const Root = styled('div')({
    width: 1024,
    height: 768,
    border: '7px ridge rgba(48,130,184,0.8)'
});

const Image = styled('img')({
    width: 1024,
    height: 768,
    position: 'absolute',
    zIndex: -1,
    opacity: 0.4,
    filter: 'blur(4px)'
});

export const Styled = {
    Root,
    Image
};
