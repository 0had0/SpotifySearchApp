import React from "react";
import { Button, Typography } from "@material-ui/core";
import { client_id, redirect_uri, state } from "../Spotify";

export const hrefLink = `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_id}&scope=${[
	"user-follow-read",
	"user-follow-modify"
].join("+")}&redirect_uri=${redirect_uri}&state=${state}&show_dialog=true`;

export default function LoginButton() {
	return (
		<Button href={hrefLink} style={{ flexGrow: 1 }} >
			<Typography>
				Login&nbsp;
				<i className="fa fa-spotify"></i>
			</Typography>
		</Button>
	);
}
