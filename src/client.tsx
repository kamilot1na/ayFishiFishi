import * as signalR from '@microsoft/signalr';
import React, {FC} from "react";

const connection = new signalR.HubConnectionBuilder()
    .withUrl(window.location.origin + '/hub')
    .build();

connection.start().catch(err => console.log(err));

export const ConnectionContext = React.createContext(connection);

export const ConnectionContextProvider: FC =
    ({children}) => (
        <ConnectionContext.Provider value={connection}>
            {children}
        </ConnectionContext.Provider>
    );
