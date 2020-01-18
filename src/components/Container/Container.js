import React from "react";
import { makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root: {
		height: "100%",
		padding: theme.spacing(2.5, 0.5)
	}
}));

const Container = ({ render }) => {
	const classes = useStyles();
	return (
		<div style={{ flexGrow: 1 }}>
			<Grid
				container
				justify="center"
				alignItems="flex-start"
				className={classes.root}
			>
				{render()}
			</Grid>
		</div>
	);
};

export default Container;
