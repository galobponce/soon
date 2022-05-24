import { createStyles, makeStyles } from "@material-ui/core";

export const useHeaderStyles = makeStyles(() => createStyles({
  headerContainer: {
    padding: '.5rem 0 1rem 0',
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 4px 5px 0px rgba(0,0,0,0.75)'
  }
}));