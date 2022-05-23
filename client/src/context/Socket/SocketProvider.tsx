import Peer from "simple-peer";
import { io } from 'socket.io-client';
import { FC, useEffect, useRef, useState } from "react";
import { IChildrenProps, ICall, videoRef } from "../../types/common";
import { SocketContext, ISocketContext } from "./SocketContext";


// Me conecto al socket del server
const socket = io('http://localhost:5500');


export const SocketProvider: FC<IChildrenProps> = ({ children }) => {

  
  // Referencias a objetos que se van a mostrar en pantalla
  const userVideoRef = useRef<videoRef>({} as videoRef);
  const connectionRef = useRef({});
  const otherUserVideoRef = useRef<videoRef>({} as videoRef);

  
  // Estado del contexto
  const [myName, setMyName] = useState<string>('');
  const [call, setCall] = useState<ICall>({} as ICall);
  const [callEnded, setCallEnded] = useState<boolean>(false);
  const [callAccepted, setCallAccepted] = useState<boolean>(false);
  const [mySocketServerId, setMySocketServerId] = useState<string>('');
  const [stream, setStream] = useState<MediaStream>({} as MediaStream);

  
  // Función que se ejecuta cuando se inicializa el componente
  useEffect(() => {

    // Pido permisos para obtener el video y audio del usuario
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream: MediaStream) => {
        setStream(currentStream); // Almaceno el video y audio

        // Seteo el audio y video del usuario en la ref
        userVideoRef.current.srcObject = currentStream;
      });

    // Almaceno el id de nuestro socket server cuando nos lo manda
    socket.on('socket-id', (id) => setMySocketServerId(id));

    // Almacenamos los datos de la llamada cuando nos llega
    socket.on('call-user', ({ from, name, data }) => {
      setCall({ isReceivingCall: true, from, name, data });
    });

  }, []);

  return (
    <SocketContext.Provider value={{

    }}>
      { children }
    </SocketContext.Provider>
  );  
};