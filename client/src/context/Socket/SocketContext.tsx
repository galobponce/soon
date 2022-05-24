import { createContext, Dispatch, SetStateAction } from "react";
import { ICall } from '../../types/common';

export interface ISocketContext {
	myName: string;
	setMyName: Dispatch<SetStateAction<string>>;
	call: ICall;
	callEnded: boolean;
	callAccepted: boolean;
	mySocketServerId: string;
	stream: MediaStream;
	answer: () => void;
	callById: (id: string) => void;
	leave: () => void;
};

export const SocketContext = createContext<ISocketContext>({} as ISocketContext);