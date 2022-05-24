import { FC } from 'react';
import { Header, Notifications, VideoPlayer, CallForm } from './components';
import { useAppStyles } from './appStyles';
import { SocketProvider } from './context/Socket/SocketProvider';


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
