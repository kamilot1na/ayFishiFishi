import {useContext} from 'react';
import {ConnectionContext} from '../../client';

export const useConnection = () => {
    const connection = useContext(ConnectionContext);
    return connection;
}
