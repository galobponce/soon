import { FC, useContext } from 'react';
import { useNotificationsStyles } from './notificationsStyles';
import { Box, Button, Modal, Typography } from '@material-ui/core';
import { SocketContext } from '../../context/Socket/SocketContext';


const Notifications: FC = () => {
  const { call, callAccepted, answer } = useContext(SocketContext);
  
  const styles = useNotificationsStyles();

  return (
    <Modal open={!!(call.isReceivingCall && !callAccepted)}>
      <Box className={styles.notificationsContainer}>
        <Typography variant="h6" component="h2">
          {call.name} is calling!
        </Typography>
        <Button variant="contained" color="primary" onClick={answer}>
          Answer
        </Button>
      </Box>
    </Modal>
  );
}

export default Notifications;
