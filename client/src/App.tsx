import { FC } from 'react';
import { useAppStyles } from './appStyles';
import { SocketProvider } from './context/Socket/SocketProvider';
import { Header, Notifications, VideoPlayer, CallForm } from './components';


const App: FC = () => {

  const styles = useAppStyles();

  return (
    <SocketProvider>
      <div className={styles.appContainer}>
        <Header />
        <Notifications />
        <VideoPlayer />
        <CallForm />
      </div>
    </SocketProvider>
  );
}

export default App;
