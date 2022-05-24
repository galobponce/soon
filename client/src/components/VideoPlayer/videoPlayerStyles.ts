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
		}
	},
	videoPlayer: {
		display: 'flex',
		flexFlow: 'column nowrap',
		justifyContent: 'center',
		alignItems: 'center'
	},
	video: {
		width: '650px',
		[theme.breakpoints.down('xs')]: {
      width: '400px',
    }
	}
}));