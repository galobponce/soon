import { FC } from "react";
import { Typography } from "@material-ui/core";
import { useHeaderStyles } from './headerStyles';


const Header: FC = () => {

  const styles = useHeaderStyles();

  return (
    <div className={styles.headerContainer}>
      <Typography style={{ fontWeight: '500' }} variant="h2">Soon</Typography>
      <Typography style={{ fontWeight: '500' }} variant="h5">VideoChat with everyone!</Typography>
    </div>
  );
};

export default Header;