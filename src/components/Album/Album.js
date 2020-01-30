import React from "react";
import {
	CardMedia,
	CardContent,
	Typography,
	makeStyles
} from "@material-ui/core";
import noIMG from "../img/skeleton.jpg";

const useStyles = makeStyles(theme => ({
	content: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around"
	}
}));

export default function Album({ album }) {
	const classes = useStyles();
	const src = album.images ? album.images[1].url : noIMG;
	return (
		<React.Fragment>
			<CardMedia
				component="img"
				alt={album.name}
				height="285"
				src={src ? src : null}
				title={album.name}
			/>

			<CardContent className={classes.content}>
				<div>
					<Typography gutterBottom variant="h5" component="p">
						{album.name}
					</Typography>
					<Typography variant="body2" component="p">
						{album.total_tracks}&nbsp;Tracks
					</Typography>
					<Typography variant="body2" component="p">
						Date:&nbsp;{album.release_date}
					</Typography>
				</div>
			</CardContent>
		</React.Fragment>
	);
}
