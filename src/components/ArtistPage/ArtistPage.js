import React, { useState, useEffect } from "react";

import {
	AppBar,
	Typography,
	IconButton,
	makeStyles,
	Grid
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import CloseIcon from "@material-ui/icons/Close";

import Items from "../Items";
import { getAlbums } from "../Spotify";
import Album from "../Album";
import Spiner from "../Spiner";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		flexDirection: "column",
		flexGrow: 1,
		width: "94vw",
		height: "100%",
		justifyContent: "flex-start"
	},
	TitleBar: {
		display: "flex",
		flexDirection: "row",
		flexGrow: 1,
		alignItems: "center",
		backgroundColor: "transparent",
		color: "#000"
	},
	underTitle: {
		fontWeight: theme.typography.fontWeightLight,
		padding: theme.spacing(0, 1.5)
	},
	items: {
		padding: theme.spacing(3, 1)
	},
	alert: {
		width: "100%",
		padding: theme.spacing(2, 3)
	}
}));

function HandleBackFunctionality(exit) {
	if (window.event) {
		if (window.event.clientX < 40 && window.event.clientY < 0) {
			console.log("Back button presed");
		}
	} else {
		if (window.event.currentTarget.performance.navigation.type === 2) {
			console.log("Back button presed");
		}
	}
}

export default function ArtistPage({ user, exit, token }) {
	const classes = useStyles();
	const [albums, setAlbums] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		getAlbums(user.id, token, setAlbums, setError, setIsLoading);
		HandleBackFunctionality(exit);
	});
	useEffect(() => {
		setTimeout(() => setError(null), 1000);
	}, [error]);
	return (
		<div className={classes.root}>
			<AppBar
				position="static"
				className={classes.TitleBar}
				elevation={0}
			>
				<div style={{ flexGrow: 1 }}>
					<Typography variant="h5" component="h2">
						{user.name}
					</Typography>
				</div>
				<IconButton onClick={exit}>
					<CloseIcon />
				</IconButton>
			</AppBar>
			<AppBar
				position="static"
				className={classes.TitleBar}
				elevation={0}
			>
				<Typography
					variant="body2"
					component="p"
					className={classes.underTitle}
				>
					Albums
				</Typography>
				<Typography variant="body2" component="p">
					{"(Tape on Album to Open it)"}
				</Typography>
			</AppBar>
			<Grid
				container
				justify="center"
				alignItems="flex-start"
				className={classes.items}
			>
				{isLoading ? (
					<Spiner />
				) : error === null ? (
					<React.Fragment>
						{albums.map((album, i) => (
							<Items
								key={i}
								href={album.external_urls.spotify}
								render={() => <Album album={album} />}
							/>
						))}
					</React.Fragment>
				) : (
					<div className={classes.alert}>
						<Alert severity={error.severity}>{error.message}</Alert>
					</div>
				)}
			</Grid>
		</div>
	);
}
