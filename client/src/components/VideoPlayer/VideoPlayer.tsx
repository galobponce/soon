import { Paper, Typography } from '@material-ui/core';
import { FC, useContext, useEffect, useRef } from 'react';
import { useVideoPlayerStyles } from './videoPlayerStyles';
import { SocketContext } from '../../context/Socket/SocketContext';


const VideoPlayer: FC = () => {
  const { myName, call, callAccepted, callEnded, myStream, otherUserStream } = useContext(SocketContext);

  const styles = useVideoPlayerStyles();

  const myVideoRef = useRef<HTMLVideoElement>({} as HTMLVideoElement);
  const otherUserVideoRef = useRef<HTMLVideoElement>({} as HTMLVideoElement);

  useEffect(() => {
    if (myStream && myStream.active) {
      myVideoRef.current.srcObject = myStream;
    }
  }, [myStream]);

  useEffect(() => {
    if (otherUserStream && otherUserStream.active) {
      otherUserVideoRef.current.srcObject = otherUserStream;
    }
  }, [otherUserStream]);

  return (
    <div className={styles.videoPlayerContainer}>
      {myStream.active && (
        <Paper className={styles.videoPlayer}>
          <Typography variant="h5" gutterBottom>{myName || 'Name'}</Typography>
          <video playsInline muted ref={myVideoRef} autoPlay className={styles.video} />
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper className={styles.videoPlayer}>
          <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
          <video playsInline ref={otherUserVideoRef} autoPlay className={styles.video} />
        </Paper>
      )}
    </div>
  );
}

export default VideoPlayer;
