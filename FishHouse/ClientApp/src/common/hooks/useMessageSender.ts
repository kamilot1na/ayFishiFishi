import { useCallback, useRef, useState } from 'react';
import { HubConnectionState } from '@microsoft/signalr';
import { useConnection } from './useConnection';

export const useMessageSender = (messageType: string) => {
    const [loading, setLoading] = useState(false);
    const loadingRef = useRef(false);
    loadingRef.current = loading;
    const connection = useConnection();

    const send = useCallback((...args: any[]) => {
        if(connection.state === HubConnectionState.Connected && !loadingRef.current) {
            setLoading(true);
            connection.invoke(messageType, ...args)
              .finally(() => setLoading(false))
        }
    }, [messageType]);

    return {
        send,
        loading: connection.state !== HubConnectionState.Connected ? true : loading
    };
}

export const useGenericMessageSender = () => {
    const [loading, setLoading] = useState(false);
    const loadingRef = useRef(false);
    loadingRef.current = loading;
    const connection = useConnection();

    const send = useCallback((messageType: string, ...args: any[]) => {
        if(connection.state === HubConnectionState.Connected && !loadingRef.current) {
            setLoading(true);
            connection.invoke(messageType, ...args)
              .finally(() => setLoading(false))
        }
    }, []);

    return {
        send,
        loading: connection.state !== HubConnectionState.Connected ? true : loading
    };
}
