import React from "react";

import { makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root: {
		minWidth: "300px",
		background: theme.palette.background.default,
		boxShadow: "0px 0px 1px 1px rgba(0,0,0,0.28)",
		borderRadius: "5px",
		padding: theme.spacing(0.5, 0.5),
		display: "flex",
		flexDirection: "row",
		flexGrow: 1
	}
}));

const Box = ({ render }) => {
	const classes = useStyles();
	return (
		<Grid item xs={10} sm={4} className={classes.root}>
			{render()}
		</Grid>
	);
};

export default Box;
