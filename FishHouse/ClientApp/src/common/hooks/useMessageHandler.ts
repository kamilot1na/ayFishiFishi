import {useEffect} from 'react';
import {useConnection} from './useConnection';

export const useMessageHandler = (messageType: string, callback: (...args: any[]) => any) => {
    const connection = useConnection();
    useEffect(() => {
        connection.on(messageType, callback);
        return connection.off(messageType, callback);
    }, []);
}
