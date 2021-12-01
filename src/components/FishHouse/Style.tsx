import { makeStyles } from '@material-ui/styles';

export const useClasses = makeStyles({
    root: {
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr',
        gridTemplateRows: '1fr',
        gap: '0 24px'
    },
    pool: {
        backgroundColor: 'blue',
        width: 1024,
        height: 768
    }
});
