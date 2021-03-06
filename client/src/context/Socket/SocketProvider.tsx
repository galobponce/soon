import { io } from 'socket.io-client';
import Peer, { Instance } from "simple-peer";
import { SocketContext } from "./SocketContext";
import { FC, useEffect, useRef, useState } from "react";
import { IChildrenProps, ICall } from "../../types/common";


// Me conecto al socket del server
const socket = io('https://soon-rtc.herokuapp.com/');


export const SocketProvider: FC<IChildrenProps> = ({ children }) => {

  
  // Referencias a objetos que se van a mostrar en pantalla
  const connectionRef = useRef<Instance>({} as Instance);

  
  // Estado del contexto
  const [myName, setMyName] = useState<string>('');
  const [call, setCall] = useState<ICall>({} as ICall);
  const [callEnded, setCallEnded] = useState<boolean>(false);
  const [callAccepted, setCallAccepted] = useState<boolean>(false);
  const [mySocketServerId, setMySocketServerId] = useState<string>('');
  const [myStream, setMyStream] = useState<MediaStream>({} as MediaStream);
  const [otherUserStream, setOtherUserStream] = useState<MediaStream>({} as MediaStream);

  
  // Función que se ejecuta cuando se inicializa el componente
  useEffect(() => {

    // Pido permisos para obtener el video y audio del usuario
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream: MediaStream) => {
        setMyStream(currentStream); // Almaceno el video y audio
      });

    // Almaceno el id de nuestro socket server cuando nos lo manda
    socket.on('socket-id', (id) => setMySocketServerId(id));

    // Almacenamos los datos de la llamada cuando nos llega
    socket.on('call-user', ({ from, name, data }) => {
      setCall({ isReceivingCall: true, from, name, data });
    });

  }, []);


  // Aceptar llamada
  const answer = () => {
    setCallAccepted(true);

    // Creamos una instancia de Peer para realizar la conexión entre clientes
    const peer = new Peer({ initiator: false, trickle: false, stream: myStream });

    // Cuando el otro usuario nos mande una señal de confirmación de
    // conexión, avisamos al server que queremos responder la llamada
    peer.on('signal', (data) => {
      socket.emit('answer-call', { to: call.from, data });
    });

    // Cuando el otro usuario nos mande sus datos de video y
    // audio, los almacenamos
    peer.on('stream', (currentStream) => {
      setOtherUserStream(currentStream);
    });

    // Mandamos confirmación al otro cliente
    peer.signal(call.data);

    // Almacenamos nuestra conexión en una ref
    connectionRef.current = peer;
  };

  // Llamar a otro usuario
  const callById = (id: string) => {

    // Creamos una instancia de Peer para realizar la conexión entre clientes
    const peer = new Peer({ initiator: true, trickle: false, stream: myStream });

    // Cuando el otro usuario nos mande una señal de confirmación de
    // conexión, avisamos al server que queremos hacer una llamada
    peer.on('signal', (data) => {
      socket.emit('call-user', { 
        from: mySocketServerId, 
        name: myName, 
        user: id, 
        data 
      });
    });

    // Cuando el otro usuario nos mande sus datos de video y
    // audio, los almacenamos
    peer.on('stream', (currentStream) => {
      setOtherUserStream(currentStream);
    });

    // Cuando el socket server nos manda los datos del otro cliente
    socket.on('call-accepted', (data) => {
      setCallAccepted(true);
      peer.signal(data);
    });
    
    // Almacenamos nuestra conexión en una ref
    connectionRef.current = peer;
  };

  // Cortar conexión
  const leave = () => {
    setCallEnded(true);
    connectionRef.current.destroy();
    window.location.reload();
  };

  return (
    <SocketContext.Provider value={{
      myName,
      setMyName,
      call,
      callEnded,
      callAccepted,
      mySocketServerId,
      myStream,
      otherUserStream,
      answer,
      callById,
      leave
    }}>
      { children }
    </SocketContext.Provider>
  );  
};