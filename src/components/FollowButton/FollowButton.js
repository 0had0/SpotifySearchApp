import React, { useState, useEffect } from "react";
import { Button, CircularProgress, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";

import { isFollowing, follow, unfollow } from "../Spotify";

const useStyles = makeStyles(theme => ({
	wrapper: {
		margin: theme.spacing(1),
		position: "relative"
	},
	btnPrgrs: {
		position: "absolute"
	}
}));

function FollowButton({ user, token, dispatch }) {
	const classes = useStyles();
	const [loading, setIsLoading] = useState(true);
	const [following, setIsFollowing] = useState(false);
	const [error, setError] = useState(undefined);

	const handleClick = () => {
		if (following) {
			unfollow(user.id, token, setError, setIsFollowing, setIsLoading);
		} else {
			follow(user.id, token, setError, setIsFollowing, setIsLoading);
		}
	};

	useEffect(() => {
		isFollowing(user.id, token, setIsLoading, setError, setIsFollowing);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		dispatch({ type: "SET_ERROR", error });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [error]);
	return (
		<div className={classes.wrapper}>
			<Button
				variant="outlined"
				color="primary"
				disabled={loading}
				className={classes.btn}
				onClick={handleClick}
			>
				{loading && (
					<CircularProgress size={24} className={classes.btnPrgrs} />
				)}
				{!loading && (following === true ? "Following" : "Follow")}
			</Button>
		</div>
	);
}

export default connect(null, dispatch => ({ dispatch }))(FollowButton);
