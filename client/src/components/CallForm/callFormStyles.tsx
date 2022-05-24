import { createStyles, makeStyles } from "@material-ui/core";

export const useCallFormStyles = makeStyles(() => createStyles({
	callFormContainer: {
		padding: '1rem',
		display: 'flex',
		flexFlow: 'row nowrap',
	},
	textField: {
		marginBottom: '.5rem'
	}
}));