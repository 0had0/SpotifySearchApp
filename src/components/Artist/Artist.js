import React from "react";
import noIMG from "../img/skeleton.jpg";

import {
	CardMedia,
	CardContent,
	Typography,
	makeStyles
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles(theme => ({
	content: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around"
	}
}));

export default function Artist({ artist }) {
	const classes = useStyles();
	const src = artist.images[1] ? artist.images[1].url : noIMG;
	return (
		<React.Fragment>
			<CardMedia
				component="img"
				alt={artist.name}
				height="285"
				src={src ? src : null}
				title={artist.name}
			/>

			<CardContent className={classes.content}>
				<div>
					<Typography gutterBottom variant="h5" component="p">
						{artist.name}
					</Typography>
					<Typography variant="body2" component="p">
						{artist.followers.total}&nbsp;followers
					</Typography>
				</div>
				<Rating name="pristine" value={null} />
			</CardContent>
		</React.Fragment>
	);
}
