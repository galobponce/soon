import { createContext } from "react";

export interface ISocketContext {
	algo: string;
};

export const SocketContext = createContext({});