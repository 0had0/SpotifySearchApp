import React, { useState, useEffect } from "react";
import { makeStyles, Grid, Grow } from "@material-ui/core";
import { connect } from "react-redux";

import Box from "../Box";
import TextInput from "../TextInput";
import Items from "../Items";
import LoginButton from "../LoginButton";
import ArtistPage from "../ArtistPage";
import Spiner from "../Spiner";

import Artist from "../Artist";

import gtag from '../../gtag'

const mapStateToProps = state => ({
	token:
		(localStorage.getItem("token") !== "null" &&
			localStorage.getItem("token") !== "undefined" &&
			localStorage.getItem("token")) ||
		state.token
});

const useStyles = makeStyles(theme => ({
	items: {
		padding: theme.spacing(3, 1)
	}
}));

function SearchPage({ token, dispatch }) {
	const classes = useStyles();
	const [position, setPostion] = useState("center");
	const [items, setItems] = useState([]);
	const [show, setShow] = useState(false);
	const [user, setUser] = useState(undefined);
	const [error, setError] = useState();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		// disable back button
		window.history.pushState(null, null, window.location.href);
		window.onpopstate = function() {
			// back button will do :
			setUser(undefined);
			window.history.go(1);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	useEffect(() => {
		dispatch({ type: "SET_ERROR", error });
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
							<div style={{ width: "100%" }}>
								{show && (
									<Grow
										in={show}
										style={{ transformOrigin: "0 0 0" }}
										{...(show ? { timeout: 1000 } : {})}
									>
										<Grid
											container
											justify="center"
											alignItems="flex-start"
											className={classes.items}
										>
											{items.map((item, i) => (
												<Items
													open={() => {
														setUser(item);
														gtag('event', 'Artist', {
															'event_label': item.name + ' - ' + item.id,
															'value': 1
														})
													}}
													key={i}
													render={() => (
														<Artist artist={item} />
													)}
												/>
											))}
										</Grid>
									</Grow>
								)}
							</div>
						) : (
							<Spiner />
						)}
					</React.Fragment>
				) : (
					<Grow
						in={true}
						style={{ transformOrigin: "0 0 0" }}
						timeout={1000}
					>
						<ArtistPage
							user={user}
							token={token}
							exit={() => {
								setUser(undefined);
								gtag('event', 'Search dismissed', {
									'event_label': user.name +" - "+user.id,
									'value': 1
								})
							}}
						/>
					</Grow>
				)}
			</div>
		</React.Fragment>
	);
}

export default connect(mapStateToProps, dispatch => ({
	dispatch
}))(SearchPage);
