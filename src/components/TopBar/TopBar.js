import React from "react";
import { AppBar, Typography, Toolbar, makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
	Title: {
		padding: theme.spacing(2, 2)
	}
}));
const TopBar = () => {
	const classes = useStyle();
	return (
		<AppBar elevation={1} color="default" position="static">
			<Toolbar>
				<Typography variant="h5" className={classes.Title}>
					Spotify Artist Search
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default TopBar;
