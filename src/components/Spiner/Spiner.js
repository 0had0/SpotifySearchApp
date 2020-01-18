import React from "react";
import { makeStyles, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		minHeight: "60vh",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center"
	}
}));
export default function Spiner() {
	const classes = useStyles();
	const [progress, setProgress] = React.useState(0);

	React.useEffect(() => {
		function tick() {
			// reset when reaching 100%
			setProgress(oldProgress =>
				oldProgress >= 100 ? 0 : oldProgress + 1
			);
		}

		const timer = setInterval(tick, 20);
		return () => {
			clearInterval(timer);
		};
	}, []);
	return (
		<div className={classes.root}>
			<CircularProgress variant="determinate" value={progress} />
		</div>
	);
}
