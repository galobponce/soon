import { FC, useContext, useEffect } from 'react';
import { Paper, Typography } from '@material-ui/core';
import { useVideoPlayerStyles } from './videoPlayerStyles';
import { SocketContext } from '../../context/Socket/SocketContext';


const VideoPlayer: FC = () => {
  const { myName, myVideoRef, otherUserVideoRef, call, callAccepted, callEnded, stream } = useContext(SocketContext);

  const styles = useVideoPlayerStyles();

  useEffect(() => {
    if (myVideoRef.current && stream) {
      myVideoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <div className={styles.videoPlayerContainer}>
      {stream.active && (
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
