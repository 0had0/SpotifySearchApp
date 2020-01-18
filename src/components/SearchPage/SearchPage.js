import React, { useState, useEffect } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import Box from "../Box";
import TextInput from "../TextInput";
import Items from "../Items";
import LoginButton from "../LoginButton";
import ArtistPage from "../ArtistPage";
import Spiner from "../Spiner";

import Artist from "../Artist";

const useStyles = makeStyles(theme => ({
	items: {
		padding: theme.spacing(3, 1)
	},
	alert: {
		width: "100%",
		padding: theme.spacing(2, 3)
	}
}));

export default function SearchPage({ token }) {
	const classes = useStyles();
	const [position, setPostion] = useState("center");
	const [items, setItems] = useState([]);
	const [show, setShow] = useState(false);
	const [user, setUser] = useState(undefined);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => setError(null), 1000);
	}, [error]);
	return (
		<React.Fragment>
			<div
				style={{
					marginTop: position === "center" ? "40vh" : 0,
					transition: "margin-top .5s ease",
					display: "flex",
					flexDirection: "column",
					alignItems: "center"
				}}
			>
				{!token ? (
					<Box render={() => <LoginButton />} />
				) : user === undefined ? (
					<React.Fragment>
						<Box
							render={() => (
								<TextInput
									setItems={setItems}
									setShow={setShow}
									setPostion={setPostion}
									token={token}
									setError={setError}
									setIsLoading={setIsLoading}
								/>
							)}
						/>

						{!isLoading ? (
							error === null ? (
								<div style={{ width: "100%" }}>
									{show && (
										<Grid
											container
											justify="center"
											alignItems="flex-start"
											className={classes.items}
										>
											{items.map((item, i) => (
												<Items
													open={() => setUser(item)}
													key={i}
													render={() => (
														<Artist artist={item} />
													)}
												/>
											))}
										</Grid>
									)}
								</div>
							) : (
								<div className={classes.alert}>
									<Alert severity={error.severity}>
										{error.message}
									</Alert>
								</div>
							)
						) : (
							<Spiner />
						)}
					</React.Fragment>
				) : (
					<ArtistPage
						user={user}
						token={token}
						exit={() => {
							setUser(undefined);
						}}
					/>
				)}
			</div>
		</React.Fragment>
	);
}
