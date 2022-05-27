import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useVideoPlayerStyles = makeStyles((theme: Theme) => createStyles({
	videoPlayerContainer: {
		display: 'flex',
		flexFlow: 'row nowrap',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		padding: '1rem',
		margin: '1rem',
		width: '95vw',

		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
			gap: '10px',
		}
	},
	videoPlayer: {
		display: 'flex',
		flexFlow: 'column nowrap',
		justifyContent: 'center',
		alignItems: 'center'
	},
	video: {
		width: '550px',
		[theme.breakpoints.down('xs')]: {
      width: '300px',
    }
	}
}));