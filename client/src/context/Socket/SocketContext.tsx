import { ICall } from '../../types/common';
import { createContext, Dispatch, SetStateAction } from "react";

export interface ISocketContext {
	myName: string;
	setMyName: Dispatch<SetStateAction<string>>;
	call: ICall;
	callEnded: boolean;
	callAccepted: boolean;
	mySocketServerId: string;
	myStream: MediaStream;
	otherUserStream: MediaStream;
	// myVideoRef: RefObject<HTMLVideoElement>
	// otherUserVideoRef: RefObject<HTMLVideoElement>
	answer: () => void;
	callById: (id: string) => void;
	leave: () => void;
};

export const SocketContext = createContext<ISocketContext>({} as ISocketContext);