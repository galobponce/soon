import { FC, useContext, useEffect } from 'react';
import { Paper, Typography } from '@material-ui/core';
import { useVideoPlayerStyles } from './videoPlayerStyles';
import { SocketContext } from '../../context/Socket/SocketContext';


const VideoPlayer: FC = () => {
  const { myName, myVideoRef, otherUserVideoRef, call, callAccepted, callEnded, myStream, otherUserStream } = useContext(SocketContext);

  const styles = useVideoPlayerStyles();

  useEffect(() => {
    if (myVideoRef.current && myStream) {
      myVideoRef.current.srcObject = myStream;
    }

    if (otherUserVideoRef.current && otherUserStream) {
      otherUserVideoRef.current.srcObject = otherUserStream;
    }
  }, [myStream, otherUserStream]);

  return (
    <div className={styles.videoPlayerContainer}>
      {myStream.active && (
        <Paper className={styles.videoPlayer}>
          <Typography variant="h5" gutterBottom>{myName || 'Name'}</Typography>
          <video playsInline muted ref={myVideoRef} autoPlay className={styles.video} />
        </Paper>
      )}
      {callAccepted && !callEnded && otherUserStream.active && (
        <Paper className={styles.videoPlayer}>
          <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
          <video playsInline ref={otherUserVideoRef} autoPlay className={styles.video} />
        </Paper>
      )}
    </div>
  );
}

export default VideoPlayer;
