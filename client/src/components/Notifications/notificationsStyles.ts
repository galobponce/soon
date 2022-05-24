import { createStyles, makeStyles } from "@material-ui/core";

export const useNotificationsStyles = makeStyles(() => createStyles({
	notificationsContainer: {
		position: 'absolute' as 'absolute',
		display: 'flex',
		flexFlow: 'column nowrap',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '2rem',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		backgroundColor: '#fff',
		border: '2px solid #000',
		boxShadow: '24'
	}
}));