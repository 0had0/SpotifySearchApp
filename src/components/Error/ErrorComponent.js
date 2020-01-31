import React, { useEffect } from "react";
import { connect } from "react-redux";
import Alert from "@material-ui/lab/Alert";
import { makeStyles, Link, Collapse } from "@material-ui/core";
import { hrefLink } from "../LoginButton";
import ACTION from "../../actions";

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		position: "fixed",
		zIndex: "1023102930912",
		top: "auto",
		bottom: "1vh",
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	alert: {
		width: "40vw"
	}
}));

function ErrorComponent({ error, dispatch, showError }) {
	const classes = useStyles();

	const toggleAlert = () => dispatch(ACTION.TOGGLE_ERROR());

	useEffect(() => {
		error && error.status !== 401 && setTimeout(() => toggleAlert(), 900);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (!error) return null;

	return (
		<div className={classes.root}>
			<Collapse in={showError}>
				<Alert
					className={classes.alert}
					severity={error.severity}
					variant="filled"
					onClose={() => toggleAlert()}
					action={
						error.status === 401 ? (
							<Link href={hrefLink}>Refresh Token.</Link>
						) : null
					}
				>
					{error.message + "."}
				</Alert>
			</Collapse>
		</div>
	);
}
export default connect(
	state => ({
		error: state.error,
		showError: state.showError
	}),
	dispatch => ({
		dispatch
	})
)(ErrorComponent);
