import { createStyles, makeStyles } from "@material-ui/core";

export const useAppStyles = makeStyles(() => createStyles({
  appContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0A1929',
    color: '#ffff',
    display: 'flex',
    flexFlow: 'column nowrap',
    padding: '1rem',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
}));