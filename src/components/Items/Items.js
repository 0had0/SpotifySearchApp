import React from "react";
import { Grid, Card, CardActionArea, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root: {
		minWidth: "300px",
		minHeight: "400px",
		margin: theme.spacing(3, 2),
		background: theme.palette.background.default,
		boxShadow: "0px 0px 1px 1px rgba(0,0,0,0.28)",
		borderRadius: "5px"
	},
	Action: {
		minWidth: "300px",
		minHeight: "400px"
	}
}));

export default function Items({ render, open, href }) {
	const classes = useStyles();
	return (
		<Grid item xs={6} sm={3} md={3} lg={2} className={classes.root}>
			<Card>
				<CardActionArea
					className={classes.Action}
					onClick={open ? open : () => {}}
					href={href ? href : null}
					target="_blank"
				>
					{render()}
				</CardActionArea>
			</Card>
		</Grid>
	);
}
