import { FC, useContext, useState } from 'react';
import { useCallFormStyles } from './callFormStyles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from '../../context/Socket/SocketContext';
import { Assignment, Phone, PhoneDisabled } from "@material-ui/icons";
import { Container, Paper, Typography, TextField, Button } from '@material-ui/core';


const CallForm: FC = () => {
  const [idToCall, setIdToCall] = useState('');
  const { myName, setMyName, mySocketServerId, callAccepted, callEnded, callById, leave } = useContext(SocketContext);

  const styles = useCallFormStyles();

  const handleCall = () => {
    
    // Verificamos que el usuario tenga nombre
    if (!myName.trim()) {
      alert('Name is required');
      return;
    }

    callById(idToCall);
  };

  return (
    <Paper elevation={3} className={styles.callFormContainer}>
      <Container>
        <Typography gutterBottom variant="h6">Account Info</Typography>
        <TextField label="Name" value={myName} onChange={(e) => setMyName(e.target.value)} fullWidth style={{marginBottom: '.5rem'}} />
        <CopyToClipboard text={mySocketServerId}>
          <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />}>
            Copy Your ID
          </Button>
        </CopyToClipboard>
      </Container>
      <Container>
        <Typography gutterBottom variant="h6">Make a call</Typography>
        <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth style={{marginBottom: '.5rem'}} />
        {callAccepted && !callEnded ? (
          <Button variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leave}>
            Hang Up
          </Button>
        ) : (
          <Button variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth onClick={() => handleCall()}>
            Call
          </Button>
        )}
      </Container>
    </Paper>
  );
}

export default CallForm;
